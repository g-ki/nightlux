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
import ServicesSearch from 'Containers/ServicesSearch';
import Service from 'Containers/Service';
import Near from 'Containers/Near';

const networkOptions = { uri: `http://${window.location.host}/api/graphql` };
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
            <Route path='/near' component={Near} />
            <Route path='/tags/:tagId' component={Category} />
            <Route exact path='/services' component={ServicesSearch} />
            <Route path='/services/new' component={NewService} />
            <Route exact path='/services/:id' component={Service} />
          </Switch>
        </div>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
