import React, { FC }  from 'react';
import { Layout, Menu, MenuProps, Tabs } from 'antd';
import { Tab } from 'rc-tabs/lib/interface';
import { UserOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { IComponentPropsDataType } from '~@/types/useGraphql_hook_type';

import '../styles.less';
import { FieldTemp } from './fieldTemp';
import { RenderTemp } from './renderTemp';
import { ITableTemp } from '../types';

const formModel: FC<IComponentPropsDataType> = () => {
  const items: MenuProps['items'] = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  const tableTemp: ITableTemp[] = [
    { label: '字段管理', children: <FieldTemp /> },
    { label: '渲染管理', children: <RenderTemp /> },
  ];

  // tabItems ...
  const tabItems: Tab[] = tableTemp.map((item, index) => {
    return { key: String(index), label: item.label, children: item.children };
  });

  return (
    <Layout style={{ background: '#fff' }}>
      <Sider width={180} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', background: '#fff' }}
          items={items}
        />
      </Sider>
      <Content style={{ padding: '10px' }}>
        <Tabs type="card" items={tabItems} />
      </Content>
    </Layout>
  );
};

export default formModel;
