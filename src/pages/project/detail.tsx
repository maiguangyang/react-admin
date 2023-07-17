import React, { FC } from 'react';
import { Project, ProjectCreateInput } from '~@/__generated__/graphql';
import { useAction } from './hooks';

const Detail: FC = () => {
  const { title, model, FormData } = useAction();

  return (
    <FormData<Project, ProjectCreateInput> title={`${title}详情`} model={model} disabled={[]} loading={false} required={[]} />
  );
};

export default Detail;
