import { PaginationProps } from 'antd';
import { IValueBaseType } from './base_type';
import { IColumnsDataType } from './extract_utils_type';

export interface ISortInputType {
  [key: string]: IValueBaseType
}

export interface IGenerateVariableType<T> {
  variables: IVariableType<T>
  inputSort: ISortInputType[]
}

export interface IVariableType<T> {
  currentPage: number
  perPage: number
  search: null
  rand: boolean
  filter: T
  sort: ISortInputType[]
}

export interface ITableCallback {
  [key: string]: ((page: number, pageSize: number) => void) | undefined
}

// table组件Config配置
export interface IFormTempTableListType {
  current_page: number
  per_page: number
  data: any[]
  total: number
  total_page: number
}

// 批量删除
export interface IDeleteTableRowsType {
  model: string
  ids: string[] | number[]
  type: string
  addUrl?: string
  onDeleteStatusChange: (ids: string[]) => void
};

export interface ITableWapperType<T> {
  columns: IColumnsDataType[]
  data: IFormTempTableListType
  variables: IVariableType<T>
  selectedRowKeys: string[]
  setSelectedRowKeys: (res: string[]) => void
  setFetchStatus: () => void
}

export interface ITablePaginationConfig extends PaginationProps {
  position?: ITablePaginationPosition[];
}

export type IScrollType = ({x?: string | number | true | undefined; y?: string | number | undefined;} & { scrollToFirstRowOnChange?: boolean | undefined;}) | undefined;
export type ITablePaginationType = false | ITablePaginationConfig | undefined;

export type ITablePaginationPosition = 'none' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
