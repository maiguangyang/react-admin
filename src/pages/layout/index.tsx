import 'antd/dist/antd.variable.min.css';
import styles from './index.module.less';

import React, { FC, memo, useEffect, useState }      from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, ConfigProvider, notification } from 'antd';
import zhCN       from 'antd/lib/locale/zh_CN';
import classNames from 'classnames';

import { useBreadcrumb } from '~@/hooks';
import HeaderLayer     from './components/header';
import FooterLayer     from './components/footer';
import BreadcrumbLayer from './components/breadcrumb';
import SiderMenuLayer  from './components/siderMenu';

import { Routes } from '~@/router';
import { CustomRouteObject } from '~@/router/types';

notification.config({
  top: 55,
  duration: 1,
});

const { Content, Sider } = Layout;

// 动态变更主题
ConfigProvider.config({
  theme: {
    primaryColor: '#059c32',
  },
});

const LayoutWapper: FC = memo(() => {
  const location = useLocation();
  const { handleSetBreadcrumb } = useBreadcrumb();

  const [parenRoute, setParenRoute] = useState<CustomRouteObject>();
  const [childMenu, setChildMenu]   = useState<CustomRouteObject[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleFindRouteItem = (data: CustomRouteObject[], path: string) => {
    return data.find(item => item.path === path) as CustomRouteObject;
  };

  useEffect(() => {
    const array = location.pathname.split('/').filter(item => item !== '');
    if (array.length > 0) {
      const current = handleFindRouteItem(Routes, `/${array[0]}`);
      if (current) {
        setParenRoute(current);
        if (current.children) setChildMenu(current.children);
      }

      if (array.length === 1) {
        handleSetBreadcrumb([current]);
        setSelectedKeys([current.path]);
      } else {
        const name = location.pathname.replace(current.path, '');
        const children = current.children?.find(item => `/${item.path}` === name);
        handleSetBreadcrumb([current, children as CustomRouteObject]);
        children?.path && setSelectedKeys([children.path]);
      }
    }
  }, [location]);

  return (
    <Layout className={styles.pcLayout}>
      <HeaderLayer current={parenRoute} data={Routes} />
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
  );
});

const LayoutWrapper = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <LayoutWapper />
    </ConfigProvider>
  );
};

export default LayoutWrapper;
