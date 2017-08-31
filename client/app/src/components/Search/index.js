import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import style from './style.css';
import { Input, Search } from 'semantic-ui-react'

function searchBar(props) {
  const handleKeyUp = async (e, { value }) => {
    console.log(value);
    props.data.refetch({
      query: value,
    });
  }

  let results = [];
  if (props.data.services)
    results = props.data.services.map( s => ({ title: s.name }) );

  return (
    <div className={`${props.className}`}>
      <Search
        loading={props.data.loading}
        onResultSelect={() => {}}
        onSearchChange={handleKeyUp}
        results={results}
        className={style.search}
      />
    </div>
  );
}


const ServiceSearchQuery = gql`
  query ServiceSearchQuery($query: String) {
    services(query: $query) {
      id
      name
    }
  }
`;

export default (graphql(ServiceSearchQuery)(searchBar));
