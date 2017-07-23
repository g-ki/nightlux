import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PlacesList from './PlacesList'

function CategoryDetails({ data: { loading, error, category } }) {
  if (loading)
    return <p>Loading...</p>

  if (error)
    return <p>{error.message}</p>

  // TODO: implement NotFound component
  // if (category === null)
  //   return <NotFound />

  let placeList = null;
  if (category.places.length == 0)
    placeList = <p>No places in this category!</p>
  else
    placeList = <PlacesList places={category.places} />

  return (
    <div className='category-details'>
      <p>{category.name}</p>
      {placeList}
    </div>
  );
}

const CategoryDetailsQuery = gql`
  query CategoryDetailsQuery($categoryId: ID!) {
    category(id: $categoryId) {
      id
      name
      places {
        id
        name
      }
    }
  }
`;

export default (graphql(CategoryDetailsQuery, {
  options(props) {
    return {
      variables: { categoryId: props.match.params.categoryId }
    }
  }
})(CategoryDetails));
