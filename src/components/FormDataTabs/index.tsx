import React, { FC, memo } from 'react';
import { Tabs } from 'antd';
import { IFormDataTabs } from './types';

const FormDataTabs: FC<IFormDataTabs> = ({ onChange, items }) => {
  return (
    <Tabs
      onChange={onChange}
      type="card"
      items={items}
    />
  )
};

export default memo(FormDataTabs);