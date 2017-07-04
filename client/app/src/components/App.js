import React from 'react';
import styles from './App.css';
import CategoriesListWithData from './CategoriesListWithData'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

const client = new ApolloClient({
  networkInterface
});

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.app}>
      <h2>Categories: </h2>
      <CategoriesListWithData />
    </div>
  </ApolloProvider>
);

export default App;
