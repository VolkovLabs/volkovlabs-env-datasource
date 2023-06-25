import React, { ChangeEvent, useCallback } from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { InlineField, InlineFieldRow, Input } from '@grafana/ui';
import { TestIds } from '../../constants';
import { DataSourceOptions } from '../../types';

/**
 * Editor Properties
 */
interface Props extends DataSourcePluginOptionsEditorProps<DataSourceOptions> {}

/**
 * Config Editor
 */
export const ConfigEditor: React.FC<Props> = ({ options, onOptionsChange }) => {
  /**
   * Filter Change
   */
  const onFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const jsonData = {
        ...options.jsonData,
        filter: event.target.value,
      };
      onOptionsChange({ ...options, jsonData });
    },
    [onOptionsChange, options]
  );

  /**
   * Render
   */

  const { jsonData } = options;

  return (
    <InlineFieldRow>
      <InlineField label="Filter" tooltip="Allows to filter unnecessary or secured variables using Regex" grow>
        <Input
          onChange={onFilterChange}
          value={jsonData.filter || ''}
          placeholder="Regex pattern"
          data-testid={TestIds.configEditor.fieldFilter}
        />
      </InlineField>
    </InlineFieldRow>
  );
};
