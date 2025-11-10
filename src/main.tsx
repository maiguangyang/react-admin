/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-01-01 09:12:40
 */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client/react";
import { HoxRoot } from 'hox';

import { apolloClient } from '~@/services/apollo_service';
import App from './App';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const apollo = apolloClient();
root.render(
  <ApolloProvider client={apollo.client}>
    <BrowserRouter>
      <HoxRoot>
        <App />
      </HoxRoot>
    </BrowserRouter>
  </ApolloProvider>,
);
