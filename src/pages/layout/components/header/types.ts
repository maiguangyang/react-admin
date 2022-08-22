import { CustomRouteObject } from '~@/router/types';

export type { ItemType } from 'antd/lib/menu/hooks/useItems';

export interface HeaderLayerProps {
  current: CustomRouteObject | undefined;
  data: CustomRouteObject[];
};