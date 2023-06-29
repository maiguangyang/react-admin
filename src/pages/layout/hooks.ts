import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteObject } from '~@/router/types';
import { Routes } from '~@/router';
import utils from '~@/utils/utils';

const homeBreadcrumb: RouteObject = { title: '首页', path: '/' };

export const useLayoutStore = () => {
  const location = useLocation();
  const [childMenu, setChildMenu] = useState<RouteObject[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const parenRoute = useRef<RouteObject>();
  const breadcrumbList = useRef<RouteObject[]>([]);

  const routers: RouteObject[] = Routes || [];

  useEffect(() => {
    const array = location.pathname.split('/').filter(item => item !== '');

    if (array.length > 0 && routers !== undefined && routers.length > 0) {
      const current = handleFindRouteItem(routers, `${array[0]}`);

      if (!current || !current.children?.length) {
        setChildMenu([]);
        return;
      }

      parenRoute.current = current;
      const childMenu = current.children.filter(item => item.path && utils.checkIsFormModel(item.path));
      setChildMenu(childMenu ?? []);

      const name = array[1];
      const newCurrent = _.cloneDeep(current);
      newCurrent.path = utils.firstChildPath(newCurrent);

      const lastChild = current.children?.find(item => item.path === name);
      const breadcrumb = [newCurrent];

      if (lastChild) {
        if (lastChild?.path) setSelectedKeys([lastChild.path]);
        breadcrumb.push({ title: lastChild.title, path: `/${newCurrent.path}` });
      }

      if (/add/.test(location.pathname)) {
        breadcrumb.push({ title: '添加', path: 'none' });
      } else if (/edit.*/.test(location.pathname)) {
        breadcrumb.push({ title: '修改', path: 'none' });
      } else if (/\w{8}(-\w{4}){3}-\w{12}.*/.test(location.pathname)) {
        breadcrumb.push({ title: '详情', path: 'none' });
      }

      handleSetBreadcrumb(breadcrumb);
    }
  }, [location]);

  // handleSetBreadcrumb ...
  const handleSetBreadcrumb = (data: RouteObject[]) => {
    breadcrumbList.current = [homeBreadcrumb].concat(data.filter(item => item !== undefined));
  };

  const handleFindRouteItem = (data: RouteObject[], path: string) => {
    const item = data.find(item => item.path === path) as RouteObject;
    return item;
  };

  return {
    parenRoute,
    childMenu,
    selectedKeys,
    breadcrumbList,
  };
};
