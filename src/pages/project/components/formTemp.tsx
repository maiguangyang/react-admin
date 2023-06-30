import { Button, Form, Input, InputNumber, Switch } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDefaultDataValue } from '~@/hooks/useGraphql';
import { IFormTempProps } from '~@/types/base_type';
import { IFormDataType } from '../types';

// 生成表单模板
export function GenerateFormTemp(props: IFormTempProps<IFormDataType>) {
  const navigate = useNavigate();

  const { form, disabled, loading, isReadOnly, onFinish } = props;
  const formTemp: React.ReactNode[] = [];

  formTemp.push(<Form form={form} name="form" className='clear' initialValues={FormDefaultDataValue} scrollToFirstError onFinish={onFinish}>
    <Form.Item label="项目名称" name="name" className='title w_50'
      hidden={disabled.includes('name')}
      rules={[{ required: !disabled.includes('name'), message: '请输入项目名称' }]}>
        <Input disabled={isReadOnly} allowClear placeholder='请输入项目名称' />
    </Form.Item>

    <Form.Item label="项目描述" name="desc" className='title w_50'
      hidden={disabled.includes('desc')}
      rules={[{ required: !disabled.includes('desc'), message: '请输入项目描述' }]}>
        <Input disabled={isReadOnly} allowClear placeholder='请输入项目描述' />
    </Form.Item>

    <Form.Item label="排序" name="weight">
      <InputNumber disabled={isReadOnly} min={1} />
    </Form.Item>

    <Form.Item label="状态" name="state" valuePropName="checked">
      <Switch disabled={isReadOnly} checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 1 }}>
      {
        isReadOnly
          ? <Button type="link" onClick={() => navigate('edit')}>编 辑</Button>
          : <Button htmlType="submit" loading={loading}>保 存</Button>
      }
      <Button type="text" htmlType="button" onClick={() => navigate(-1)}>取 消</Button>
    </Form.Item>
  </Form>);
  return formTemp;
};
