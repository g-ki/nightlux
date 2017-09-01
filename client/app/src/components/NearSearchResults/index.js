import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import queryString from 'query-string';

import { Header,  Dimmer, Loader } from 'semantic-ui-react';
import ServiceList from '../ServiceList';

import geolocation from '../../services/current-location';

class NearSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: window.lastLocation,
    }

    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    geolocation.getCurrentPosition((position) => {
      console.log(position)

      this.setState({
        currentLocation: position.coords,
      })
      window.lastLocation = position.coords;
      const location = `${position.coords.latitude},${position.coords.longitude}`;

      this.props.data.refetch({
        geoQuery: location,
      });
    })
  }

  render() {
    let location = "Loading";
    if (this.state.currentLocation)
      location = `${this.state.currentLocation.latitude},${this.state.currentLocation.longitude}`;

    const { loading, error, services } = this.props.data;
    console.log(loading, services)

    let serviceList = null;
    if (services !== undefined && services.length == 0)
      serviceList = <p>There are no places near you!</p>
    else if (services !== undefined)
      serviceList = <ServiceList services={services} />

    return (
      <div>
        {serviceList}
      </div>
    );
  }
}

// function NearSearchResults({ data: { loading, error, services } }) {
//   if (loading)
//     return (
//       <p>Loading...</p>
//     )

//   if (error)
//     return <p>{error.message}</p>

//   // TODO: implement NotFound component
//   // if (services === null)
//   //   return <NotFound />

//   let serviceList = null;
//   if (services.length == 0)
//     serviceList = <p>No places in this category!</p>
//   else
//     serviceList = <ServiceList services={services} />

//   return (
//     <div className='search-results'>
//       {serviceList}
//     </div>
//   );
// }

const NearSearchResultsQuery = gql`
  query NearSearchResultsQuery($geoQuery: String) {
    services(geoQuery: $geoQuery) {
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

export default (graphql(NearSearchResultsQuery)(NearSearchResults));
