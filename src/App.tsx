import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.ts';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Footer from './components/footer.tsx';
// import Hello from './components/Hello.tsx';
// import './styles/App.css'; 

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
     
      <Header />
        <Home />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
