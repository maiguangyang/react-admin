import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteObject } from '~@/router/types';
import { Routes } from '~@/router';

const homeBreadcrumb: RouteObject = { title: '首页', path: '/' };

export const useLayoutStore = () => {
  const location = useLocation();
  const [childMenu, setChildMenu] = useState<RouteObject[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const parenRoute = useRef<RouteObject>();
  const breadcrumbList = useRef<RouteObject[]>([]);

  const routers: RouteObject[] = Routes?.[0].children || [];

  const handleFindRouteItem = (data: RouteObject[], path: string) => {
    return data.find(item => item.path === path) as RouteObject;
  };

  useEffect(() => {
    const array = location.pathname.split('/').filter(item => item !== '');
    if (array.length > 0 && routers !== undefined && routers.length > 0) {
      const current = handleFindRouteItem(routers, `${array[0]}`);
      if (!current) {
        setChildMenu([]);
        return;
      }

      parenRoute.current = current;
      if (current.children?.length) setChildMenu(current.children);

      if (array.length === 1) {
        handleSetBreadcrumb([current]);
        setSelectedKeys([current.path]);
      } else {
        const name = array[1];
        const lastChild = current.children?.find(item => item.path === name);

        const breadcrumb = [current, lastChild as RouteObject];
        if (lastChild?.path) setSelectedKeys([lastChild.path]);

        if (/add/.test(location.pathname)) {
          breadcrumb.push({ title: '添加', path: 'none' });
        } else if (/edit.*/.test(location.pathname)) {
          breadcrumb.push({ title: '修改', path: 'none' });
        } else if (/\w{8}(-\w{4}){3}-\w{12}.*/.test(location.pathname)) {
          breadcrumb.push({ title: '详情', path: 'none' });
        }

        handleSetBreadcrumb(breadcrumb);
      }
    }
  }, [location]);

  // handleSetBreadcrumb ...
  const handleSetBreadcrumb = (data: RouteObject[]) => {
    breadcrumbList.current = [homeBreadcrumb].concat(data.filter(item => item !== undefined));
  };

  return {
    parenRoute,
    childMenu,
    selectedKeys,
    breadcrumbList,
  };
};
