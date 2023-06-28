import React         from 'react';
import { useRoutes } from 'react-router';
import { UserOutlined } from '@ant-design/icons';

import LayoutPage from '~@/pages/layout';
import HomeIndex  from '~@/pages/home/index';
import HomeAbout  from '~@/pages/home/about';
import HomeHox    from '~@/pages/home/hox';
import Project    from '~@/pages/project';

import { RouteObject } from './types';

export const Routes: RouteObject[] = [
  { title: '管理中心', path: '/home', element: <LayoutPage />, children: [
    { title: '首页', path: 'index', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
    { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },
    { title: 'hox', path: 'hox', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
  ]},
  { title: '项目管理', path: '/project', element: <LayoutPage />, children: [
    { title: '项目列表', path: 'list', element: <Project />, meta: { icon: <UserOutlined /> } },
  ]},
];

export default () => useRoutes(Routes);
