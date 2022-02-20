import { DataQuery, DataSourceJsonData } from '@grafana/data';

/**
 * Query
 */
export interface Query extends DataQuery {}

/**
 * These are options configured for each DataSource instance.
 */
export interface DataSourceOptions extends DataSourceJsonData {
  /**
   * Filter
   *
   * @type {string}
   */
  filter?: string;
}
