import { Routes } from '~@/router';
import { CustomRouteObject } from './types';

export const useAllRouter = (name: string) => {
  const caseName = name.toLowerCase();
  const allRouter: CustomRouteObject[] = [];

  function extractChild(data: CustomRouteObject[]) {
    data.forEach((item: CustomRouteObject) => {
      const { children, ...other } = item;
      allRouter.push(other);
      if (children && children.length > 0) extractChild(children);
    });
  }

  extractChild(Routes);

  const List   = allRouter.find(item => item.path === caseName);            // 列表
  const Detail = allRouter.find(item => item.path === `${caseName}/:id`); // 详情
  const Add    = allRouter.find(item => item.path === `${caseName}/add`);    // 新增
  const Edit   = allRouter.find(item => item.path === `${caseName}/edit/:id`); // 修改

  const route = {
    List: List?.path || '',
    Add: Add?.path || '',
    Edit: Edit?.path.replace(`${caseName}/`, '') || '',
    Detail: Detail?.path.replace(`${caseName}/`, '') || '',
  };

  return route;
};
