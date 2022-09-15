import { Routes } from '~@/router';
import { CustomRouteObject } from './types';

export const useAllRouter = (name: string) => {
  const allRouter: CustomRouteObject[] = [];

  function extractChild(data: CustomRouteObject[]) {
    data.forEach((item: CustomRouteObject) => {
      const { children, ...other } = item;
      allRouter.push(other);
      if (children && children.length > 0) extractChild(children);
    });
  }

  extractChild(Routes);

  const List = allRouter.find(item => item.name === name); // 列表
  const Add = allRouter.find(item => item.name === `${name}Add`); // 新增

  const route = {
    List: List?.path,
    Add: Add?.path,
  };

  return route;
};
