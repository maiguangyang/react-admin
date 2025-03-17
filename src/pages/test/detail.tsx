import { FC } from 'react';
import { useAction } from './hooks';

const Detail: FC = () => {
  const { title, model, FormData } = useAction();

  return (
    <FormData title={`${title}详情`} model={model} disabled={[]} loading={false} required={[]} />
  );
};

export default Detail;
