import React         from 'react';
import { useRoutes } from 'react-router';
import { CustomRouteObject } from './types';

import HomeIndex from '~@/pages/home/index';

const routes: CustomRouteObject[] = [
  { name: 'Home.Index', path: '/home', element: <HomeIndex /> },
];

export default () => useRoutes(routes);
