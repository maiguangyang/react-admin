import React, { lazy }  from 'react';
import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from './types';
import { Outlet } from 'react-router-dom';

const HomeIndex  = lazy(() => import('~@/pages/home/index'));
const HomeAbout  = lazy(() => import('~@/pages/home/about'));
const HomeHox  = lazy(() => import('~@/pages/home/hox'));
const Project  = lazy(() => import('~@/pages/project'));
const ProjectTest  = lazy(() => import('~@/pages/project/test'));
const ProjectAdd  = lazy(() => import('~@/pages/project/add'));
const ProjectEdit  = lazy(() => import('~@/pages/project/edit'));
const ProjectDetail  = lazy(() => import('~@/pages/project/detail'));

const TestPage  = lazy(() => import('~@/pages/test'));
const TestPageAdd  = lazy(() => import('~@/pages/test/add'));
const TestPageEdit  = lazy(() => import('~@/pages/test/edit'));
const TestPageDetail  = lazy(() => import('~@/pages/test/detail'));

export const Routes: RouteObject[] = [
  { title: '管理中心', path: 'home', children: [
    { title: '仪表台', path: 'index', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
    { title: '关于我们', path: 'about', element: <HomeAbout />, meta: { icon: <UserOutlined /> } },
    { title: 'hox', path: 'hox', element: <HomeHox />, meta: { icon: <UserOutlined /> } },
  ]},
  { title: '物料市场', path: 'material', children: [
    { title: '物料市场', path: 'list', element: <HomeIndex />, meta: { icon: <UserOutlined /> } },
    { title: '物料提供', path: 'supply', element: <Project />, meta: { icon: <UserOutlined /> } },
    { title: '物料需求', path: 'need', element: <Project />, meta: { icon: <UserOutlined /> } },
  ]},
  { title: '项目管理', path: 'project', element: <Outlet />, children: [
    { title: '项目列表', path: 'bbq', element: <Project />, meta: { icon: <UserOutlined /> } },
    { title: '项目列表', path: 'bbq/test', element: <ProjectTest />, meta: { icon: <UserOutlined /> } },
    { title: '新增项目', path: 'bbq/add', element: <ProjectAdd />, meta: { icon: <UserOutlined /> } },
    { title: '编辑项目', path: 'bbq/:id/edit', element: <ProjectEdit />, meta: { icon: <UserOutlined /> } },
    { title: '查看项目', path: 'bbq/:id', element: <ProjectDetail />, meta: { icon: <UserOutlined /> } },
  ]},
  { title: '测试管理', path: 'test', element: <Outlet />, children: [
    { title: '测试列表', path: 'list', element: <TestPage />, meta: { icon: <UserOutlined /> } },
    { title: '新增项目', path: 'list/add', element: <TestPageAdd />, meta: { icon: <UserOutlined /> } },
    { title: '编辑项目', path: 'list/:id/edit', element: <TestPageEdit />, meta: { icon: <UserOutlined /> } },
    { title: '查看项目', path: 'list/:id', element: <TestPageDetail />, meta: { icon: <UserOutlined /> } },
  ]},
];

export default Routes;
