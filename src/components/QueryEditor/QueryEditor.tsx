import React from 'react';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../../datasource';
import { DataSourceOptions, Query } from '../../types';

/**
 * Editor Properties
 */
type Props = QueryEditorProps<DataSource, Query, DataSourceOptions>;

/**
 * Query Editor
 */
export const QueryEditor: React.FC<Props> = () => {
  return <>No options is available.</>;
};
