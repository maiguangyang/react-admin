import { ReactElement } from 'react';
import { RouteObject }  from 'react-router';

export type CustomRouteObject = Omit<RouteObject, 'children'> & {
  name?: string;
  meta?: {
    icon?: ReactElement;
    title?: string;
  };
  children?: Array<CustomRouteObject>;
};
