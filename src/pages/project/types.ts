import { IRowData } from "~@/types/table_service_type";
import { IFormDefaultData } from "~@/types/useGraphql_hook_type";
import { Project, ProjectResultType } from "~@/__generated__/graphql";

export interface IFormDataType extends IFormDefaultData {
  id: string
  name: string
  desc: string
  createdAt: number
}

export interface IFormSubmitParams {
  id: string
  model: string
  formData: IFormDataType
}

export interface ITableTemp {
  label: string
  children: React.ReactNode
}

export interface IRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

export interface IDataType {
  key: React.Key;
  name: string;
  tableName: string;
  typeName: string;
  len: number;
  comment: string;
  indexName: string;
  defaultValue: string;
  validator: string;
}

// 上面的类型即将废弃

export interface IColumnType extends Project {}

export interface IProject extends Project {
  isBuild?: boolean
  percent?: number
}

export type IProjectResultType = Omit<ProjectResultType, 'data'> & {
  data: Array<IRowData<IProject>>
}
