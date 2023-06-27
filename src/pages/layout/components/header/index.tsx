import styles from './index.module.less';
import React, { FC }     from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames        from 'classnames';
import { Header }        from 'antd/lib/layout/layout';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import {
  Avatar,
  Dropdown,
  MenuProps,
  message,
} from 'antd';
import { HeaderLayerProps } from './types';

const items: MenuProps['items'] = [
  { label: '资质验证(未验证)', key: '1' },
  { label: '修改密码', key: '2' },
  { label: '退出登录', key: '3' },
];

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const HeaderLayer: FC<HeaderLayerProps> = (props) => {
  const { current, data } = props;
  return (
    <Header className={classNames('flex align-center', styles.header)}>
      <div className={styles.logo} />
      <div className={classNames('flex flex-one align-center', styles.headerRight)}>
        <div className={classNames('flex-one', styles.menuGroup)}>
          {
            data.filter(item => item.hidden !== true).map((item, key: number) =>
              <NavLink key={key}
                className={classNames(styles.menuItem, current?.path === item.path && styles.active)}
                to={item.path} title={item.title}
              >
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
          <Dropdown className={styles.company} menu={{items, onClick}}>
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
