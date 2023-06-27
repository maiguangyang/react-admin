import { FormDefaultData } from "~@/hooks/formData";

export interface FormDataType extends FormDefaultData {
  name: string,
  parentText: string[] | string,
  parentId: string,
  remark: string,
}

export interface FormSubmitParams {
  id: string;
  model: string;
  formData: FormDataType;
}