/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-01-01 09:12:40
 */
import { notification } from 'antd';
import { ApolloLink, ApolloClient, InMemoryCache, HttpLink, CombinedGraphQLErrors, ServerError } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import LocalStorage from '~@/utils/localStorage.cookie';
import Env from '~@/env';

export const apolloClient = () => {
  const uri = Env.baseUri;
  // LocalStorage.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZW50Ijp7ImlkIjoiMjU0ZmVhN2ItM2Y3Mi00YmM3LThmNTctOGVlZWE2N2RiODFiIiwicm9sZSI6InVzZXIiLCJzaWduIjoiZDdiZjVlMTYxZTZmZTA3MzRhNzE4ZDUyOWQ2OGI3MWIifSwiZXhwIjoxNjY1NjY5MTY3LCJuYmYiOjE2NjMwNzcxNjd9.nLCYdzckbArQLbR4kGHMoPK1E7PURX0H6YlNEUqFKlI');

  const token = LocalStorage.get('Authorization') || {};

  const headers: Record<string, string> = token.data ? {
    Authorization: `Bearer ${token.data}`,
  } : {};

  // HTTP 连接
  const httpLink = new HttpLink({
    uri,
    headers,
  });

  // 错误处理
  const errorLink = new ErrorLink(({ error }) => {
    // ✅ GraphQL 层错误（resolver 抛出的）
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ message, path }) => {
        if (message.includes('expired')) {
          LocalStorage.remove('Authorization');
        }

        if (message.includes('exist')) {
          notification.error({
            message: '',
            description: '该记录已存在',
            duration: 5,
          });
        } else {
          notification.error({
            message: path?.join(' / ') ?? '[GraphQL Error]',
            description: message,
            duration: 5,
          });
        }
      });
    }

    // ✅ 网络层错误（HTTP 层）
    else if (ServerError.is(error)) {
      notification.error({
        message: '[Network error]',
        description: error.message,
        duration: 5,
      });
    }

    // ✅ 其他未知错误
    else if (error) {
      notification.error({
        message: '[Unknown error]',
        description: error.message,
        duration: 5,
      });
    }
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache,
    assumeImmutableResults: true,
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
