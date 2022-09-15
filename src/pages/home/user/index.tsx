import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import { Col, Input, Space } from 'antd';

import { FilterLayer }  from '~@/components/Filter';
import { Filter }       from '~@/common/utils/filter';
import { useAllRouter } from '~@/router/hooks';

import { useFormData, ExtractColumnIndex } from '~@/hooks/formData';
import { ColumnsDataType, FormTempTableListType, FormTempTableList, GenerateVariable, DeleteTableRows, TableWapper } from '~@/common/service/table';

import FormData from './components/formModel';
export const ComponentData = {
  FormData,
  model: 'User',
  title: '分类管理',
};

const { Search } = Input;

// 自定义搜索
const inputFilter: any = {
  name_like: null,
};

// 排序和参数
let { inputSort, variables } = GenerateVariable(inputFilter);

const tableDefaultData: FormTempTableListType = FormTempTableList;
const selectedRow: string[] = [];

export default () => {
  const [fetchStatus, setFetchStatus] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRow);
  const [formTempTable, setFormTempTable] = useState(tableDefaultData);
  const route = useAllRouter(ComponentData.model);
  console.log(route.Detail);

  // 获取列表数据
  const columns: ColumnsDataType[] = [
    {
      title: '登录账户',
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: '用户名称',
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      width: 150,
      render: (data: any, record: any, index: number) => {
        return (
          <span className={data === 2 ? 'error' : ''}>{Filter('state', data)}</span>
        );
      },
    },
    {
      title: '录入时间',
      dataIndex: 'createdAt',
      align: 'center',
      width: 200,
      render: (data: any, record: any, index: number) => Filter('formatDate', data),
    },
    {
      title: '操作',
      dataIndex: 'action',
      align: 'center',
      width: 200,
      render: (text: any, record: any, index: number) => {
        return (
          <Space size="middle">
            <Link to={route.Detail.replace(':id', record.id)}>查看</Link>
            <Link to={route.Edit.replace(':id', record.id)} className="primary">修改</Link>
            <DeleteTableRows type='row' model={`${ComponentData.model}Delete`} ids={[record.id]} onDeleteStatusChange={handleOnDeleteStatusChange} />
          </Space>
        );
      },
    },
  ];

  const fields: string = ExtractColumnIndex(columns);
  const { loading, data }: any = useFormData(`${ComponentData.model}s`, fields, variables);

  useEffect(() => {
    if (data) setFormTempTable({...formTempTable, ...data});
  }, [loading]);

  // 搜索
  const onSearch = (value: any) => {
    inputFilter.name_like = value;
    variables.filter = {...inputFilter, ...variables.filter, name_like: value};
    handleOnFilterChange(variables);
  };

  // 过滤筛选
  const handleOnFilterChange = (value: any) => {
    const filter = {...inputFilter, ...value.filter};
    const sort = value.sort.length > 0 ? value.sort : inputSort;
    variables = {...variables, filter, sort};
    setSelectedRowKeys([]);
    setFetchStatus(!fetchStatus);
  };

  // 删除选中项目
  const handleOnDeleteStatusChange = (ids: string[]) => {
    const data = formTempTable.data.filter((item) => ids.indexOf(item.id) === -1);
    const keys = selectedRowKeys.filter((item) => ids.indexOf(item) === -1);

    setFormTempTable({...formTempTable, data});
    setSelectedRowKeys(keys);
  };

  return (
    <>
      <Helmet>
        <title>{ComponentData.title}</title>
      </Helmet>
      <FilterLayer onFilterChange={handleOnFilterChange}>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
          <div className="filter-item flex align-center">
            <span className='title'>类别名称：</span>
            <Search placeholder="输入类别名称" onSearch={onSearch} />
          </div>
        </Col>
      </FilterLayer>

      <DeleteTableRows type='list' model={`${ComponentData.model}Delete`} ids={selectedRowKeys} addUrl={'add'} onDeleteStatusChange={handleOnDeleteStatusChange} />
      <TableWapper data={formTempTable}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={(value: string[]) => setSelectedRowKeys(value)}
        setFetchStatus={() => setFetchStatus(!fetchStatus)}
        columns={columns} variables={variables}
      />
    </>
  );
};
