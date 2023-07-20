import { ColumnType } from 'antd/lib/table/interface';
import { IValueBaseType } from './base_type';

export interface ITableListStoreProps {
  model: string
  columns: ColumnType<{}>[]
  pages?: string[]
}

export interface IFilterInputType {
  [key: string]: IValueBaseType
}