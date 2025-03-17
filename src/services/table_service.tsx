import { FC, Key, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';
import { ColumnType, TableRowSelection } from 'antd/lib/table/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useGraphql } from '~@/hooks/useGraphql';
import { useTableListStore } from '~@/hooks/useTableList';
import {
  IDeleteTableRowsType,
  IScrollType,
  ITableCallback,
  ITablePaginationPosition,
  IHelmetWrapperProps,
  ITableRowItemProps,
  ITDeleteOrRecoveryVariables,
  ITablePaginationConfig,
} from '~@/types/table_service_type';
import { ModalFunc } from 'antd/es/modal/confirm';
import { useAntdAction } from '~@/hooks/useAntd';
import _ from 'lodash';
import { IBaseListResultType } from '~@/types/base_type';

// showTotal ...
function showTotal(total: number): string {
  return `共 ${total} 条`;
}

// confirm 弹框
export function DeleteRowAll<T>(confirm: ModalFunc, { ...agm }: T) {
  confirm({
    icon: <ExclamationCircleOutlined />,
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    ...agm,
  });
}

// 删除
function TableRowItemDelete(props: ITableRowItemProps) {
  const { ids } = props;
  const { modal, message } = useAntdAction();
  const { model, formTempTable, onDeleteStatusChangeCallback } = useTableListStore((store) => [store.model]);
  const [mutation, { data }] = useGraphql<boolean, ITDeleteOrRecoveryVariables>(model).Delete();

  useEffect(() => {
    if (data) {
      message.success('删除成功');
      if (onDeleteStatusChangeCallback && _.isFunction(onDeleteStatusChangeCallback)) onDeleteStatusChangeCallback(ids, formTempTable);
    }
  }, [data]);

  const handleDelete = () => {
    DeleteRowAll(modal.confirm, {
      title: '温馨提示',
      content: '确认要删除该数据？?',
      onOk() {
        if (ids.length <= 0) return;
        mutation({ variables: { id: ids } }).catch(() => message.error('删除失败'));
      },
    });
  };

  return (
    <a className="text-desc" onClick={handleDelete}>删除</a>
  );
}

// 恢复
function TableRowItemRecovery(props: ITableRowItemProps) {
  const { ids } = props;
  const { modal, message } = useAntdAction();
  const { model, formTempTable, selectedRowKeys, onDeleteStatusChangeCallback } = useTableListStore((store) => [store.model, store.selectedRowKeys]);
  const [mutation, { data }] = useGraphql<boolean, ITDeleteOrRecoveryVariables>(model).Recovery();

  useEffect(() => {
    if (data) {
      message.success('恢复成功');
      if (onDeleteStatusChangeCallback && _.isFunction(onDeleteStatusChangeCallback)) onDeleteStatusChangeCallback(ids, formTempTable);
    }
  }, [data]);

  const handleDelete = () => {
    DeleteRowAll(modal.confirm, {
      title: '温馨提示',
      content: '确认要恢复该数据？',
      onOk() {
        if (ids.length <= 0) return;
        mutation({ variables: { id: ids } }).catch(() => message.error('恢复失败'));
      },
    });
  };

  return (
    <>
      {selectedRowKeys.length <= 0 && <a className="text-desc" onClick={handleDelete}>恢复</a>}
    </>
  );
}

// rows 数据
export function DeleteTableRowsWrapper<TData>(props: IDeleteTableRowsType<TData>) {
  const { type, row } = props;
  const { modal, message } = useAntdAction();
  const navigate = useNavigate();
  const { model, formTempTable, selectedRowKeys, onDeleteStatusChangeCallback } = useTableListStore((store) => [store.model, store.selectedRowKeys]);
  const [mutation, { loading, data }] = useGraphql<boolean, ITDeleteOrRecoveryVariables>(model).Delete();

  const ids: string[] = [];
  const hasSelected = selectedRowKeys.length > 0;
  if (!hasSelected && row?.id) ids.push(row.id);

  // 排除已删除状态的id
  selectedRowKeys.forEach((key) => {
    const item = formTempTable.data.find((item) => item.id === key && item.isDelete === 1);
    if (item) ids.push(item.id);
  });

  useEffect(() => {
    if (data) {
      message.success('删除成功');
      if (onDeleteStatusChangeCallback && _.isFunction(onDeleteStatusChangeCallback)) onDeleteStatusChangeCallback(ids, formTempTable);
    }
  }, [data]);

  // 批量删除方法
  const handleDeleteRowAll = () => {
    DeleteRowAll(modal.confirm, {
      title: '温馨提示',
      content: '确认要删除选中的数据？',
      onOk() {
        mutation({ variables: { id: ids } }).catch(() => message.error('删除失败'));
      },
    });
  };

  if (type !== 'list') {
    return (
      <>
        {row?.isDelete !== 1 ? <TableRowItemRecovery ids={ids} /> : <TableRowItemDelete ids={ids} />}
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
}

// TableWrapper ...
export function TableWrapper<TData>() {
  const { columns, variables, formTempTable, selectedRowKeys, fetchStatus, setSelectedRowKeys, setFetchStatus } = useTableListStore((store) => [
    store.columns,
    store.variables,
    store.selectedRowKeys,
    store.fetchStatus,
  ]);

  // 选择改变
  const onSelectChange = (value: Key[]) => {
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

  const { ...other } = TableConfig<TData>(rowSelection, columns, formTempTable, { onChange });

  return (
    <Table className='table-layer' rowKey="id" {...other} />
  );
}

// TableConfig ...
export function TableConfig<TData>(rowSelection: TableRowSelection<{}>, columns: ColumnType<{}>[], formTempTable: IBaseListResultType<TData>, callback: ITableCallback) {
  const dataSource: readonly TData[] = formTempTable.data;
  const position: ITablePaginationPosition[] = ['bottomCenter'];
  const scroll: IScrollType = { scrollToFirstRowOnChange: true, y: 550 };

  const pagination: ITablePaginationConfig = {
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
}

// HelmetWrapper ...
export const HelmetWrapper: FC<IHelmetWrapperProps> = ({ title, children }) => {
  return (
    <>
      <Helmet><title>{title}</title></Helmet>
      {children}
    </>
  );
};
