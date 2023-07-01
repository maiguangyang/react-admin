import { ITabelColumnBase } from "~@/types/base_type";
import { IFormDefaultData } from "~@/types/useGraphql_hook_type";

export interface ITabelColumnType extends ITabelColumnBase {
  id: string
  title: string
  desc: string
  createdAt: number
}

export interface IFormDataType extends IFormDefaultData {
  name: string,
  parentText: string[] | string,
  parentId: string,
  remark: string,
}

export interface IFormSubmitParams {
  id: string;
  model: string;
  formData: IFormDataType;
}