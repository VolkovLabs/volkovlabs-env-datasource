package plugin

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"regexp"
	"strings"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/backend/instancemgmt"
	"github.com/grafana/grafana-plugin-sdk-go/backend/log"
	"github.com/grafana/grafana-plugin-sdk-go/data"
)

/**
 * Data source implements
 */
var (
	_ backend.QueryDataHandler   = (*Datasource)(nil)
	_ backend.CheckHealthHandler = (*Datasource)(nil)
)

/**
 * Creates a new datasource instance
 */
func NewDatasource(dis backend.DataSourceInstanceSettings) (instancemgmt.Instance, error) {
	settings := PluginSettings{
		Filter: "",
	}

	err := json.Unmarshal(dis.JSONData, &settings)
	if err != nil {
		return nil, fmt.Errorf("Could not unmarshal PluginSettings json: %w", err)
	}

	return &Datasource{Settings: &settings}, nil
}

/**
 * Handles multiple queries and returns multiple responses.
 * req contains the queries []DataQuery (where each query contains RefID as a unique identifier).
 */
func (d *Datasource) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	log.DefaultLogger.Debug("QueryData called", "request", req)

	/**
	 * Create response struct
	 */
	response := backend.NewQueryDataResponse()

	/**
	 * Loop over queries and execute them individually
	 */
	for _, q := range req.Queries {
		res := d.query(ctx, *d.Settings, q)

		/**
		 * Save the response in a hashmap based on with RefID as identifier
		 */
		response.Responses[q.RefID] = res
	}

	return response, nil
}

/**
 * Query
 */
func (d *Datasource) query(_ context.Context, settings PluginSettings, query backend.DataQuery) backend.DataResponse {
	response := backend.DataResponse{}

	/**
	 * Create data frame response
	 */
	frame := data.NewFrame("Value")

	var ids []string
	var values []string

	/**
	 * Compile regex
	 */
	r, _ := regexp.Compile(settings.Filter)

	/**
	 * Get Environment Variables
	 */
	for _, e := range os.Environ() {
		pair := strings.SplitN(e, "=", 2)

		if !r.MatchString(pair[0]) {
			continue
		}

		ids = append(ids, pair[0])
		values = append(values, pair[1])
	}

	/**
	 * Add fields
	 */
	frame.Fields = append(frame.Fields,
		data.NewField("Id", nil, ids),
		data.NewField("Value", nil, values),
	)

	/**
	 * Add the frames to the response and return
	 */
	response.Frames = append(response.Frames, frame)
	return response
}

/**
 * CheckHealth handles health checks sent from Grafana to the plugin
 */
func (d *Datasource) CheckHealth(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
	log.DefaultLogger.Debug("CheckHealth called", "request", req)

	var status = backend.HealthStatusOk
	var message = "Data Source is working as expected."

	/**
	 * Create response struct
	 */
	res := d.query(ctx, *d.Settings, backend.DataQuery{
		RefID: "A",
	})

	if res.Error != nil {
		status = backend.HealthStatusError
		message = fmt.Sprintf("Error: %s", res.Error.Error())
	}

	/**
	 * Check returned frames
	 */
	if res.Frames[0].Fields[0].Len() < 1 {
		status = backend.HealthStatusError
		message = "Can't find any environment variable."
	}

	return &backend.CheckHealthResult{
		Status:  status,
		Message: message,
	}, nil
}
