import React from 'react';
import '~@/assets/stylus/public.less';
import { useRoutes } from 'react-router-dom';
import LayoutWrapper from './pages/layout';
import routes from './router';

function App() {
  const element = useRoutes(routes);

  return (
    <LayoutWrapper element={element} />
  );
}
export default App;
