import React, { FC, memo }                from 'react';
import { Menu }                     from 'antd';
import { Link } from 'react-router-dom';
import { MenuItem, SiderMenuProps } from './types';
import { RouteObject } from '~@/router/types';

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

const SiderMenuLayer: FC<SiderMenuProps> = (props) => {
  const { data, selectedKeys, paren } = props;
  const items: MenuItem[] = data.filter(item => item.hidden !== true).map((item: RouteObject) => {
    return getItem(<Link to={`${paren?.path}/${item.path}`}>{item.title}</Link>, item.path, item.meta?.icon);
  });

  return (
    <Menu items={items} selectedKeys={selectedKeys} mode="inline" style={{ height: '100%', borderRight: 0 }}></Menu>
  );
};

export default memo(SiderMenuLayer);
