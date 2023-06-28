import _ from 'lodash';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { Button, Modal, Table, message } from 'antd';
import { TableRowSelection } from 'antd/lib/table/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useFormData } from '~@/hooks/formData';
import { IColumnsDataType } from '~@/types/extract_utils_type';
import {
  IDeleteTableRowsType,
  IFormTempTableListType,
  IGenerateVariableType,
  IInputSortType,
  IScrollType,
  ITableCallback,
  ITablePaginationType,
  ITableWapperType,
  IVariableType,
  TablePaginationPosition,
} from '~@/types/table_service_type';

const { confirm } = Modal;

// 生成参数
export function GenerateVariable<T>(filter: T): IGenerateVariableType<T> {
  const inputSort: IInputSortType[] = [{weight: 'ASC'}];

  const variables: IVariableType<T> = {
    currentPage: 1,
    perPage: 10,
    search: null,
    rand: false,
    filter,
    sort: inputSort,
  };

  return {
    variables,
    inputSort,
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
  const position: TablePaginationPosition[] = ['none', 'bottomCenter'];
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
export function DeleteRowAll<T>({...agm}: T) {
  confirm({
    title: '是否要删除选中项？',
    icon: <ExclamationCircleOutlined />,
    content: '删除后不可恢复，请小心操作',
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    ...agm,
  });
};

// DeleteTableRows ...
export function DeleteTableRows(props: IDeleteTableRowsType) {
  const navigate = useNavigate();
  const [formDelete, { loading, data }]: any = useFormData(props.model);
  const hasSelected = props.ids.length > 0;

  useEffect(() => {
    // 回调组件方法
    if (data === true) {
      message.success('删除成功');
      if (props.onDeleteStatusChange && _.isFunction(props.onDeleteStatusChange)) props.onDeleteStatusChange(props.ids);
      // props.onDeleteStatusChange();
    }
  }, [loading]);

  const handleDeleteRowAll = () => {
    DeleteRowAll({
      onOk() {
        formDelete({ variables: { id: props.ids } }).catch((_: Error) => message.error('删除失败'));
      },
    });
  };

  const el = props.type === 'list'
    ? <div className="list-head-wapper">
        <Button type="primary" onClick={() => navigate(String(props.addUrl))}>新增</Button>
        <Button className="margin-lr-10" type="primary" danger onClick={handleDeleteRowAll} disabled={!hasSelected} loading={loading}>批量删除</Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `已选 ${props.ids.length} 条` : ''}
        </span>
      </div>
    : <a className="text-desc" onClick={handleDeleteRowAll}>删除</a>;
  return (el);
};

// TableWapper ...
export function TableWapper<T>(props: ITableWapperType<T>) {
  const columns: IColumnsDataType[] = props.columns;
  const formTempTable: IFormTempTableListType = props.data;
  const variables: IVariableType<T> = props.variables;

  // 选择改变
  const onSelectChange = (value: any[]) => {
    props.setSelectedRowKeys(value);
  };

  const rowSelection = { selectedRowKeys: props.selectedRowKeys, onChange: onSelectChange };

  // 页数改变
  const onChange = (page: number, pageSize: number) => {
    variables.currentPage = page;
    variables.perPage = pageSize;
    // props.setFetchStatus(variables);
    props.setFetchStatus();
  };

  return (
    <Table className='table-layer' rowKey="id" {...TableConfig(rowSelection, columns, formTempTable, { onChange })} />
  );
};
