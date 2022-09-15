// import { FC } from "react"
import _ from 'lodash';
import { ColumnType } from 'antd/lib/table';

export type ColumnsDataType = ColumnType<{}>

// 导出table的dataIndex字段，并转换成graphql请求字段
export const ExtractColumnIndex = (columns: ColumnsDataType[], data?: string[]): string => {
  if (!data) data = [];
  const uniqByColumn: ColumnsDataType[] = _.uniqBy(columns, 'dataIndex');
  const filterColumn: string[] = ['id', ...data].concat(uniqByColumn.filter(el => el.dataIndex !== undefined && el.dataIndex !== 'action').map(el => String(el.dataIndex)));

  const column: string = `{ ${filterColumn.toString().replace(/,/g, '\n')} }`;
  return column;
};
