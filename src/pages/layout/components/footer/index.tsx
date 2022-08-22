import React, { FC } from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

const FooterLayer: FC = () => {
  return (
    <Footer style={{ textAlign: 'center', padding: '12px 0' }}>
      <span style={{ padding: '0 10px' }}>Marlon ©2022 All Rights Reserved</span>
      <Link to='/' className='link_group_link' title='联系客服' onClick={e => e.preventDefault()}>联系客服</Link>
    </Footer>
  );
};

export default FooterLayer;
