import 'antd/dist/antd.variable.min.css';

import React from 'react';
import { Link, NavLink, Outlet }  from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, ConfigProvider, Avatar, Dropdown, message, notification, MenuProps } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import { flex, flexOne, alignCenter } from '~@/assets/stylus/base';
import styles from './styles';

notification.config({
  top: 55,
  duration: 1,
});

const { Header, Footer, Content, Sider } = Layout;

// 动态变更主题
ConfigProvider.config({
  theme: {
    primaryColor: '#059c32',
  },
});

const dropdownItems = [
  { label: '资质验证(未验证)', key: '1' },
  { label: '修改密码', key: '2' },
  { label: '退出登录', key: '3' },
];

const onClick = ({ key }: any) => {
  message.info(`Click on item ${key}`);
};

const DropdownMenu = (
  <Menu onClick={onClick} items={dropdownItems} />
);

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
    <Layout css={styles.layout}>
      <Header css={styles.header}>
        <div css={styles.logo} />
        <div css={[flex, flexOne, alignCenter, styles.headerRight]}>
          <div css={[styles.menuGroup, flexOne]}>
            <NavLink css={styles.menuItem} to="/" title="首页">首页</NavLink>
          </div>
          <div css={[flex, alignCenter]}>
            <div css={styles.linkGroup}>
              <Link to='/' css='link_group_link' title='网站首页' target='_blank'>网站首页</Link>
              <Link to='/' css='link_group_link' title='帮助中心' target='_blank'>帮助中心</Link>
            </div>
            <Avatar size="large" icon={<UserOutlined />} />
            <Dropdown css={styles.company} overlay={DropdownMenu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <span>中山华定科技有限公司</span>
                <DownOutlined css='margin-l-5' />
              </a>
            </Dropdown>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} css='siteLayoutBackground left_menu' collapsible>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={items2}></Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 0px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content css='siteLayoutBackground border main-content'>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center', padding: '12px 0' }}>
            <span style={{ padding: '0 10px' }}>Marlon ©2022 All Rights Reserved</span>
            <Link to='/' css='link_group_link' title='联系客服' onClick={e => e.preventDefault()}>联系客服</Link>
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
