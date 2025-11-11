/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2024-09-26 20:30:17
 */
import { ApolloLink, OperationVariables } from '@apollo/client';
import { useMutation } from '@apollo/client/react';

export interface IFormDefaultData {
  weight: number
  state: boolean | number
}

// useMutation.MutationFunction
export interface IFormModelComponentProps<TData, TVariables extends OperationVariables> {
  title: string;
  model: string;
  loading: boolean;
  disabled: string[];
  required: string[];
  onCallback?: (
    options?: useMutation.MutationFunctionOptions<TData, TVariables>
  ) => Promise<ApolloLink.Result<TData>>;
}