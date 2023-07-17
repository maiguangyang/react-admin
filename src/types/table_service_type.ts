import { PaginationProps } from 'antd';
import { InputMaybe, Scalars } from '~@/__generated__/graphql';
import { IValueBaseType } from './base_type';

export interface ISortInputType {
  [key: string]: IValueBaseType
}

export interface IGenerateVariableType<T> {
  variables: IVariableType<T>
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

// 批量删除
export interface IDeleteTableRowsType<TData> {
  type: string
  row?: TData
};

export interface ITableRowItemProps {
  ids: string[]
}

export interface ITDeleteOrRecoveryVariables {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ITablePaginationConfig extends PaginationProps {
  position?: ITablePaginationPosition[];
}

export interface IHelmetWrapperProps {
  title: string
  children?: React.ReactNode
}

export type IScrollType = ({x?: string | number | true | undefined; y?: string | number | undefined;} & { scrollToFirstRowOnChange?: boolean | undefined;}) | undefined;

export type ITablePaginationPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
