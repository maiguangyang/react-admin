import { IFormDefaultData } from "~@/types/useFormData_hook_type";

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