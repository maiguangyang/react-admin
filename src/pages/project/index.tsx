import React, { FC, useMemo } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import { Col, Input, Space } from 'antd';

import { FilterLayer }  from '~@/components/Filter';
import { Filter }       from '~@/utils/filter';
import { useAllRouter } from '~@/router/hooks';

import { DeleteTableRows, TableWapper } from '~@/services/table_service';
import { IColumnsDataType } from '~@/types/extract_utils_type';

import { useTableList } from '~@/hooks/useTableList';
import { useAction } from './hooks';

const { Search } = Input;

const ProjectPage: FC = () => {
  const { title, model } = useAction();
  const route = useAllRouter(model);

  // 获取列表数据
  const columns: IColumnsDataType[] = [
    {
      title: '项目名称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '项目描述',
      dataIndex: 'desc',
      align: 'center',
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
            <DeleteTableRows type='row' model={`${model}Delete`} ids={[record.id]} onDeleteStatusChange={onDeleteStatusChange} />
          </Space>
        );
      },
    },
  ];

  const {
    variables,
    fetchStatus,
    formTempTable,
    selectedRowKeys,
    setFetchStatus,
    setSelectedRowKeys,
    onSearchCallback,
    onFilterChange,
    onDeleteStatusChange,
  } = useTableList(model, columns);

  return (
    <>
      {
        useMemo(() => {
          return (
            <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <FilterLayer onFilterChange={onFilterChange}>
              <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
                <div className="filter-item flex align-center">
                  <span className='title'>类别名称：</span>
                  <Search placeholder="输入类别名称" onSearch={(value: string) => onSearchCallback(value, 'name_like')} />
                </div>
              </Col>
            </FilterLayer>
            <DeleteTableRows type='list' model={`${model}Delete`} ids={selectedRowKeys} addUrl={'add'} onDeleteStatusChange={onDeleteStatusChange} />
            <TableWapper<any> data={formTempTable}
              selectedRowKeys={selectedRowKeys}
              setSelectedRowKeys={(value: string[]) => setSelectedRowKeys(value)}
              setFetchStatus={() => setFetchStatus(!fetchStatus)}
              columns={columns} variables={variables}
            />
          </>
          );
        }, [])
      }
    </>
  );
};

export default ProjectPage;
