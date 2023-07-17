import React, { FC } from 'react';
import { useGraphql } from '~@/hooks/useGraphql';
import { Project, ProjectUpdateInput } from '~@/__generated__/graphql';
import { useAction } from './hooks';

const Edit: FC = () => {
  const { title, model, FormData } = useAction();
  const [formEdit, { loading }] = useGraphql<Project, ProjectUpdateInput>(model).Update();

  return (
    <FormData title={`修改${title}`} model={model} loading={loading} disabled={[]} required={[]} onCallback={formEdit} />
  );
};

export default Edit;
