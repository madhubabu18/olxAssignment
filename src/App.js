import React from 'react'
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Continents from './components/continents/Continents'

/* we are creating client to invoke the graphql endpoint */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com/graphql' /* Endpoint */
})

const App = () => {
  return (
    <ApolloProvider client={client}>
        <div className="App">
          <Continents/>
        </div>
    </ApolloProvider>

  );
}

export default App;
