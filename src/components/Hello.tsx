import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HELLO } from '../graphql/queries.ts';

const Hello: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1 className='border-2 border-red-500 bg-blue-500'>{data.hello}</h1>;
};

export default Hello;
