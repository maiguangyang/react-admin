import React, { FC }       from 'react';
import { Menu } from 'antd';
import { MenuItem, SiderMenuProps } from './types';

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

const SiderMenuLayer: FC<SiderMenuProps> = (props) => {
  const { data } = props;
  const items2: MenuItem[] = data.map((item, key: number) => getItem(item.title, key, item.meta?.icon));

  return (
    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={items2}></Menu>
  );
};

export default SiderMenuLayer;
