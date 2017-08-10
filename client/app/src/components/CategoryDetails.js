import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Header,  Dimmer, Loader } from 'semantic-ui-react';
import PlacesList from './PlacesList';

function CategoryDetails({ data: { loading, error, tag } }) {
  if (loading)
    return (
      <p>Loading...</p>
    )

  if (error)
    return <p>{error.message}</p>

  // TODO: implement NotFound component
  // if (tag === null)
  //   return <NotFound />

  let placeList = null;
  if (tag.services.length == 0)
    placeList = <p>No places in this category!</p>
  else
    placeList = <PlacesList services={tag.services} />

  return (
    <div className='category-details'>
      <Header as='h1'>#{tag.name}</Header>
      {placeList}
    </div>
  );
}

const CategoryDetailsQuery = gql`
  query CategoryDetailsQuery($tagId: ID!) {
    tag(id: $tagId) {
      id
      name
      services {
        id
        name
        description
        location {
          address
        }
        tags {
          name
        }
      }
    }
  }
`;

export default (graphql(CategoryDetailsQuery, {
  options(props) {
    return {
      variables: { tagId: props.match.params.tagId }
    }
  }
})(CategoryDetails));
