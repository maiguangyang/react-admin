import _ from 'lodash';
import { Key, useEffect, useRef, useState } from 'react';
import { createStore } from 'hox';
import { IBaseListResultType, IValueBaseType } from '~@/types/base_type';
import { IRowData, ISortInputType, IVariableType } from '~@/types/table_service_type';
import { IFilterInputType, ITableListStoreProps } from '~@/types/useTableList_hook_type';
import { GenerateDefaultResult, GenerateVariable } from '~@/services/table_service';

import { ExtractColumnIndex, useGraphql } from '~@/hooks/useGraphql';

const sortInput: ISortInputType[] = [{weight: 'ASC'}];

export const [useTableListStore, TableListStoreProvider] = createStore((props: ITableListStoreProps) => {
  const { model, columns } = props;

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
  const { loading, data } = useGraphql<any, any>(model, fields, variables).List();

  useEffect(() => {
    if (data) setFormTempTable({...formTempTable, ...data});
  }, [data]);

  // 搜索
  const onSearchCallback = (value: IValueBaseType, key: string) => {
    filterInputRef.current = { ...filterInputRef.current, [key]: value };
    variables.filter = {...filterInputRef.current, ...variables.filter, [key]: value};
    onFilterChangeCallback(variables);
  };

  // 过滤筛选
  const onFilterChangeCallback = (value: IVariableType<IFilterInputType>) => {
    const filter = {...filterInputRef.current, ...value.filter};
    const sort = value.sort.length > 0 ? value.sort : sortInputRef.current;
    variables = {...variables, filter, sort};

    filterInputRef.current = _.isEmpty(value.filter) ? {} : variables.filter;
    sortInputRef.current = value.sort.length <= 0 ? sortInput : variables.sort;
    setSelectedRowKeys([]);
    setFetchStatus(!fetchStatus);
  };

  // 删除选中项目
  // const onDeleteStatusChangeCallback = (ids: string[], formTempTable: TData) => {
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
