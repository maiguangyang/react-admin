import { ITabelColumnBase } from "~@/types/base_type";
import { IFormDefaultData } from "~@/types/useGraphql_hook_type";

export type ITabelColumnType = IFormDataType & ITabelColumnBase & {
  isBuild?: boolean
  percent?: number
}

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