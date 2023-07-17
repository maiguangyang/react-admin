import _ from 'lodash';
import { ColumnType } from 'antd/es/table/interface';

// 导出table的dataIndex字段，并转换成graphql请求字段
export function ExtractColumnIndex<TData>(columns: ColumnType<TData>[], data?: string[]) {
  if (!data) data = [];
  const uniqByColumn: ColumnType<TData>[] = _.uniqBy(columns, 'dataIndex');
  const filterColumn: string[] = ['id', ...data].concat(uniqByColumn.filter(el => el.dataIndex !== undefined && el.dataIndex !== 'action').map(el => String(el.dataIndex)));

  const column = `{ ${filterColumn.toString().replace(/,/g, '\n')} }`;
  return column;
}
