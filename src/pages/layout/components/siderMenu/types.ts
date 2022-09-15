import { MenuProps } from 'antd';
import { CustomRouteObject } from '~@/router/types';

export interface SiderMenuProps {
  data: CustomRouteObject[];
  selectedKeys: string[];
};

export type MenuItem = Required<MenuProps>['items'][number];