import { PaginationProps } from 'antd';
import { IColumnsDataType } from './extract_utils_type';

export interface IInputSortType {
  [key: string]: string | number | boolean,
}

export interface IGenerateVariableType<T> {
  variables: IVariableType<T>,
  inputSort: IInputSortType[],
}

export interface IVariableType<T> {
  currentPage: number,
  perPage: number,
  search: null,
  rand: boolean,
  filter: T,
  sort: IInputSortType[],
}

export interface ITableCallback {
  [key: string]: ((page: number, pageSize: number) => void) | undefined,
}

// table组件Config配置
export interface IFormTempTableListType {
  current_page: number,
  per_page: number,
  data: any[],
  total: number,
  total_page: number,
}

// 批量删除
export interface IDeleteTableRowsType {
  model: string,
  ids: string[] | number[],
  type: string,
  addUrl?: string,
  onDeleteStatusChange: (ids: string[]) => void,
};

export interface ITableWapperType<T> {
  columns: IColumnsDataType[],
  data: IFormTempTableListType,
  variables: IVariableType<T>,
  selectedRowKeys: string[],
  setSelectedRowKeys: (res: string[]) => void,
  setFetchStatus: () => void,
}

export interface TablePaginationConfig extends PaginationProps {
  position?: TablePaginationPosition[];
}

export type IScrollType = ({x?: string | number | true | undefined; y?: string | number | undefined;} & { scrollToFirstRowOnChange?: boolean | undefined;}) | undefined;
export type ITablePaginationType = false | TablePaginationConfig | undefined;

export type TablePaginationPosition = 'none' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
