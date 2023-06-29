import '~@/assets/stylus/public.less';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import LayoutWrapper from './pages/layout';
import routes from './router';

function AppWrapper() {
  const element = useRoutes(routes);

  return (
    <LayoutWrapper element={element} />
  );
}
export default AppWrapper;
