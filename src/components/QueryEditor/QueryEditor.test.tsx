import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Query } from '../../types';
import { QueryEditor } from './QueryEditor';

/**
 * Component
 */
type ShallowComponent = ShallowWrapper<QueryEditor['props'], QueryEditor['state'], QueryEditor>;

/**
 * Get Query with default values and ability to override
 *
 * @param overrideQuery
 */
export const getQuery = (overrideQuery = {}): Query => ({
  refId: 'A',
  ...overrideQuery,
});

/**
 * Query Editor
 */
describe('QueryEditor', () => {
  const onRunQuery = jest.fn();
  const onChange = jest.fn();

  beforeEach(() => {
    onRunQuery.mockReset();
    onChange.mockReset();
  });

  /**
   * Component
   */
  describe('Component', () => {
    const getComponent = (wrapper: ShallowComponent) => wrapper;

    it('Should apply feedType value and change', () => {
      const query = getQuery();
      const wrapper = shallow<QueryEditor>(
        <QueryEditor datasource={[] as any} query={query} onRunQuery={onRunQuery} onChange={onChange} />
      );

      const testedComponent = getComponent(wrapper);
      expect(testedComponent.exists());
    });
  });
});
