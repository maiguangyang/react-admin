import { notification } from 'antd';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import LocalStorage from '~@/utils/localStorage.cookie';
import Env from '~@/env';

export const useApollo = () => {
  const uri = Env.baseUri;
  // LocalStorage.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50Ijp7ImlkIjoiMjU0ZmVhN2ItM2Y3Mi00YmM3LThmNTctOGVlZWE2N2RiODFiIiwicm9sZSI6InVzZXIiLCJzaWduIjoiZDdiZjVlMTYxZTZmZTA3MzRhNzE4ZDUyOWQ2OGI3MWIifSwiZXhwIjoxNjY1NjY5MTY3LCJuYmYiOjE2NjMwNzcxNjd9.nLCYdzckbArQLbR4kGHMoPK1E7PURX0H6YlNEUqFKlI');

  const token = LocalStorage.get('Authorization') || {};

  const headers: Record<string, string> = token.data ? {
    Authorization: `Bearer ${token.data}`,
  } : {};

  const httpLink = new HttpLink({
    uri,
    headers,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, path }) => {
        if (message.indexOf('expired') !== -1) LocalStorage.remove('Authorization');

        if (message.indexOf('exist') !== -1) {
          notification.error({
            message: '',
            description: '该记录已存在',
            duration: 5,
          });
        } else {
          notification.error({
            message: path,
            description: message,
            duration: 5,
          });
        }
      });
    }
    if (networkError) {
      notification.error({
        message: '[Network error]',
        description: networkError.message,
        duration: 5,
      });
    }
  });

  const cache = new InMemoryCache({
    addTypename: false,
    // dataIdFromObject(responseObject) {
    //   switch (responseObject.__typename) {
    //     default: return defaultDataIdFromObject(responseObject);
    //   }
    // },
  });

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'none',
      },
    },
  });

  return {
    client,
  };
};
