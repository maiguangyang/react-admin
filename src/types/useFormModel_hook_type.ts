import { ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions } from '@apollo/client';
import { NavigateFunction, Params } from 'react-router-dom';
import { RouteObject } from '~@/router/types';

export interface IFormModelType<TData, TVariables> {
  model: string
  // formAdd: any
  // formEdit: any
  loading: boolean
  disabled: string[]
  params: Readonly<Params<string>>
  breadcrumb: RouteObject[]
  navigate: NavigateFunction
  onCallback?: (options?: MutationFunctionOptions<TData, TVariables, DefaultContext, ApolloCache<any>>) => Promise<FetchResult<TData>>
}
