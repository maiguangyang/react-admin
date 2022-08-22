import 'antd/dist/antd.variable.min.css';
import styles from './index.module.less';

import React      from 'react';
import { Outlet } from 'react-router-dom';
import zhCN       from 'antd/lib/locale/zh_CN';
import classNames from 'classnames';
import {
  Layout,
  ConfigProvider,
  notification,
} from 'antd';

import HeaderLayer     from './components/header';
import FooterLayer     from './components/footer';
import BreadcrumbLayer from './components/breadcrumb';
import SiderMenuLayer  from './components/siderMenu';

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

const LayoutWapper = () => {
  return (
    <Layout className={styles.pcLayout}>
      <HeaderLayer />
      <Layout>
        <Sider width={230} className={classNames(styles.leftMenu)} collapsible>
          <SiderMenuLayer />
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
};

const LayoutWrapper = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <LayoutWapper />
    </ConfigProvider>
  );
};

export default LayoutWrapper;
