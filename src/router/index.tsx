import React, { lazy }  from 'react';
import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from './types';
import { Outlet } from 'react-router-dom';

const HomeIndex  = lazy(() => import('~@/pages/home/index'));
const HomeAbout  = lazy(() => import('~@/pages/home/about'));
const HomeHox  = lazy(() => import('~@/pages/home/hox'));
const Project  = lazy(() => import('~@/pages/project'));
const ProjectAdd  = lazy(() => import('~@/pages/project/add'));
const ProjectEdit  = lazy(() => import('~@/pages/project/edit'));
const ProjectDetail  = lazy(() => import('~@/pages/project/detail'));

export const Routes: RouteObject[] = [
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
  { title: '项目管理', path: 'project', element: <Outlet />, children: [
    { title: 'bbq列表', path: 'bbq', element: <Project />, meta: { icon: <UserOutlined /> } },
    { title: '新增项目', path: 'bbq/add', element: <ProjectAdd />, meta: { icon: <UserOutlined /> } },
    { title: '编辑项目', path: 'bbq/:id/edit', element: <ProjectEdit />, meta: { icon: <UserOutlined /> } },
    { title: '查看项目', path: 'bbq/:id', element: <ProjectDetail />, meta: { icon: <UserOutlined /> } },
  ]},
];

export default Routes;
