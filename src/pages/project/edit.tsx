import React, { FC } from 'react';
import { useAction } from './hooks';

 const Edit: FC = () => {
  const { title, model, FormData } = useAction();
 
  return (
    <FormData title={`修改${title}`} model={model} disabled={[]} />
  );
};

export default Edit;
