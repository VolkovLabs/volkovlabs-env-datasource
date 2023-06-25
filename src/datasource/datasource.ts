import { lastValueFrom } from 'rxjs';
import { map as map$, switchMap as switchMap$ } from 'rxjs/operators';
import { DataFrame, DataSourceInstanceSettings, getDataFrameRow, MetricFindValue } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';
import { DataSourceOptions, Query } from '../types';

/**
 * Data Source
 */
export class DataSource extends DataSourceWithBackend<Query, DataSourceOptions> {
  /**
   * Constructor
   *
   * @param {DataSourceInstanceSettings<DataSourceOptions>} instanceSettings Instance Settings
   */
  constructor(instanceSettings: DataSourceInstanceSettings<DataSourceOptions>) {
    super(instanceSettings);
  }

  /**
   * Variable query action
   *
   * @param {string} query Query
   * @param {any} options Options
   * @returns {Promise<MetricFindValue[]>} Metric Find Values
   */
  async metricFindQuery(query: string, options?: any): Promise<MetricFindValue[]> {
    /**
     * If query is not specified
     */
    if (!query) {
      return Promise.resolve([]);
    }

    /**
     * Run Query
     */
    return lastValueFrom(
      this.query({
        targets: [{ refId: 'A', datasource: options.variable.datasource, query }],
      } as any).pipe(
        switchMap$((response) => response.data),
        map$((frame: DataFrame) => {
          const values: MetricFindValue[] = [];

          /**
           * Look for Requested Variable
           */
          for (let i = 0; i < frame.length; i++) {
            const row = getDataFrameRow(frame, i);
            if (row[0] === query) {
              values.push({ text: row[1] as any });
            }
          }

          return values;
        })
      )
    );
  }
}
