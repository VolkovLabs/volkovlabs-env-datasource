import { DataSourceJsonData } from '@grafana/data';
import { DataQuery } from '@grafana/schema';

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
