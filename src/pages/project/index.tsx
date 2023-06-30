import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { Filter } from '~@/utils/filter';

import { IColumnsDataType } from '~@/types/extract_utils_type';
import { TableListStoreProvider } from '~@/hooks/useTableList';
import { DeleteTableRowsWrapper, HelmetWrapper, TableWrapper } from '~@/services/table_service';
import { FilterWrapper } from './filter';
import { useAction } from './hooks';
import { ITabelColumnType } from './types';

const ProjectPage: FC = () => {
  const { title, model } = useAction();

  // 获取列表数据
  const columns: IColumnsDataType<ITabelColumnType>[] = [
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
      render: (data: string) => Filter('formatDate', data),
    },
    {
      title: '操作',
      dataIndex: 'action',
      align: 'center',
      width: 200,
      render: (text: any, record) => {
        return (
          <Space size="middle">
            <Link to={record.id}>查看</Link>
            <Link to={`${record.id}/edit`} className="primary">修改</Link>
            <DeleteTableRowsWrapper type='row' />
          </Space>
        );
      },
    },
  ];

  return (
    <TableListStoreProvider model={model} columns={columns}>
      <HelmetWrapper title={title} />
      <FilterWrapper />
      <DeleteTableRowsWrapper type='list' />
      <TableWrapper />
    </TableListStoreProvider>
  );
};

export default ProjectPage;
