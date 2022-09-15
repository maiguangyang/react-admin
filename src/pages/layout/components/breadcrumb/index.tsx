import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { useBreadcrumb } from '~@/hooks';
import { CustomRouteObject } from '~@/router/types';

const BreadcrumbLayer: FC = () => {
  const { breadcrumb } = useBreadcrumb();

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadcrumb.map((item: CustomRouteObject, key: number) => <Breadcrumb.Item key={key}>{ item.title }</Breadcrumb.Item>)
      }
    </Breadcrumb>
  );
};

export default BreadcrumbLayer;
