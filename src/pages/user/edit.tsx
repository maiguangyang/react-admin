import React from 'react';
import { ComponentData } from './index';

export default () => {
  const disabled: string[] = ['password'];
  return <ComponentData.FormData title={`修改${ComponentData.title}`} model={ComponentData.model} disabled={disabled} />;
};
