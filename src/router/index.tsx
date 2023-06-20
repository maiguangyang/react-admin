import React         from 'react';
import { useRoutes } from 'react-router';
import { UserOutlined } from '@ant-design/icons';

import Home      from '~@/pages/layout';
import HomeIndex from '~@/pages/home/index';
import HomeAbout from '~@/pages/home/about';
import HomeHox from '~@/pages/home/hox';

export const Routes = [
  { title: '管理中心', path: '/home', element: <Home />, children: [
    { title: '首页', path: '/home', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
    { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },
    { title: 'hox', path: 'hox', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
  ]},
];

export default () => useRoutes(Routes);
