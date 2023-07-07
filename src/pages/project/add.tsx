import React, { FC } from 'react';
import { useAction } from './hooks';

const Add: FC = () => {
  const { title, model, FormData } = useAction();

  return (
    <FormData title={`新增${title}`} model={model} disabled={[]} required={[]} />
  );
};

export default Add;
