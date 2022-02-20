package plugin_test

import (
	"context"
	"testing"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-starter-datasource-backend/pkg/plugin"
	"github.com/stretchr/testify/require"
)

/**
 * Test Query
 */
func TestQueryData(t *testing.T) {
	settings := plugin.PluginSettings{}
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

/**
 * Test Health Check
 */
func TestCheckHealth(t *testing.T) {
	settings := plugin.PluginSettings{}
	ds := plugin.Datasource{Settings: &settings}

	resp, err := ds.CheckHealth(
		context.Background(),
		&backend.CheckHealthRequest{},
	)

	if err != nil {
		t.Error(err)
	}

	require.NoError(t, err)
	require.Equal(t, resp.Status, backend.HealthStatusOk)
}

/**
 * Test Health Check with Error
 */
func TestCheckHealthWithError(t *testing.T) {
	settings := plugin.PluginSettings{
		Filter: "ABC",
	}
	ds := plugin.Datasource{Settings: &settings}

	resp, err := ds.CheckHealth(
		context.Background(),
		&backend.CheckHealthRequest{},
	)

	if err != nil {
		t.Error(err)
	}

	require.NoError(t, err)
	require.Equal(t, resp.Status, backend.HealthStatusError)
}
