import { Observable } from 'rxjs';
import { FieldType, toDataFrame } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';
import { DataSourceTestStatus } from '../constants';
import { DataSource } from './datasource';

/**
 * Data Frames
 */
let frames = [
  toDataFrame({
    refId: 'A',
    fields: [
      {
        name: 'Id',
        type: FieldType.string,
        values: ['GF_1', 'GF_2'],
      },
      {
        name: 'Value',
        type: FieldType.string,
        values: ['1', '2'],
      },
    ],
  }),
];

/**
 * Query Mock
 */
const queryMock = jest.spyOn(DataSourceWithBackend.prototype, 'query').mockImplementation(
  () =>
    new Observable((subscriber) => {
      subscriber.next({
        data: frames,
      });
      subscriber.complete();
    })
);

/**
 * Health Check Mock
 */
jest.spyOn(DataSourceWithBackend.prototype, 'testDatasource').mockImplementation(() =>
  Promise.resolve({
    message: 'Data Source is working as expected.',
    status: 'OK',
  })
);

/**
 * Data Source
 */
describe('DataSource', () => {
  const instanceSettings: any = {};
  const dataSource = new DataSource(instanceSettings);

  beforeEach(() => {
    queryMock.mockClear();
  });

  /**
   * Query
   */
  describe('Query', () => {
    it('Should return environment variables', (done) => {
      const request: any = { targets: [{ refId: 'A' }] };
      dataSource.query(request).subscribe((value) => {
        expect(queryMock).toHaveBeenCalledWith(request);
        expect(value.data.length).toEqual(1);
        expect(value.data[0].fields.length).toEqual(2);
        done();
      });
    });
  });

  /**
   * Health Check
   */
  describe('testDatasource', () => {
    it('Should handle Success state', async () => {
      const result = await dataSource.testDatasource();
      expect(result).toEqual({
        status: DataSourceTestStatus.OK,
        message: `Data Source is working as expected.`,
      });
    });
  });

  /**
   * Metric Find Query
   */
  describe('MetricFindQuery', () => {
    it('Should return values', async () => {
      const result = await dataSource.metricFindQuery('GF_1', { variable: { datasource: '123' } });
      expect(result).toEqual([
        {
          text: '1',
        },
      ]);
    });

    it('Should return nothing without query', async () => {
      const result = await dataSource.metricFindQuery('', { variable: { datasource: '123' } });
      expect(result).toEqual([]);
    });
  });

  afterAll(() => {
    queryMock.mockReset();
  });
});
