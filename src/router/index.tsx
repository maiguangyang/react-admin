import React, { lazy }        from 'react';
import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from './types';

const HomeIndex  = lazy(() => import('~@/pages/home/index'));
const HomeAbout  = lazy(() => import('~@/pages/home/about'));
const HomeHox  = lazy(() => import('~@/pages/home/hox'));
const Project  = lazy(() => import('~@/pages/project'));

export const Routes: RouteObject[] = [
  { title: '华定科技', path: '/', children: [
    { title: '管理中心', path: 'home', children: [
      { title: '仪表台', path: 'index', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
      { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },
      { title: 'hox', path: 'hox', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
    ]},
    { title: '物料市场', path: 'material', children: [
      { title: '物料市场', path: 'list', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
      { title: '物料提供', path: 'supply', element: <Project />, meta: { icon: <UserOutlined /> } },
      { title: '物料需求', path: 'need', element: <Project />, meta: { icon: <UserOutlined /> } },
    ]},
    { title: '项目管理', path: 'project', children: [
      { title: '项目列表', path: 'list', element: <Project />, meta: { icon: <UserOutlined /> } },
    ]},
  ]},
];

export default Routes;
