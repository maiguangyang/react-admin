import _ from 'lodash';
import pluralize from 'pluralize';
import { gql, useQuery, useMutation, useLazyQuery } from '@apollo/client';
import Router from '~@/router';
import { IFormDefaultData } from '~@/types/useGraphql_hook_type';

export { ExtractColumnIndex } from '~@/utils/extract';
export { Router };

export const FormDefaultDataValue: IFormDefaultData = {
  weight: 1,
  state: true,
};

export const useGraphql = (mode: string, reqData?: string, agm?: any, fields: string[] = ['current_page', 'per_page', 'total', 'total_page'], children: boolean = false) => {
  // 删除空值的key
  let variables = _.cloneDeep(agm);
  _.forEach(variables, (item, key) => {
    if (_.isPlainObject(item)) {
      variables[key] = _.omitBy(item, el => !el);
    } else if (_.isArray(item)) {
      _.forEach(item, (_item, _index) => {
        variables[key][_index] = _.omitBy(_item, el => !el);
      });
      variables[key] = _.filter(variables[key], (_item) => !_.isEmpty(item));
    }
  });

  variables = _.omitBy(variables, (item) => _.isNull(item) || (_.isObject(item) && _.isEmpty(item)) || _.isUndefined(item));

  // 新增
  if (mode.slice(mode.length - 3) === 'Add') {
    mode = mode.slice(0, mode.length - 3);
    const text = gql`mutation ${mode}Add ($data: ${mode}CreateInput!) {
      create${mode}(input: $data) {
        id
      }
    }`;

    const [func, { loading, ...agm }] = useMutation(text);
    return [func, { addLoading: loading, ...agm}];
  }

  // 修改
  if (mode.slice(mode.length - 4) === 'Edit') {
    mode = mode.slice(0, mode.length - 4);
    const text = gql`mutation ${mode}Edit ($id: ID!, $data: ${mode}UpdateInput!) {
      update${mode}(id: $id, input: $data) {
        id
      }
    }`;

    const [func, { loading, ...agm }] = useMutation(text);
    return [func, { editLoading: loading, ...agm}];
  }

  // 删除
  if (mode.slice(mode.length - 6) === 'Delete') {
    mode = mode.slice(0, mode.length - 6);
    const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toUpperCase()));
    const text = gql`mutation ${name}Delete ($id: [ID!]!) {
      delete${name}(id: $id)
    }`;

    const [func, { loading, data, error, ...agm }]: any = useMutation(text);
    const deleteData = (data && data[`delete${name}`]) ? data[`delete${name}`] : false;
    return [func, { deleteLoading: loading, deleteData, deleteError: error, ...agm}];
  }

  // 恢复
  if (mode.slice(mode.length - 8) === 'Recovery') {
    mode = mode.slice(0, mode.length - 8);
    const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toUpperCase()));
    const text = gql`mutation ${name}Recovery ($id: [ID!]!) {
      recovery${name}(id: $id)
    }`;

    const [func, { loading, data, error, ...agm }] = useMutation(text);
    const recoveryData = (data && data[`recovery${name}`]) ? data[`recovery${name}`] : false;
    return [func, { recoveryLoading: loading, recoveryData, recoveryError: error, ...agm}];
  }

  // 列表
  if (mode.slice(mode.length - 1) === 's') {
    mode = mode.slice(0, mode.length - 1);
    const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toLowerCase()));
    const FragmentFields = !children ? '' : gql`
      fragment FragmentFields on ${mode} {
        id
        name
        children {
          id
          name
        }
      }
    `;
    const text = gql`
      ${FragmentFields}
      query ${mode}s ($currentPage: Int = 1, $perPage: Int = 10, $sort: [${mode}SortType!], $search: String, $filter: ${mode}FilterType, $rand: Boolean = false) {
        ${name}(current_page: $currentPage, per_page: $perPage, sort: $sort, q: $search, filter: $filter, rand: $rand) {
          ${fields}
          data ${reqData}
        }
      }
    `;
    // let { loading, error, data, client }: any = useQuery(text, { variables });
    const [getList, { ...agm }] = useLazyQuery(text, { variables });

    if (agm.data) {
      agm.data = agm.data[name];
    }

    return [getList, agm];
  }

  // 详情
  if (mode.slice(mode.length - 6) === 'Detail') {
    mode = mode.replace('Detail', '');
    const name = mode.replace(mode.slice(0, 1), mode.slice(0, 1).toLowerCase());
    const text: any = gql`query ${mode} ($id: ID, $filter: ${mode}FilterType) {
      ${name}(id: $id, filter: $filter)
        ${reqData}
    }`;
    const { ...agm }: any = useQuery(text, { variables });
    if (agm.data) {
      agm.data = agm.data[name];
      agm.data = { ...agm.data, state: agm.data.state === 1 };
    }

    return agm;
  }

  const text = gql`${mode}`;
  return text;
};
