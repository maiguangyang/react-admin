import { NavigateFunction, Params } from "react-router-dom";
import { RouteObject } from "~@/router/types";

export interface IFormModelType {
  model: string
  formAdd: any
  formEdit: any
  loading: boolean
  disabled: string[]
  params: Readonly<Params<string>>
  breadcrumb: RouteObject[]
  navigate: NavigateFunction
}
