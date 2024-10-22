import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.ts';
import Hello from './components/Hello.tsx';
// import './styles/App.css'; 

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Hello />
      </div>
    </ApolloProvider>
  );
};

export default App;
