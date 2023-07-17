import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormData from './components/formModel';

export const useAction = () => {
  const location  = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  const model = 'Project';
  const title = '项目管理';

  const isReadOnly = !/add.*/.test(location.pathname) && !/edit.*/.test(location.pathname);

  return {
    model,
    title,
    FormData,
    isReadOnly,
    loading,
    setLoading,
  };
};
