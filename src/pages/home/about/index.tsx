import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface UserDataItem {
  id: string;
  phone: string;
  username: string;
}

interface UserDataFields {
  data: UserDataItem[];
}

const GET_DOGS = gql`
  query GetUsers {
    users {
      data {
        id
        phone
        username
      }
    }
  }
`;

const HomeAbout = () => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const users: UserDataFields = data.users;

  return (
    <>
      {
        users.data.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)
      }
    </>
  );
};

export default HomeAbout;
