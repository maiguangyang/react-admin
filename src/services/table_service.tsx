import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { Button, Table } from 'antd';
import { TableRowSelection } from 'antd/lib/table/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useGraphql } from '~@/hooks/useGraphql';
import { useTableListStore } from '~@/hooks/useTableList';
import {
  IDeleteTableRowsType,
  IFormTempTableListType,
  IGenerateVariableType,
  IScrollType,
  ITableCallback,
  ITablePaginationType,
  IVariableType,
  ITablePaginationPosition,
  ISortInputType,
  IHelmetWrapperProps,
} from '~@/types/table_service_type';
import { useAntdAction } from '~@/hooks/useAntd';
import { ModalFunc } from 'antd/es/modal/confirm';

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
};

// FormTempTableList ...
export const FormTempTableList: IFormTempTableListType = {
  current_page: 1,
  per_page: 1,
  data: [],
  total: 0,
  total_page: 0,
};

// showTotal ...
function showTotal(total: number): string {
  return `共 ${total} 条`;
}

// TableConfig ...
export function TableConfig(rowSelection: TableRowSelection<{}>, columns: ColumnsType<{}>, formTempTable: IFormTempTableListType, callback: ITableCallback): any {
  const dataSource: readonly any[] = formTempTable.data;
  const position: ITablePaginationPosition[] = ['none', 'bottomCenter'];
  const scroll: IScrollType = { scrollToFirstRowOnChange: true, y: 550 };
  const pagination: ITablePaginationType = {
    position,
    showTotal,
    pageSizeOptions: [10, 20, 50, 100],
    showSizeChanger: true,
    showQuickJumper: true,
    total: formTempTable.total,
    onChange: callback.onChange,
  };

  return {
    rowSelection,
    columns,
    dataSource,
    scroll,
    pagination,
  };
};

// 删除tabel row数据
export function DeleteRowAll<T>(confirm: ModalFunc, {...agm}: T) {
  confirm({
    // title: '是否要删除选中项？',
    icon: <ExclamationCircleOutlined />,
    // content: '删除后不可恢复，请小心操作',
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    ...agm,
  });
};

// DeleteTableRows ...
export const DeleteTableRowsWrapper: FC<IDeleteTableRowsType> = ({ type, row }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { message, Modal } = useAntdAction();
  const { model, formTempTable, selectedRowKeys, onDeleteStatusChangeCallback } = useTableListStore((store) => [store.model, store.formTempTable, store.selectedRowKeys]);
  const [formDelete, { deleteLoading, deleteData }]: any = useGraphql(`${model}Delete`);
  const [formRecovery, { recoveryLoading, recoveryData }]: any = useGraphql(`${model}Recovery`);

  // const ids = type === 'list' ? selectedRowKeys : [row?.id];
  const ids: string[] = [];
  const hasSelected = selectedRowKeys.length > 0;
  if (!hasSelected) ids.push(row?.id!);

  // 排除已删除状态的id
  selectedRowKeys.forEach((key) => {
    const item = formTempTable.data.find(item => item.id === key && item.isDelete === 1);
    if (item) ids.push(item.id);
  });

  useEffect(() => {
    setLoading(deleteLoading !== recoveryLoading);
  }, [deleteLoading, recoveryLoading]);

  // 删除回调
  useEffect(() => {
    if (deleteData) {
      message.success('删除成功');
      if (onDeleteStatusChangeCallback && _.isFunction(onDeleteStatusChangeCallback)) onDeleteStatusChangeCallback(ids);
    }
  }, [deleteData]);

  // 恢复删除回调
  useEffect(() => {
    if (recoveryData) {
      message.success('恢复成功');
      if (onDeleteStatusChangeCallback && _.isFunction(onDeleteStatusChangeCallback)) onDeleteStatusChangeCallback(ids);
    }
  }, [recoveryData]);

  const handleDeleteRowAll = () => {
    DeleteRowAll(Modal.confirm, {
      title: '温馨提示',
      content: `是否确认要${!hasSelected && row?.isDelete !== 1 ? '恢复' : '删除'}`,
      onOk() {
        if (ids.length <= 0) return;
        if (!hasSelected && row?.isDelete !== 1) {
          formRecovery({ variables: { id: ids } }).catch((_: Error) => message.error('恢复失败'));
          return;
        }
        formDelete({ variables: { id: ids } }).catch((_: Error) => message.error('删除失败'));
      },
    });
  };

  if (type !== 'list') {
    return (
      <>
        {
          hasSelected
            ? null
            : <a className="text-desc" onClick={handleDeleteRowAll}>{ row?.isDelete !== 1 ? '恢复' : '删除' }</a>
        }
      </>
    );
  }

  return (
    <div className="list-head-wapper">
      <Button type="primary" onClick={() => navigate('add')}>新增</Button>
      <Button className="margin-lr-10" type="primary" danger onClick={handleDeleteRowAll} disabled={!hasSelected} loading={loading}>批量删除</Button>
      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `已选 ${selectedRowKeys.length} 条` : ''}
      </span>
    </div>
  );
};

// TableWrapper ...
export const TableWrapper: FC = () => {
  const { columns, variables, formTempTable, selectedRowKeys, fetchStatus, setSelectedRowKeys, setFetchStatus } = useTableListStore((store) => [
    store.columns,
    store.variables,
    store.formTempTable,
    store.selectedRowKeys,
    store.fetchStatus,
  ]);

  // 选择改变
  const onSelectChange = (value: any[]) => {
    setSelectedRowKeys(value);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // 页数改变
  const onChange = (page: number, pageSize: number) => {
    variables.currentPage = page;
    variables.perPage = pageSize;
    setFetchStatus(!fetchStatus);
  };

  return (
    <Table className='table-layer' rowKey="id" {...TableConfig(rowSelection, columns, formTempTable, { onChange })} />
  );
};

// HelmetWrapper ...
export const HelmetWrapper: FC<IHelmetWrapperProps> = ({ title, children }) => {
  return (
    <>
      <Helmet><title>{title}</title></Helmet>
      { children }
    </>
  );
};
