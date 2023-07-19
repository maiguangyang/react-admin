import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Space, Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table/interface';
import { Filter } from '~@/utils/filter';
import { DeleteTableRowsWrapper, HelmetWrapper, TableWrapper } from '~@/services/table_service';
import { Project } from '~@/__generated__/graphql';
import { IRowData } from '~@/types/table_service_type';
import { TableListStoreProvider } from '~@/hooks/useTableList';
import { FilterWrapper } from './filter';
import { useAction } from './hooks';

const ProjectPage: FC = () => {
  const { title, model } = useAction();

  // 获取列表数据
  const columns: ColumnType<IRowData<Project>>[] = [
    {
      title: '项目名称',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '项目描述',
      dataIndex: 'desc',
      align: 'center',
      ellipsis: {
        showTitle: false,
      },
      render: (data: string) => (
        <Tooltip placement="top" title={data}>
          {data}
        </Tooltip>
      ),
    },
    {
      title: '删除状态',
      align: 'center',
      width: 200,
      render: (data: string, row: Project) => {
        return row?.isDelete !== 1 ? '已删除' : '正常';
      },
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
      render: (data: string, row: IRowData<Project>) => {
        return (
          <Space size="middle">
            <Link to={row.id}>查看</Link>
            <Link to={`${row.id}/edit`} className="primary">修改</Link>
            {/* <DeleteTableRowsWrapper<Project> type='row' row={row} /> */}
          </Space>
        );
      },
    },
  ];

  return (
    <TableListStoreProvider model={model} columns={(columns as unknown) as ColumnType<{}>[]}>
      <HelmetWrapper title={title}>
        <FilterWrapper />
        <DeleteTableRowsWrapper<Project> type='list' />
        <TableWrapper<Project> />
      </HelmetWrapper>
    </TableListStoreProvider>
  );
};

export default ProjectPage;
