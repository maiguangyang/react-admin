import { ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions } from '@apollo/client';

export interface IFormDefaultData {
  weight: number
  state: boolean | number
}

export interface IFormModelComponentProps<TData, TVariables> {
  title: string
  model: string
  loading: boolean
  disabled: string[]
  required: string[]
  onCallback?: (options?: MutationFunctionOptions<TData, TVariables, DefaultContext, ApolloCache<any>>) => Promise<FetchResult<TData>>
}
