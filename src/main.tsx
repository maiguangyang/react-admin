import React              from 'react';
import ReactDOM           from 'react-dom/client';
import { BrowserRouter }  from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { HoxRoot }        from 'hox';
import { useApollo } from '~@/common/service/apollo';
import App                from './App';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={useApollo().client}>
    <BrowserRouter>
      <HoxRoot>
        <App />
      </HoxRoot>
    </BrowserRouter>
  </ApolloProvider>,
);
