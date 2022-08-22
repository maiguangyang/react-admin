import 'antd/dist/antd.variable.min.css';

import React from 'react';
import { Link, Outlet }  from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, ConfigProvider, notification, MenuProps } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import HeaderLayer from './components/header';

import styles from './index.module.less';
import classNames from 'classnames';

notification.config({
  top: 55,
  duration: 1,
});

const { Footer, Content, Sider } = Layout;

// 动态变更主题
ConfigProvider.config({
  theme: {
    primaryColor: '#059c32',
  },
});

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const LayoutWapper = () => {
  return (
    <Layout className={styles.pcLayout}>
      <HeaderLayer />
      <Layout>
        <Sider width={200} className={classNames(styles.leftMenu)} collapsible>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={items2}></Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 0px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={classNames('border', styles.mainContent)}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center', padding: '12px 0' }}>
            <span style={{ padding: '0 10px' }}>Marlon ©2022 All Rights Reserved</span>
            <Link to='/' className='link_group_link' title='联系客服' onClick={e => e.preventDefault()}>联系客服</Link>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

const PCIndex = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <LayoutWapper />
    </ConfigProvider>
  );
};

export default PCIndex;
