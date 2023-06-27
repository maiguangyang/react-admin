import 'antd/dist/reset.css';
import styles from './index.module.less';

import React, { FC, memo }  from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, ConfigProvider, notification } from 'antd';
import zhCN       from 'antd/lib/locale/zh_CN';
import classNames from 'classnames';

import HeaderLayer     from './components/header';
import FooterLayer     from './components/footer';
import BreadcrumbLayer from './components/breadcrumb';
import SiderMenuLayer  from './components/siderMenu';

import { Routes } from '~@/router';
import { RouteObject } from '~@/router/types';
import { useLayoutStore } from './hooks';

notification.config({
  top: 55,
  duration: 1,
});

const { Content, Sider } = Layout;

// LayoutWrapper ...
const LayoutWrapper: FC = memo(() => {
  const { parenRoute, childMenu, selectedKeys } = useLayoutStore();

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={styles.pcLayout}>
        <HeaderLayer current={parenRoute.current} data={Routes as RouteObject[]} />
        <Layout>
          <Sider width={230} className={classNames(styles.leftMenu)} collapsible>
            <SiderMenuLayer data={childMenu} selectedKeys={selectedKeys} />
          </Sider>
          <Layout style={{ padding: '0 24px 0px' }}>
            <BreadcrumbLayer />
            <Content className={classNames('border', styles.mainContent)}>
              <Outlet />
            </Content>
            <FooterLayer />
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
});

export default LayoutWrapper;
