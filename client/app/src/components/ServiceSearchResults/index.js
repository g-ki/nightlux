import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import queryString from 'query-string';

import { Header,  Dimmer, Loader } from 'semantic-ui-react';
import ServiceList from '../ServiceList';

function ServiceSearchResults({ data: { loading, error, services } }) {
  if (loading)
    return (
      <p>Loading...</p>
    )

  if (error)
    return <p>{error.message}</p>

  // TODO: implement NotFound component
  // if (services === null)
  //   return <NotFound />

  let serviceList = null;
  if (services.length == 0)
    serviceList = <p>No places in this category!</p>
  else
    serviceList = <ServiceList services={services} />

  return (
    <div className='search-results'>
      {serviceList}
    </div>
  );
}

const ServiceSearchResultsQuery = gql`
  query ServiceSearchResultsQuery($query: String) {
    services(query: $query) {
      id
      name
      description
      location {
        address
      }
      tags {
        id
        name
      }
    }
  }
`;

export default (graphql(ServiceSearchResultsQuery, {
  options(props) {
    return {
      variables: { query: queryString.parse(props.location.search).q }
    }
  }
})(ServiceSearchResults));
