import { ReactElement } from 'react';
import { NonIndexRouteObject } from 'react-router-dom';

export type RouteObject = Omit<NonIndexRouteObject, 'children'> & {
  path: string
  title?: string
  hidden?: boolean
  meta?: {
    icon?: ReactElement
  };
  children?: RouteObject[]
};
