import styles from './index.module.less';
import React, { FC }     from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames        from 'classnames';
import { Header }        from 'antd/lib/layout/layout';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import {
  Avatar,
  Dropdown,
  Menu,
  message,
} from 'antd';
import { HeaderLayerProps, ItemType } from './types';

const dropdownItems: ItemType[] = [
  { label: '资质验证(未验证)', key: '1' },
  { label: '修改密码', key: '2' },
  { label: '退出登录', key: '3' },
];

// 下拉菜单
const DropdownMenu = () => {
  const onClick = ({ key }: { key: string }) => {
    message.info(`Click on item${key}`);
  };
  return (
    <Menu onClick={onClick} items={dropdownItems} />
  );
};

const HeaderLayer: FC<HeaderLayerProps> = (props) => {
  const { current, data } = props;
  console.log('current', current);
  console.log('data', data);

  return (
    <Header className={classNames('flex align-center', styles.header)}>
      <div className={styles.logo} />
      <div className={classNames('flex flex-one align-center', styles.headerRight)}>
        <div className={classNames('flex-one', styles.menuGroup)}>
          {
            data.map((item, key: number) =>
              <NavLink key={key} className={classNames(styles.menuItem, current?.path === item.path ? styles.active : null)} to={item.path} title={item.title}>
                { item.title }
              </NavLink>)
          }
        </div>
        <div className={classNames('flex align-center')}>
          <div className={styles.linkGroup}>
            <Link to='/' className={styles.linkGroupLink} title='网站首页' target='_blank'>网站首页</Link>
            <Link to='/' className={styles.linkGroupLink} title='帮助中心' target='_blank'>帮助中心</Link>
          </div>
          <Avatar size="large" icon={<UserOutlined />} />
          <Dropdown className={styles.company} overlay={DropdownMenu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <span className='margin-l-5'>中山华定科技有限公司</span>
              <DownOutlined className='margin-l-5' />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayer;
