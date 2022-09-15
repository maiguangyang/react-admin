import React from 'react';
import { ComponentData } from './index';

export default () => {
  return (
    <ComponentData.FormData title={`新增${ComponentData.title}`} model={ComponentData.model} />
  );
};
