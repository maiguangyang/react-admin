import { RouteObject } from '~@/router/types';

export type { ItemType } from 'antd/lib/menu/hooks/useItems';

export interface HeaderLayerProps {
  current: RouteObject | undefined;
  data: RouteObject[];
};