import _ from 'lodash';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { TablePaginationConfig, Button, Modal, Table, message } from 'antd';
import { TableRowSelection } from 'antd/lib/table/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsDataType } from '~@/common/utils/extract';
// export type { ColumnsDataType } from '~@/common/utils/extract';
import { useFormData } from '~@/hooks/formData';

export type { ColumnsDataType };
const { confirm } = Modal;

// export type TableColumnsDataType<T> = ColumnsDataType & {

// }

type inputSortType = {
  [key: string]: any,
}

export type VariableType<Filter> = {
  currentPage: number,
  perPage: number,
  search: null,
  rand: boolean,
  filter: Filter,
  sort: inputSortType,
}

type GenerateVariableType<Filter> = {
  variables: VariableType<Filter>,
  inputSort: inputSortType[],
}

// 生成参数
export function GenerateVariable<T>(filter: T): GenerateVariableType<T> {
  const inputSort: inputSortType[] = [{weight: 'ASC'}];

  const variables: VariableType<T> = {
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

// table组件Config配置
export type FormTempTableListType = {
  current_page: number,
  per_page: number,
  data: any[],
  total: number,
  total_page: number,
}

export const FormTempTableList: FormTempTableListType = {
  current_page: 1,
  per_page: 1,
  data: [],
  total: 0,
  total_page: 0,
};

function showTotal(total: number): string {
  return `共 ${total} 条`;
}

interface TableFuc {
  [key: string]: any,
}

type scrollType = ({x?: string | number | true | undefined; y?: string | number | undefined;} & { scrollToFirstRowOnChange?: boolean | undefined;}) | undefined;
type TablePaginationType = false | TablePaginationConfig | undefined;

export function TableConfig(rowSelection: TableRowSelection<{}>, columns: ColumnsType<{}>, formTempTable: FormTempTableListType, callback: TableFuc): any {
  const dataSource: readonly any[] = formTempTable.data;
  const position: any = ['none', 'bottomCenter'];
  const scroll: scrollType = { scrollToFirstRowOnChange: true, y: 550 };
  const pagination: TablePaginationType = {
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

// 批量删除
type DeleteTableRowsType = {
  model: string,
  ids: string[] | number[],
  type: string,
  addUrl?: string,
  onDeleteStatusChange: (ids: string[]) => void,
};

export function DeleteTableRows(props: DeleteTableRowsType) {
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

type TableWapperType<Filter> = {
  columns: ColumnsDataType[],
  data: FormTempTableListType,
  variables: VariableType<Filter>,
  selectedRowKeys: string[],
  setSelectedRowKeys: (res: string[]) => void,
  setFetchStatus: () => void,
}

export function TableWapper<Filter>(props: TableWapperType<Filter>) {
  const columns: ColumnsDataType[] = props.columns;
  const formTempTable: FormTempTableListType = props.data;
  const variables: VariableType<Filter> = props.variables;

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
