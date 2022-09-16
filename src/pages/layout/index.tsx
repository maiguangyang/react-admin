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
        // const name = location.pathname.replace(current.path, '');
        const name = array[1];
        const children = current.children?.find(item => item.path === name);

        const breadcrumb = [current, children as CustomRouteObject];
        children?.path && setSelectedKeys([children.path]);
        if (/add/.test(location.pathname)) {
          breadcrumb.push({ title: '添加', path: 'none' });
        } else if (/edit.*/.test(location.pathname)) {
          breadcrumb.push({ title: '修改', path: 'none' });
        } else if (/\w{8}(-\w{4}){3}-\w{12}.*/.test(location.pathname)) {
          breadcrumb.push({ title: '详情', path: 'none' });
        }
        handleSetBreadcrumb(breadcrumb);
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
