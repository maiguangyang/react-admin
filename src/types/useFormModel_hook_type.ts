/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2024-09-26 20:30:17
 */
import { ApolloLink, OperationVariables } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { NavigateFunction, Params } from 'react-router-dom';
import { RouteObject } from '~@/router/types';

export interface IFormModelType<TData, TVariables extends OperationVariables> {
  model: string
  loading: boolean
  disabled: string[]
  params: Readonly<Params<string>>
  breadcrumb: RouteObject[]
  navigate: NavigateFunction
  onCallback?: (
    options?: useMutation.MutationFunctionOptions<TData, TVariables>
  ) => Promise<ApolloLink.Result<TData>>;
}
