import React from 'react';
import { ComponentData } from './index';

export default () => {
  return (
    <ComponentData.FormData title={`修改${ComponentData.title}`} model={ComponentData.model} />
  );
};
