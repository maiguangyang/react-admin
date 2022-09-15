import { ReactElement } from 'react';
import { RouteObject }  from 'react-router';

export type CustomRouteObject = Omit<RouteObject, 'children'> & {
  path: string,
  title?: string;
  name?: string;
  hidden?: boolean;
  meta?: {
    icon?: ReactElement;
  };
  children?: Array<CustomRouteObject>;
};
