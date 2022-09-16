import _ from 'lodash';
import pluralize from 'pluralize';
import { gql, useQuery, useMutation } from '@apollo/client';
import Router from '~@/router';
export { ExtractColumnIndex } from '~@/common/utils/extract';

export type FormDefaultData = {
  weight: number,
  state: boolean | number,
}

export type ComponentPropsDataType = {
  title: string,
  model: string,
  disabled: string[],
}

export { Router };

export const FormDefaultDataValue: FormDefaultData = {
  weight: 1,
  state: true,
};

export const useFormData = (mode: string, reqData?: string, agm?: any, fields: string[] = ['current_page', 'per_page', 'total', 'total_page'], children: boolean = false) => {
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

  // for (const key in variables) {
  //   if (_.isObject(variables[key]) && !_.isArray(variables[key])) {
  //     for (const key1 in variables[key]) {
  //       if (_.isEmpty(variables[key][key1])) delete variables[key][key1];
  //     }
  //   }

  //   if (_.isEmpty(variables[key])) delete variables[key];
  // }

  // 新增
  if (mode.slice(mode.length - 3) === 'Add') {
    mode = mode.slice(0, mode.length - 3);
    const text = gql`mutation ${mode}Add ($data: ${mode}CreateInput!) {
      create${mode}(input: $data) {
        id
      }
    }`;

    return useMutation(text);
  }

  // 修改
  if (mode.slice(mode.length - 4) === 'Edit') {
    mode = mode.slice(0, mode.length - 4);
    const text = gql`mutation ${mode}Edit ($id: ID!, $data: ${mode}UpdateInput!) {
      update${mode}(id: $id, input: $data) {
        id
      }
    }`;

    return useMutation(text);
  }

  // 删除
  if (mode.slice(mode.length - 6) === 'Delete') {
    mode = mode.slice(0, mode.length - 6);
    const name = pluralize(mode.replace(mode.slice(0, 1), mode.slice(0, 1).toUpperCase()));
    const text = gql`mutation ${name}Delete ($id: [ID!]!) {
      delete${name}(id: $id)
    }`;

    const [func, { ...agm }]: any = useMutation(text);
    if (agm.data) {
      // agm = {...agm, delData: agm.data[`delete${name}`]};
      agm.data = agm.data[`delete${name}`];
    }
    return [func, agm];
  }

  // 恢复
  if (mode.slice(mode.length - 8) === 'Recovery') {
    mode = mode.slice(0, mode.length - 8);
    const text = gql`mutation ${mode}Recovery ($id: [ID!]!) {
      recovery${mode}(id: $id)
    }`;
    return useMutation(text);
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
    const { ...agm }: any = useQuery(text, { variables });

    if (agm.data) {
      agm.data = agm.data[name];
    }

    return agm;
  }

  // 详情
  if (mode.slice(mode.length - 6) === 'Detail') {
    mode = mode.replace('Detail', '');
    const name = mode.replace(mode.slice(0, 1), mode.slice(0, 1).toLowerCase());
    const text: any = gql`query ${mode} ($id: ID, $search: String, $filter: ${mode}FilterType) {
      ${name}(id: $id, q: $search, filter: $filter)
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
