import { Cascader, Form } from 'antd';
import React, { FC } from 'react';
import { IOption, IValueBaseType } from '~@/types/base_type';

const options: IOption[] = [
  {
    value: 'zhejiang',
    label: '一级菜单',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export const NavTemp: FC = () => {
  const onChange = (value: IValueBaseType[]) => {
    console.log(value);
  };

  return (
    <Form name="basic" autoComplete="off" style={{ maxWidth: 300 }}>
      <Form.Item label="菜单导航" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
        <Cascader options={options} onChange={onChange} placeholder="请选择设置为菜单导航" />
      </Form.Item>
    </Form>
  );
};
