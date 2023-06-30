import { IValueBaseType } from './base_type';
import { IColumnsDataType } from './extract_utils_type';

export interface ITableListStoreProps<T> {
  model: string,
  columns: IColumnsDataType<T>[],
}

export interface IFilterInputType {
  [key: string]: IValueBaseType
}