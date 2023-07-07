import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { createStore } from 'hox';
import { FormTempTableList, GenerateVariable } from '~@/services/table_service';
import { IValueBaseType } from '~@/types/base_type';
import { IFormTempTableListType, ISortInputType, IVariableType } from '~@/types/table_service_type';
import { IFilterInputType, ITableListStoreProps } from '~@/types/useTableList_hook_type';
import { ExtractColumnIndex, useGraphql } from './useGraphql';

const sortInput: ISortInputType[] = [{weight: 'ASC'}];
export const [useTableListStore, TableListStoreProvider] = createStore((props: ITableListStoreProps<any>) => {
  const { model, columns } = props;

  // 排序和参数
  const filterInputRef = useRef<IFilterInputType>({});
  const sortInputRef = useRef<ISortInputType[]>(sortInput);

  const tableDefaultData: IFormTempTableListType<any> = FormTempTableList;
  const selectedRow: string[] = [];
  let { variables } = GenerateVariable(filterInputRef.current, sortInputRef.current);

  const [fetchStatus, setFetchStatus] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRow);
  const [formTempTable, setFormTempTable] = useState(tableDefaultData);
  const fields: string = ExtractColumnIndex(columns, ['isDelete']);
  const [getList, { loading, data }]: any = useGraphql(`${model}s`, fields, variables);

  useEffect(() => {
    getList();
  }, []);

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
  const onDeleteStatusChangeCallback = (ids: string[]) => {
    const cloneData = _.cloneDeep(formTempTable);
    cloneData.data.forEach((item) => {
      if (ids.includes(item.id)) item.isDelete = item.isDelete === 1 ? 2 : 1;
    });
    setFormTempTable(cloneData);
  };

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
