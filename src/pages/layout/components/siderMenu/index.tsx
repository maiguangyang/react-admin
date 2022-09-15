import React, { FC }                from 'react';
import { Menu }                     from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuItem, SiderMenuProps } from './types';
import { CustomRouteObject } from '~@/router/types';

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

const SiderMenuLayer: FC<SiderMenuProps> = (props) => {
  const navigate = useNavigate();

  const { data, selectedKeys } = props;
  const items: MenuItem[] = data.filter(item => item.hidden !== true).map((item: CustomRouteObject) => {
    return getItem(item.title, item.path, item.meta?.icon);
  });

  const handleOnClick = (data: MenuItem) => {
    data?.key && navigate(data.key as string);
  };

  return (
    <Menu items={items} selectedKeys={selectedKeys} mode="inline" style={{ height: '100%', borderRight: 0 }} onClick={handleOnClick}></Menu>
  );
};

export default SiderMenuLayer;
