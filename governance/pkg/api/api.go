package api

import (
	"context"
	"errors"
	"net/http"

	"github.com/benbjohnson/clock"
	gov_types "github.com/common-fate/common-fate/governance/pkg/types"
	"github.com/common-fate/common-fate/pkg/deploy"
	"github.com/common-fate/common-fate/pkg/rule"
	"github.com/common-fate/common-fate/pkg/service/rulesvc"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/ddb"
	"github.com/go-chi/chi/v5"
	"go.uber.org/zap"
)

type API struct {
	DB    ddb.Storage
	Rules AccessRuleService
	log   zap.SugaredLogger
}

//go:generate go run github.com/golang/mock/mockgen -destination=mocks/mock_accessrule_service.go -package=mocks . AccessRuleService

// AccessRuleService can create and get rules
type AccessRuleService interface {
	CreateAccessRule(ctx context.Context, userID string, in types.CreateAccessRuleRequest) (*rule.AccessRule, error)
	UpdateRule(ctx context.Context, in *rulesvc.UpdateOpts) (*rule.AccessRule, error)
}

// var _ ServerInterface = &API{}

type Opts struct {
	Log                 *zap.SugaredLogger
	PaginationKMSKeyARN string
	DynamoTable         string
	DeploymentConfig    deploy.DeployConfigReader
}

// New creates a new API.
func New(ctx context.Context, opts Opts) (*API, error) {
	if opts.Log == nil {
		return nil, errors.New("opts.Log must be provided")
	}
	tokenizer, err := ddb.NewKMSTokenizer(ctx, opts.PaginationKMSKeyARN)
	if err != nil {
		return nil, err
	}

	db, err := ddb.New(ctx, opts.DynamoTable, ddb.WithPageTokenizer(tokenizer))
	if err != nil {
		return nil, err
	}

	clk := clock.New()

	a := API{
		Rules: &rulesvc.Service{
			Clock: clk,
			DB:    db,
		},
		DB:  db,
		log: *opts.Log,
	}

	return &a, nil
}

// Handler returns a HTTP handler.
// Hander doesn't add any middleware. It is the caller's
// responsibility to add any middleware.
func (a *API) Handler(r chi.Router) http.Handler {
	return gov_types.HandlerFromMux(a, r)
}
