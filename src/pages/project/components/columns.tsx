import { Button, Input, InputNumber, Radio, Select, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IDataType } from '../types';

// 字段管理 columns
export const FieldColumns: ColumnsType<IDataType> = [
  { key: 'sort' },
  {
    title: '字段名称',
    dataIndex: 'name',
    width: 200,
    render: () => <Input allowClear placeholder='请输入字段名称' />,
  },
  {
    title: '表字段',
    dataIndex: 'tableName',
    width: 200,
    render: () => <Input allowClear placeholder='请输入表字段' />,
  },
  {
    title: '字段类型',
    dataIndex: 'typeName',
    width: 120,
    render: () => (
      <Select
        defaultValue='lucy'
        style={{ width: 120 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
        allowClear
        placeholder='请选择字段类型'
      />
    ),
  },
  {
    title: '长度',
    dataIndex: 'len',
    width: 100,
    render: () => <InputNumber min={0} placeholder='请输入长度' />,
  },
  {
    title: 'comment',
    dataIndex: 'comment',
    render: () => <Input allowClear placeholder='请输入comment' />,
  },
  {
    title: '索引',
    dataIndex: 'indexName',
    width: 150,
    render: () => <Input allowClear placeholder='请输入索引' />,
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    width: 200,
    render: () => <Input allowClear placeholder='请输入默认值' />,
  },
  {
    title: '正则校验',
    dataIndex: 'validator',
    width: 120,
    render: () => (
      <Select
        defaultValue='lucy'
        style={{ width: 120 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
        allowClear
        placeholder='请选择校验规则'
      />
    ),
  },
  {
    title: 'action',
    dataIndex: 'action',
    render: () => (
      <Space size='middle'>
        <Button type='link'>删除</Button>
      </Space>
    ),
  },
];

// 渲染管理 columns
export const RenderColumns: ColumnsType<IDataType> = [
  { key: 'sort', width: 50, align: 'center' },
  { title: '字段名称', dataIndex: 'name', width: 120, align: 'center' },
  { title: '表字段', dataIndex: 'tableName', width: 120, align: 'center' },
  {
    title: '列表',
    dataIndex: 'typeName',
    width: 150,
    align: 'center',
    render: () => (
      <Radio.Group>
        <Radio value={1}>无</Radio>
        <Radio value={2}>只读</Radio>
        <Radio value={3}>渲染</Radio>
      </Radio.Group>
    ),
  },
  {
    title: '详情',
    dataIndex: 'typeName',
    width: 150,
    align: 'center',
    render: () => (
      <Radio.Group>
        <Radio value={1}>无</Radio>
        <Radio value={2}>只读</Radio>
        <Radio value={3}>渲染</Radio>
      </Radio.Group>
    ),
  },
  {
    title: '新增',
    dataIndex: 'typeName',
    width: 150,
    align: 'center',
    render: () => (
      <Radio.Group>
        <Radio value={1}>无</Radio>
        <Radio value={2}>只读</Radio>
        <Radio value={3}>渲染</Radio>
      </Radio.Group>
    ),
  },
  {
    title: '修改',
    dataIndex: 'typeName',
    width: 150,
    align: 'center',
    render: () => (
      <Radio.Group>
        <Radio value={1}>无</Radio>
        <Radio value={2}>只读</Radio>
        <Radio value={3}>渲染</Radio>
      </Radio.Group>
    ),
  },
  {
    title: '组件绑定',
    dataIndex: 'validator',
    width: 150,
    align: 'center',
    render: () => (
      <Select
        defaultValue='lucy'
        style={{ width: 150 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
        allowClear
        placeholder='请选择关联的组件'
      />
    ),
  },
  {
    title: '关联表',
    dataIndex: 'validator',
    width: 300,
    align: 'center',
    render: () => (
      <>
        <Select
          defaultValue='lucy'
          style={{ width: 140 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          allowClear
          placeholder='请选择关联表'
        />
        <Select
          defaultValue='lucy'
          style={{ width: 140, marginLeft: '10px' }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          allowClear
          placeholder='请选择显示字段'
        />
      </>
    ),
  },
];
