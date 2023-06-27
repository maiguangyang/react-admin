import { useLocation }  from 'react-router-dom';
import { Routes } from '~@/router';
import { RouteObject } from './types';

export const useAllRouter = (name: string) => {
  const location = useLocation();
  const caseName = name.toLowerCase();
  const allRouter: RouteObject[] = [];
  const parent = location.pathname.split(caseName)[0];

  function extractChild(data: RouteObject[]) {
    data.forEach((item: RouteObject) => {
      const { children, ...other } = item;
      allRouter.push(other);
      if (children && children.length > 0) extractChild(children);
    });
  }

  extractChild(Routes);

  const List   = allRouter.find(item => item.path === caseName);                // 列表
  const Detail = allRouter.find(item => item.path === `${caseName}/:id`);       // 详情
  const Add    = allRouter.find(item => item.path === `${caseName}/add`);       // 新增
  const Edit   = allRouter.find(item => item.path === `${caseName}/:id/edit`);  // 修改

  const route = {
    List  : `${parent}${List?.path}`,
    Add   : `${parent}${Add?.path}`,
    Edit  : `${parent}${Edit?.path}`,
    Detail: `${parent}${Detail?.path}`,
  };

  return route;
};
