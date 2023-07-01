import { FormInstance } from 'antd';
import { IFormDataType } from '~@/pages/project/types';

export type IValueBaseType = string | number | boolean | null

export interface ITabelColumnBase {
  isDelete: number
}

export interface IFormTempProps<T extends any> {
  form: FormInstance<T>
  disabled: string[]
  loading: boolean
  isReadOnly: boolean
  onFinish: (formData: IFormDataType) => Promise<void>
}