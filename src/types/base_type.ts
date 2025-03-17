import { FormInstance } from 'antd';
import { IFormDataType } from '~@/pages/project/types';
import { Scalars } from '~@/__generated__/graphql';

export type IValueBaseType = string | number | boolean | null

export interface ITabelColumnBase {
  isDelete: number
}

export interface IFormTempProps<T> {
  form: FormInstance<T>
  disabled: string[]
  loading: boolean
  isReadOnly: boolean
  onFinish: (formData: IFormDataType) => Promise<void>
}
export interface IOption {
  value: IValueBaseType
  label: string
  children?: IOption[]
}

// new
export interface IBaseListResultType<T> {
  current_page: Scalars['Int']['output']
  data: Array<T>
  per_page: Scalars['Int']['output']
  total: Scalars['Int']['output']
  total_page: Scalars['Int']['output']
}
