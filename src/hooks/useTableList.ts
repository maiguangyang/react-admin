import { useEffect, useRef, useState } from 'react';
import { FormTempTableList, GenerateVariable } from '~@/services/table_service';
import { IValueBaseType } from '~@/types/base_type';
import { IColumnsDataType } from '~@/types/extract_utils_type';
import { IFormTempTableListType, IVariableType } from '~@/types/table_service_type';
import { IFilterInputType } from '~@/types/useTableList_hook_type';
import { ExtractColumnIndex, useGraphql } from './useGraphql';

export const useTableList = (model: string, columns: IColumnsDataType[]) => {
  // 排序和参数
  const filterInput = useRef<IFilterInputType>({});
  const tableDefaultData: IFormTempTableListType = FormTempTableList;
  const selectedRow: string[] = [];
  let { inputSort, variables } = GenerateVariable(filterInput.current);

  const [fetchStatus, setFetchStatus] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRow);
  const [formTempTable, setFormTempTable] = useState(tableDefaultData);

  const fields: string = ExtractColumnIndex(columns);
  const [getList, { loading, data }]: any = useGraphql(`${model}s`, fields, variables);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data) setFormTempTable({...formTempTable, ...data});
  }, [data]);

  // 搜索
  const onSearchCallback = (value: IValueBaseType, key: string) => {
    // filterInput.name_like = value;
    filterInput.current = { ...filterInput.current, [key]: value };
    variables.filter = {...filterInput.current, ...variables.filter, [key]: value};
    onFilterChange(variables);
  };

  // 过滤筛选
  const onFilterChange = (value: IVariableType<IFilterInputType>) => {
    const filter = {...filterInput.current, ...value.filter};
    const sort = value.sort.length > 0 ? value.sort : inputSort;
    variables = {...variables, filter, sort};
    setSelectedRowKeys([]);
    setFetchStatus(!fetchStatus);
    // getList();
  };

  // 删除选中项目
  const onDeleteStatusChange = (ids: string[]) => {
    const data = formTempTable.data.filter((item) => ids.indexOf(item.id) === -1);
    const keys = selectedRowKeys.filter((item) => ids.indexOf(item) === -1);

    setFormTempTable({...formTempTable, data});
    setSelectedRowKeys(keys);
  };

  return {
    loading,
    variables,
    fetchStatus,
    setFetchStatus,
    selectedRowKeys,
    setSelectedRowKeys,
    formTempTable,
    setFormTempTable,
    onSearchCallback,
    onFilterChange,
    onDeleteStatusChange,
  };
};
