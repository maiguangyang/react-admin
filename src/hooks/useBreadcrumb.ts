import { useState }          from 'react';
import { createGlobalStore } from 'hox';
import { CustomRouteObject } from '~@/router/types';

const homeBreadcrumb: CustomRouteObject = { title: '首页', path: '/' };

export const [useBreadcrumb] = createGlobalStore(() => {
  const [breadcrumb, setBreadcrumb] = useState<CustomRouteObject[]>([homeBreadcrumb]);

  const handleSetBreadcrumb = (data: CustomRouteObject[]) => {
    setBreadcrumb([homeBreadcrumb].concat(data.filter(item => item !== undefined)));
  };

  return {
    breadcrumb,
    handleSetBreadcrumb,
  };
});
