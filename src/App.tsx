/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-01-01 09:12:40
 */
import '~@/assets/stylus/public.less';
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
