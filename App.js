import React from 'react';
import {
  View
} from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import New from './src/new/main';

const client = new ApolloClient({
  url: 'https://example.com/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <New />
  </ApolloProvider>
);

export default App;
