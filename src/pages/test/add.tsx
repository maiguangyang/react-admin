import React, { FC } from 'react';
import { useGraphql } from '~@/hooks/useGraphql';
import { Project, ProjectCreateInput } from '~@/__generated__/graphql';
import { useAction } from './hooks';

const Add: FC = () => {
  const { title, model, FormData } = useAction();
  const [formAdd, { loading }] = useGraphql<Project, ProjectCreateInput>(model).Create();

  return (
    <FormData title={`新增${title}`} model={model} loading={loading} disabled={[]} required={[]} onCallback={formAdd} />
  );
};

export default Add;
