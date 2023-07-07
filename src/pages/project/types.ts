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
  id: string;
  model: string;
  formData: IFormDataType;
}