import { MenuProps } from 'antd';
import { CustomRouteObject } from '~@/router/types';

export interface SiderMenuProps {
  data: CustomRouteObject[];
};

export type MenuItem = Required<MenuProps>['items'][number];