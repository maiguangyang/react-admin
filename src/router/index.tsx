import React         from 'react';
import { useRoutes } from 'react-router';
import { CustomRouteObject } from './types';

import Home      from '~@/pages/layout';
import HomeIndex from '~@/pages/home/index/index';

const routes: CustomRouteObject[] = [
  { name: 'Home', path: '/', element: <Home />, children: [
    { name: 'Home.Index', path: '/home', element: <HomeIndex /> },
  ]},
];

export default () => useRoutes(routes);
