import { useState }          from 'react';
import { createGlobalStore } from 'hox';
import { RouteObject } from '~@/router/types';

const homeBreadcrumb: RouteObject = { title: '首页', path: '/' };

export const [useBreadcrumb] = createGlobalStore(() => {
  const [breadcrumb, setBreadcrumb] = useState<RouteObject[]>([homeBreadcrumb]);

  const handleSetBreadcrumb = (data: RouteObject[]) => {
    setBreadcrumb([homeBreadcrumb].concat(data.filter(item => item !== undefined)));
  };

  return {
    breadcrumb,
    handleSetBreadcrumb,
  };
});
