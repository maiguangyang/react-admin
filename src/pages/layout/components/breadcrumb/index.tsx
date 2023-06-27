import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';
import { useBreadcrumb } from '~@/hooks';

const BreadcrumbLayer: FC = () => {
  const { breadcrumb } = useBreadcrumb();

  // 面包屑点击
  const itemRender = (route: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>, params: any, routes: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[], paths: string[]) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.title}</span> : <Link to={paths.join('/')}>{route.title}</Link>;
  };

  return (
    <Breadcrumb style={{ margin: '16px 0' }} itemRender={itemRender} items={breadcrumb} />
  );
};

export default BreadcrumbLayer;
