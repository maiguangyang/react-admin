import React         from 'react';
import { useRoutes } from 'react-router';
import { UserOutlined } from '@ant-design/icons';

import LayoutPage from '~@/pages/layout';
import HomeIndex  from '~@/pages/home/index';
import HomeAbout  from '~@/pages/home/about';
import HomeHox    from '~@/pages/home/hox';
import User       from '~@/pages/user';
import { RouteObject } from './types';

export const Routes: RouteObject[] = [
  { title: '后台管理系统', path: '/', element: <LayoutPage />, children: [
    { title: '管理中心', path: '/home', element: <HomeIndex />, children: [
      { title: '首页', path: 'index', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
      { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },
      { title: 'hox', path: 'hox', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
    ]},
    { title: '用户管理', path: '/user', element: <User />, children: [
      { title: '用户列表', path: '/user/test', element: <User />, meta: { icon: <UserOutlined /> } },
    ]},
  ]},
];

export default () => useRoutes(Routes);
