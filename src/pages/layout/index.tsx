import 'antd/dist/reset.css';
import styles from './index.module.less';

import React, { FC, memo, Suspense, useEffect, useState }  from 'react';
import { Outlet } from 'react-router-dom';
import { App, Layout, ConfigProvider, notification, Spin } from 'antd';
import zhCN       from 'antd/lib/locale/zh_CN';
import classNames from 'classnames';

import HeaderLayer     from './components/header';
import FooterLayer     from './components/footer';
import BreadcrumbLayer from './components/breadcrumb';
import SiderMenuLayer  from './components/siderMenu';

import { Routes } from '~@/router';
import { RouteObject } from '~@/router/types';
import { useLayoutStore } from './hooks';
import { LayoutWrapperProps } from './types';

notification.config({
  top: 55,
  duration: 1,
});

const { Content, Sider } = Layout;

// LayoutWrapper ...
const LayoutWrapper: FC<LayoutWrapperProps> = ({ element }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const routes: RouteObject[] = Routes || [];
  const { parenRoute, childMenu, selectedKeys } = useLayoutStore();

  useEffect(() => {
    setIsCollapsed(parenRoute.current?.path === 'project');
  }, [parenRoute.current]);

  const handleOnCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <ConfigProvider locale={zhCN} theme={{ token: { fontSize: 13 } }}>
      <App>
        <Layout className={styles.pcLayout}>
          <HeaderLayer current={parenRoute.current} data={routes} />
          <Layout>
            <Sider width={230} className={classNames(styles.leftMenu)} collapsible collapsed={isCollapsed} onCollapse={handleOnCollapse}>
              <SiderMenuLayer paren={parenRoute.current} data={childMenu} selectedKeys={selectedKeys} />
            </Sider>
            <Layout style={{ padding: '0 24px 0px' }}>
              <BreadcrumbLayer />
              <Content className={classNames('flex', 'flex-direction', 'border', styles.mainContent)}>
                <Suspense fallback={<Spin className='flex align-center flex-center flex-one' size="large" />}>{element}</Suspense>
                <Outlet />
              </Content>
              <FooterLayer />
            </Layout>
          </Layout>
        </Layout>
      </App>
    </ConfigProvider>
  );
};

export default memo(LayoutWrapper);
