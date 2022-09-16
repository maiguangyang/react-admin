import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { useBreadcrumb } from '~@/hooks';
import { CustomRouteObject } from '~@/router/types';
import { Link, useNavigate } from 'react-router-dom';

const BreadcrumbLayer: FC = () => {
  const navigate = useNavigate();
  const { breadcrumb } = useBreadcrumb();

  // 面包屑点击
  const handleBreadcrumbOnClick = (e: any, item: any) => {
    navigate(item.path);
  };

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadcrumb.map((item: CustomRouteObject, key: number) => {
          return (
            <Breadcrumb.Item key={key}>
              {
                item.path === 'none'
                  ? item.title
                  : <Link to={item.path} onClick={(e) => { e.preventDefault(); handleBreadcrumbOnClick(e, item); }}>
                      {item.title}
                    </Link>
              }
            </Breadcrumb.Item>
          );
        })
      }
    </Breadcrumb>
  );
};

export default BreadcrumbLayer;
