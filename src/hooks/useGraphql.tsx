import pluralize from 'pluralize';
import { gql, useQuery, useMutation, TypedDocumentNode, useLazyQuery } from '@apollo/client';
import Router from '~@/router';
import { IFormDefaultData } from '~@/types/useGraphql_hook_type';

export { Router };

export const FormDefaultDataValue: IFormDefaultData = {
  weight: 1,
  state: true,
};

export const useGraphql = <TData, TVariables>(mode: string, columns?: string, variables?: TVariables, fields: string[] = ['current_page', 'per_page', 'total', 'total_page']) => {
  return {
    // 新增
    Create() {
      const text: TypedDocumentNode<TData, TVariables> = gql`
        mutation ${mode}Add ($data: ${mode}CreateInput!) {
          create${mode}(input: $data) {
            id
          }
        }
      `;
      return useMutation(text);
    },

    // 修改
    Update() {
      const text: TypedDocumentNode<TData, TVariables> = gql`mutation ${mode}Edit ($id: ID!, $data: ${mode}UpdateInput!) {
        update${mode}(id: $id, input: $data) {
          id
        }
      }`;

      return useMutation(text);
    },

    // 删除
    Delete() {
      const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toUpperCase()));
      const text: TypedDocumentNode<TData, TVariables> = gql`
        mutation ${name}Delete ($id: [ID!]!) {
          delete${name}(id: $id)
        }
      `;

      return useMutation(text);
    },

    // 恢复
    Recovery() {
      const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toUpperCase()));
      const text: TypedDocumentNode<TData, TVariables> = gql`
        mutation ${name}Recovery ($id: [ID!]!) {
          recovery${name}(id: $id)
        }
      `;

      return useMutation(text);
    },

    // 列表
    List() {
      const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toLowerCase()));
      const text: TypedDocumentNode<TData, TVariables> = gql`
        query ${name} ($current_page: Int = 1, $per_page: Int = 10, $sort: [${mode}SortType!], $q: String, $filter: ${mode}FilterType, $rand: Boolean = false) {
          ${name}(current_page: $current_page, per_page: $per_page, sort: $sort, q: $q, filter: $filter, rand: $rand) {
            ${fields}
            data ${columns}
          }
        }
      `;

      // const res = useQuery<TData, TVariables>(text, { variables });
      // if (res.data) {
      //   res.data = (res.data[name as keyof TData] as unknown as TData);
      // }

      const res = useLazyQuery<TData, TVariables>(text, { variables });

      if (res[1].data) {
        res[1].data = (res[1].data[name as keyof TData] as unknown as TData);
      }
      return res;
    },

    // 详情
    Detail() {
      const name = mode.replace(mode.slice(0, 1), mode.slice(0, 1).toLowerCase());
      const text: TypedDocumentNode<TData, TVariables> = gql`
        query ${name} ($id: ID, $filter: ${mode}FilterType) {
          ${name}(id: $id, filter: $filter)
            ${columns}
        }
      `;

      // const res = useQuery<TData, TVariables>(text, { variables });
      // if (res.data) {
      //   res.data = (res.data[name as keyof TData] as unknown as TData);
      // }

      const res = useLazyQuery<TData, TVariables>(text, { variables });
      if (res[1].data) {
        res[1].data = (res[1].data[name as keyof TData] as unknown as TData);
      }
      return res;
    },

    // 其他查询
    Query() {
      const text: TypedDocumentNode<TData, TVariables> = gql`${mode}`;
      const res = useQuery(text, { variables });
      return res;
    },

    // 其他更改
    Mutation() {
      const text: TypedDocumentNode<TData, TVariables> = gql`${mode}`;
      const res = useMutation(text, { variables });
      return res;
    },
  };
};
