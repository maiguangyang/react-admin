import React         from 'react';
import { useRoutes } from 'react-router';
import { UserOutlined } from '@ant-design/icons';
import { CustomRouteObject } from './types';

import Home      from '~@/pages/layout';
import HomeIndex from '~@/pages/home/index';
import HomeAbout from '~@/pages/home/about';

// 用户管理
import User       from '~@/pages/home/user';
import UserDetail from '~@/pages/home/user/detail';
import UserAdd    from '~@/pages/home/user/add';
import UserEdit   from '~@/pages/home/user/edit';

export const Routes: CustomRouteObject[] = [
  { title: '技术分享', path: '/home', element: <Home />, children: [
    { title: '首页', path: '/home', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
    { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },

    { title: '用户管理', path: 'user', element: <User />, meta: { icon: <UserOutlined /> } },
    { title: '新增用户', path: 'user/add', hidden: true, element: <UserAdd />, meta: { icon: <UserOutlined /> } },
    { title: '修改用户', path: 'user/:id/edit', hidden: true, element: <UserEdit />, meta: { icon: <UserOutlined /> } },
    { title: '用户详情', path: 'user/:id', hidden: true, element: <UserDetail />, meta: { icon: <UserOutlined /> } },
  ]},
];

export default () => useRoutes(Routes);
