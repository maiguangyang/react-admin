import 'antd/dist/reset.css';
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
import { RouteObject } from '~@/router/types';

notification.config({
  top: 55,
  duration: 1,
});

const { Content, Sider } = Layout;

// // 动态变更主题
// ConfigProvider.config({
//   theme: {
//     primaryColor: '#059c32',
//   },
// });

// LayoutWrapper ...
const LayoutWrapper: FC = memo(() => {
  const location = useLocation();
  const { handleSetBreadcrumb } = useBreadcrumb();

  const [parenRoute, setParenRoute] = useState<RouteObject>();
  const [childMenu, setChildMenu]   = useState<RouteObject[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleFindRouteItem = (data: RouteObject[], path: string) => {
    return data.find(item => item.path === path) as RouteObject;
  };

  useEffect(() => {
    const array = location.pathname.split('/').filter(item => item !== '');
    if (array.length > 0) {
      const current = handleFindRouteItem(Routes[0].children as RouteObject[], `/${array[0]}`);
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
        const child = current.children?.find(item => item.path === name);

        const breadcrumb = [current, child as RouteObject];
        child?.path && setSelectedKeys([child.path]);
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
    <ConfigProvider locale={zhCN}>
      <Layout className={styles.pcLayout}>
        <HeaderLayer current={parenRoute} data={Routes[0].children as RouteObject[]} />
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
