package main

import (
	"os"

	"github.com/grafana/grafana-env-datasource-backend/pkg/plugin"
	"github.com/grafana/grafana-plugin-sdk-go/backend/datasource"
	"github.com/grafana/grafana-plugin-sdk-go/backend/log"
)

/**
 * Start listening to requests sent from Grafana.
 * This call is blocking so it won't finish until Grafana shuts down the process or the plugin choose
 * to exit by itself using os.Exit.
 */
func main() {
	err := datasource.Manage("volkovlabs-env-datasource", plugin.NewDatasource, datasource.ManageOpts{})

	/**
	 * Log any error if we could start the plugin
	 */
	if err != nil {
		log.DefaultLogger.Error(err.Error())
		os.Exit(1)
	}
}
