package plugin_test

import (
	"context"
	"testing"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-starter-datasource-backend/pkg/plugin"
)

/**
 * Test Query
 */
func TestQueryData(t *testing.T) {
	settings := plugin.PluginSettings{
		Filter: "",
	}
	ds := plugin.Datasource{Settings: &settings}

	resp, err := ds.QueryData(
		context.Background(),
		&backend.QueryDataRequest{
			Queries: []backend.DataQuery{
				{RefID: "A"},
			},
		},
	)

	if err != nil {
		t.Error(err)
	}

	if len(resp.Responses) != 1 {
		t.Fatal("QueryData must return a response")
	}
}
