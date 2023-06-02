import React from 'react';
import { render, screen } from '@testing-library/react';
import { Query } from '../../types';
import { QueryEditor } from './QueryEditor';

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
    it('Should apply feedType value and change', () => {
      const query = getQuery();

      render(<QueryEditor datasource={[] as any} query={query} onRunQuery={onRunQuery} onChange={onChange} />);

      expect(screen.getByText('No options is available.')).toBeInTheDocument();
    });
  });
});
