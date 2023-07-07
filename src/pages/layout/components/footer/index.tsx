import React, { FC } from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

const FooterLayer: FC = () => {
  return (
    <Footer style={{ textAlign: 'center', padding: '12px 0' }}>
      <span style={{ padding: '0 10px' }}>©2023 All Rights Reserved</span>
      <Link to='/' className='link_group_link' title='联系我们' onClick={e => e.preventDefault()}>联系我们</Link>
    </Footer>
  );
};

export default FooterLayer;
