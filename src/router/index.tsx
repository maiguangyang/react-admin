import React         from 'react';
import { useRoutes } from 'react-router';
import { CustomRouteObject } from './types';

import PcHome      from '~@/pages/pc';
import PcHomeIndex from '~@/pages/pc/home/index/index';

const routes: CustomRouteObject[] = [
  { name: 'PcHome', path: '/', element: <PcHome />, children: [
    { name: 'Home.Index', path: '/home', element: <PcHomeIndex /> },
  ]},
];

export default () => useRoutes(routes);
