package plugin

/**
 * Plugin Settings
 */
type PluginSettings struct {
	Filter string `json:"filter"`
}

/**
 * Data Source Settings
 */
type Datasource struct {
	Settings *PluginSettings
}
