import React from 'react';
import { DataSourceSettings } from '@grafana/data';
import { render, screen, fireEvent } from '@testing-library/react';
import { TestIds } from '../../constants';
import { DataSourceOptions } from '../../types';
import { ConfigEditor } from './ConfigEditor';

/**
 * Override Options
 */
interface OverrideOptions {
  [key: string]: unknown;
  jsonData?: object;
  secureJsonData?: object | null;
}

/**
 * Configuration Options
 */
const getOptions = ({
  jsonData = {},
  secureJsonData = {},
  ...overrideOptions
}: OverrideOptions = {}): DataSourceSettings<DataSourceOptions, any> => ({
  id: 1,
  orgId: 2,
  name: '',
  typeLogoUrl: '',
  type: '',
  uid: '',
  typeName: '',
  access: '',
  url: '',
  user: '',
  database: '',
  basicAuth: false,
  basicAuthUser: '',
  isDefault: false,
  secureJsonFields: {},
  readOnly: false,
  withCredentials: false,
  ...overrideOptions,
  jsonData: {
    filter: '',
    ...jsonData,
  },
});

/**
 * Config Editor
 */
describe('ConfigEditor', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockReset();
  });

  /**
   * Filter
   */
  describe('Filter', () => {
    it('Should apply filter value and change options if field was changed', () => {
      const options = getOptions({ jsonData: { filter: '' } });

      render(<ConfigEditor options={options} onOptionsChange={onChange} />);

      const testedComponent = screen.getByTestId(TestIds.configEditor.fieldFilter);
      expect(testedComponent).toHaveValue(options.jsonData.filter);

      const newValue = 'GF_';
      fireEvent.change(testedComponent, { target: { value: newValue } });

      expect(onChange).toHaveBeenCalledWith({
        ...options,
        jsonData: {
          ...options.jsonData,
          filter: newValue,
        },
      });
    });
  });
});
