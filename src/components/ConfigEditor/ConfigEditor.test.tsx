import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { DataSourceSettings } from '@grafana/data';
import { DataSourceOptions } from '../../types';
import { ConfigEditor } from './ConfigEditor';

/**
 * Component
 */
type ShallowComponent = ShallowWrapper<ConfigEditor['props'], ConfigEditor['state'], ConfigEditor>;

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
  password: '',
  user: '',
  database: '',
  basicAuth: false,
  basicAuthPassword: '',
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
    const getComponent = (wrapper: ShallowComponent) =>
      wrapper.findWhere((node: any) => {
        return node.prop('onChange') === wrapper.instance().onFilterChange;
      });

    it('Should apply filter value and change options if field was changed', () => {
      const options = getOptions({ jsonData: { filter: '' } });
      const wrapper = shallow<ConfigEditor>(<ConfigEditor options={options} onOptionsChange={onChange} />);

      const testedComponent = getComponent(wrapper);
      expect(testedComponent.prop('value')).toEqual(options.jsonData.filter);

      const newValue = 'GF_';
      testedComponent.simulate('change', { target: { value: newValue } });
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
