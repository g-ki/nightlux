import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import style from './style.css';
import { Input, Search, Button } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  handleKeyUp = (e, { value }) => {
    this.props.data.refetch({
      query: value,
    });
  }

  handleResultSelect = (e, { result }) => {
    this.setState({
      redirectTo: `/services?q=${result.title}`
    });
  }

  render() {
    if (this.state.redirectTo) {
      const path = this.state.redirectTo;
      this.setState({ redirectTo: null })
      return (
        <Redirect push to={path} />
      );
    }


    let results = [];
    if (this.props.data.services)
      results = this.props.data.services.map( s => ({ title: s.name }) );

    return (
      <div className={`${style['search-bar']} ${this.props.className}`}>
        <Search
          loading={this.props.data.loading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleKeyUp}
          results={results}
          className={style.search}
        />
        <Button
          icon='world'
          className={style.geoButton}
          as={Link} to={`/near`}
        />
      </div>
    );
  }
}


const ServiceSearchQuery = gql`
  query ServiceSearchQuery($query: String) {
    services(query: $query) {
      id
      name
    }
  }
`;

export default (graphql(ServiceSearchQuery)(SearchBar));
