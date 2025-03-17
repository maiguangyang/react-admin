import { Cascader, Col, Form, Radio } from 'antd';
import { DefaultOptionType } from 'antd/lib/cascader';
import { FC } from 'react';
import { IValueBaseType } from '~@/types/base_type';

const options: DefaultOptionType[] = [
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

export const SettingTemp: FC = () => {
  const onChange = (value: IValueBaseType[]) => {
    console.log(value);
  };

  return (
    <Col className="gutter-row" span={6}>
      <Form.Item label="菜单导航" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        {/* <Cascader options={options} onChange={onChange} placeholder="请选择设置为菜单导航" /> */}
        <Cascader options={options} onChange={onChange} placeholder="请选择设置为菜单导航" />
      </Form.Item>
      <Form.Item label="权限验证" name="username">
        <Radio.Group value={1}>
          <Radio value={1}>否</Radio>
          <Radio value={2}>是</Radio>
        </Radio.Group>
      </Form.Item>
    </Col>
  );
};
