import React, { ChangeEvent, PureComponent } from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { InlineField, InlineFieldRow, Input } from '@grafana/ui';
import { DataSourceOptions } from '../../types';

/**
 * Editor Properties
 */
interface Props extends DataSourcePluginOptionsEditorProps<DataSourceOptions> {}

/**
 * State
 */
interface State {}

/**
 * Config Editor
 */
export class ConfigEditor extends PureComponent<Props, State> {
  /**
   * Filter Change
   */
  onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      filter: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  /**
   * Render
   */
  render() {
    const { options } = this.props;
    const { jsonData } = options;

    return (
      <InlineFieldRow>
        <InlineField label="Filter" tooltip="Allows to filter unnecessary or secured variables using Regex" grow>
          <Input onChange={this.onFilterChange} value={jsonData.filter || ''} placeholder="Regex pattern" />
        </InlineField>
      </InlineFieldRow>
    );
  }
}
