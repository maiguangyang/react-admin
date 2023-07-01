import _ from 'lodash';
import { IColumnsDataType } from '~@/types/extract_utils_type';

// 导出table的dataIndex字段，并转换成graphql请求字段
export const ExtractColumnIndex = (columns: IColumnsDataType<any>[], data?: string[]): string => {
  if (!data) data = [];
  const uniqByColumn: IColumnsDataType<any>[] = _.uniqBy(columns, 'dataIndex');
  const filterColumn: string[] = ['id', ...data].concat(uniqByColumn.filter(el => el.dataIndex !== undefined && el.dataIndex !== 'action').map(el => String(el.dataIndex)));

  const column: string = `{ ${filterColumn.toString().replace(/,/g, '\n')} }`;
  return column;
};
