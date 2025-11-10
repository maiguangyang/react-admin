import _ from 'lodash';
import { Key, useEffect, useRef, useState } from 'react';
import { createStore } from 'hox';
import { ColumnType } from 'antd/lib/table/interface';
import pluralize from 'pluralize';
import { IBaseListResultType, IValueBaseType } from '~@/types/base_type';
import { IGenerateVariableType, IRowData, ISortInputType, IVariableType } from '~@/types/table_service_type';
import { IFilterInputType, ITableListStoreProps } from '~@/types/useTableList_hook_type';

import { gql, TypedDocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

import utils from '~@/utils/utils';

const sortInput: ISortInputType[] = [{ weight: 'ASC' }];

// 生成参数
export function GenerateVariable<T>(filter: T, sort: ISortInputType[]): IGenerateVariableType<T> {
  const variables: IVariableType<T> = {
    currentPage: 1,
    perPage: 10,
    search: null,
    rand: false,
    filter,
    sort,
  };

  return {
    variables,
  };
}

// 统一生成返回字段结构 ...
export function GenerateDefaultResult<T>() {
  const data: IBaseListResultType<T> = {
    current_page: 1,
    per_page: 1,
    data: [],
    total: 0,
    total_page: 0,
  };

  return data;
}

// 导出table的dataIndex字段，并转换成graphql请求字段
export function ExtractColumnIndex<TData>(columns: ColumnType<TData>[], data?: string[]) {
  if (!data) data = [];
  const uniqByColumn: ColumnType<TData>[] = _.uniqBy(columns, 'dataIndex');
  const filterColumn: string[] = ['id', ...data].concat(uniqByColumn.filter(el => el.dataIndex !== undefined && el.dataIndex !== 'action').map(el => String(el.dataIndex)));

  const column = `{ ${filterColumn.toString().replace(/,/g, '\n')} }`;
  return column;
}

// 这里单独写一个获取列表的方法
const getList = (model: string, columns?: string, variables?: any, fields?: string[]) => {
  const name = pluralize(model.replace(model.slice(0, 1), model.slice(0, 1).toLowerCase()));
  const text: TypedDocumentNode<any, any> = gql`
    query ${name} ($current_page: Int = 1, $per_page: Int = 10, $sort: [${model}SortType!], $q: String, $filter: ${model}FilterType, $rand: Boolean = false) {
      ${name}(current_page: $current_page, per_page: $per_page, sort: $sort, q: $q, filter: $filter, rand: $rand) {
        ${fields}
        data ${columns}
      }
    }
  `;

  const res = useQuery<any, any>(text, { variables });
  if (res.data) {
    res.data = (res.data[name as keyof any]);
  }
  return res;
};

/**
 * 页面列表组件使用的Store
 */
export const [useTableListStore, TableListStoreProvider] = createStore(({ model, columns, pages = ['current_page', 'per_page', 'total', 'total_page'] }: ITableListStoreProps) => {
  // 排序和参数
  const filterInputRef = useRef<IFilterInputType>({});
  const sortInputRef = useRef<ISortInputType[]>(sortInput);

  const tableDefaultData = GenerateDefaultResult<any>();
  const selectedRow: string[] = [];
  let { variables } = GenerateVariable(filterInputRef.current, sortInputRef.current);

  const [fetchStatus, setFetchStatus] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(selectedRow);

  const [formTempTable, setFormTempTable] = useState(tableDefaultData);
  const fields: string = ExtractColumnIndex<{}>(columns, ['isDelete']);
  const { loading, data } = getList(model, fields, variables, pages);

  useEffect(() => {
    if (data) setFormTempTable({ ...formTempTable, ...data });
  }, [data]);

  // 搜索
  const onSearchCallback = (value: IValueBaseType, key: string) => {
    filterInputRef.current = { ...filterInputRef.current, [key]: value };
    variables.filter = { ...filterInputRef.current, ...variables.filter, [key]: value };
    onFilterChangeCallback(variables);
  };

  // 过滤筛选
  const onFilterChangeCallback = (value: IVariableType<IFilterInputType>) => {
    const filter = utils.removeEmptyProperties({ ...filterInputRef.current, ...value.filter });
    const sort = value.sort.length > 0 ? value.sort : sortInputRef.current;
    variables = { ...variables, filter, sort };

    filterInputRef.current = _.isEmpty(value.filter) ? {} : variables.filter;
    sortInputRef.current = value.sort.length <= 0 ? sortInput : variables.sort;
    setSelectedRowKeys([]);
    setFetchStatus(!fetchStatus);
  };

  // 删除选中项目
  function onDeleteStatusChangeCallback<TData>(ids: string[], formTempTable: IBaseListResultType<IRowData<TData>>) {
    const cloneData = _.cloneDeep(formTempTable);
    cloneData.data.forEach((item) => {
      if (ids.includes(item.id)) item.isDelete = item.isDelete === 1 ? 2 : 1;
    });
    setFormTempTable(cloneData);
  }

  return {
    model,
    loading,
    columns,
    variables,
    fetchStatus,
    setFetchStatus,
    selectedRowKeys,
    setSelectedRowKeys,
    formTempTable,
    setFormTempTable,
    onSearchCallback,
    onFilterChangeCallback,
    onDeleteStatusChangeCallback,
  };
});
