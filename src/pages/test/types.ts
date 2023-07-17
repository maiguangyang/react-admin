import { IFormDefaultData } from "~@/types/useGraphql_hook_type";

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