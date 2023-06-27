import { MenuProps } from 'antd';
import { RouteObject } from '~@/router/types';

export interface SiderMenuProps {
  data: RouteObject[];
  selectedKeys: string[];
};

export type MenuItem = Required<MenuProps>['items'][number];