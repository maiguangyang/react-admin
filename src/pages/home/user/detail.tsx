import React from 'react';
import { ComponentData } from './index';

export default () => {
  return (
    <ComponentData.FormData title={`${ComponentData.title}详情`} model={ComponentData.model} disabled={[]} />
  );
};
