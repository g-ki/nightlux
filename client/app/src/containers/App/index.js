import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import style from './style.css';

import Home from 'Containers/Home';
import Category from 'Containers/Category';
import NewService from 'Containers/NewService';

const networkOptions = { uri: 'http://localhost:4000/graphql' };
const networkInterface = createNetworkInterface(networkOptions);
const client = new ApolloClient({
  networkInterface
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories/:categoryId' component={Category} />
          <Route path='/services/new' component={NewService} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
