package eventhandler

import (
	"context"
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
	"github.com/common-fate/common-fate/pkg/gevent"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/ddb"
	"go.uber.org/zap"
)

func (n *EventHandler) HandleAccessGroupEvents(ctx context.Context, log *zap.SugaredLogger, event events.CloudWatchEvent) error {

	var err error
	switch event.DetailType {
	case gevent.AccessGroupReviewedType:
		err = n.handleReviewEvent(ctx, event.Detail)
	case gevent.AccessGroupApprovedType:
		err = n.handleAccessGroupApprovedEvent(ctx, event.Detail)
	case gevent.AccessGroupDeclinedType:
		err = n.handleAccessGroupDeclinedDeclinedEvent(ctx, event.Detail)

	}
	if err != nil {
		return err
	}

	return nil
}

func (n *EventHandler) handleReviewEvent(ctx context.Context, detail json.RawMessage) error {
	var grantEvent gevent.AccessGroupReviewed
	err := json.Unmarshal(detail, &grantEvent)
	if err != nil {
		return err
	}

	//work out the outcome of the review
	switch grantEvent.Review.Decision {
	case types.ReviewDecisionAPPROVED:
		err := n.Eventbus.Put(ctx, gevent.AccessGroupApproved{
			AccessGroup: grantEvent.AccessGroup,
		})
		if err != nil {
			return err
		}

		return nil
	case types.ReviewDecisionDECLINED:
		err := n.Eventbus.Put(ctx, gevent.AccessGroupDeclined{
			AccessGroup: grantEvent.AccessGroup,
		})
		if err != nil {
			return err
		}

		return nil
	}
	return nil
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

	items := []ddb.Keyer{}

	// 	if all groups are reviewed update request status to active, save to ddb
	// Then start the grant workflows
	if request.AllGroupsReviewed() {
		request.UpdateStatus(types.ACTIVE)
		items = append(items, request.DBItems()...)
		err = n.DB.PutBatch(ctx, items...)
		if err != nil {
			return err
		}
	}

	_, err = n.Workflow.Grant(ctx, groupEvent.AccessGroup)
	if err != nil {
		return err
	}
	return nil

}

func (n *EventHandler) handleAccessGroupDeclinedDeclinedEvent(ctx context.Context, detail json.RawMessage) error {
	//update the group status
	var grantEvent gevent.AccessGroupDeclined
	err := json.Unmarshal(detail, &grantEvent)
	if err != nil {
		return err
	}

	grantEvent.AccessGroup.Status = types.RequestAccessGroupStatusAPPROVED
	err = n.DB.Put(ctx, &grantEvent.AccessGroup.Group)
	if err != nil {
		return err
	}
	//todo: send notification here
	return nil
}
