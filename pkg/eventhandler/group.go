package eventhandler

import (
	"context"
	"encoding/json"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/common-fate/apikit/logger"
	"github.com/common-fate/common-fate/pkg/gevent"
	"github.com/common-fate/common-fate/pkg/types"
	"go.uber.org/zap"
)

func (n *EventHandler) HandleAccessGroupEvents(ctx context.Context, log *zap.SugaredLogger, event events.CloudWatchEvent) error {
	switch event.DetailType {
	case gevent.AccessGroupReviewedType:
		return n.handleReviewEvent(ctx, event.Detail)
	case gevent.AccessGroupApprovedType:
		return n.handleAccessGroupApprovedEvent(ctx, event.Detail)
	case gevent.AccessGroupDeclinedType:
		return n.handleAccessGroupDeclinedDeclinedEvent(ctx, event.Detail)
	}
	return nil
}

func (n *EventHandler) handleReviewEvent(ctx context.Context, detail json.RawMessage) error {
	var groupEvent gevent.AccessGroupReviewed
	err := json.Unmarshal(detail, &groupEvent)
	if err != nil {
		return err
	}
	group, err := n.GetGroupFromDatabase(ctx, groupEvent.AccessGroup.RequestID, groupEvent.AccessGroup.ID)
	if err != nil {
		return err

	}
	// First, check that the group has not already been reviewed
	// if it has, then ignore this review event
	// This step prevents race conditions.
	// Reviews are processed in the order they are submitted due to the event handler having a provisioned concurrency limit of 1
	log := logger.Get(ctx)
	if group.Status != types.RequestAccessGroupStatusPENDINGAPPROVAL {
		log.Infow("Ignoring review for group which has already been reviewed", "reviewEvent", groupEvent)
	}
	reviewed := types.REVIEWED
	group.ApprovalMethod = &reviewed
	group.UpdatedAt = time.Now()
	group.Status = types.RequestAccessGroupStatusAPPROVED
	if groupEvent.Review.Decision == types.ReviewDecisionDECLINED {
		group.Status = types.RequestAccessGroupStatusDECLINED
	}
	err = n.DB.Put(ctx, group)
	if err != nil {
		return err
	}

	if groupEvent.Review.Decision == types.ReviewDecisionAPPROVED {
		return n.Eventbus.Put(ctx, gevent.AccessGroupApproved{
			AccessGroup: groupEvent.AccessGroup,
		})
	} else {
		return n.Eventbus.Put(ctx, gevent.AccessGroupDeclined{
			AccessGroup: groupEvent.AccessGroup,
		})
	}
}

// the group will already be marked as approved here
func (n *EventHandler) handleAccessGroupApprovedEvent(ctx context.Context, detail json.RawMessage) error {
	//if approved start the granting flow
	var groupEvent gevent.AccessGroupApproved
	err := json.Unmarshal(detail, &groupEvent)
	if err != nil {
		return err
	}
	request, err := n.GetRequestFromDatabase(ctx, groupEvent.AccessGroup.RequestID)
	if err != nil {
		return err
	}

	// 	if all groups are reviewed update request status to active, save to ddb
	// Then start the grant workflows
	if request.AllGroupsReviewed() {
		request.UpdateStatus(types.ACTIVE)
		err = n.DB.PutBatch(ctx, request.DBItems()...)
		if err != nil {
			return err
		}
	}

	_, err = n.Workflow.Grant(ctx, groupEvent.AccessGroup)
	return err

}

func (n *EventHandler) handleAccessGroupDeclinedDeclinedEvent(ctx context.Context, detail json.RawMessage) error {
	//update the group status
	var groupEvent gevent.AccessGroupDeclined
	err := json.Unmarshal(detail, &groupEvent)
	if err != nil {
		return err
	}
	request, err := n.GetRequestFromDatabase(ctx, groupEvent.AccessGroup.RequestID)
	if err != nil {
		return err
	}
	// If all groups are declined, then the request is marked as complete, because no grants will start
	if request.AllGroupsDeclined() {
		request.UpdateStatus(types.COMPLETE)
	} else if request.AllGroupsReviewed() {
		request.UpdateStatus(types.ACTIVE)
	}
	return n.DB.PutBatch(ctx, request.DBItems()...)
}
