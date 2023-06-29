import React, { FC, useEffect } from 'react';
import { useAntdAction } from '~@/hooks/useAntd';

const HomeAbout: FC = () => {
  const { message } = useAntdAction();

  useEffect(() => {
    message.success('Success!');
  }, []);

  return (
    <>
      about
    </>
  );
};

export default HomeAbout;
