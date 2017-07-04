import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddCategoryWithMutation from './AddCategoryWithMutation'

function CategoriesList({ data : { loading, error, categories }}) {
  if (loading)
    return <p>Loading...</p>

  return (
    <div className='categoriesList'>
      <AddCategoryWithMutation />
      <ul>
        { categories.map(cat => <li key={cat.id}>{cat.name} > {cat.places.map(p => p.name).join(', ')}</li>) }
      </ul>
    </div>
  );
}

export const categoriesListQuery = gql`
  query CategoriesListQuery {
    categories {
      id
      name
      places {
        name
      }
    }
  }
`;
const CategoriesListWithData = graphql(categoriesListQuery, {
  options: { pollInterval: 5000 }
})(CategoriesList);

export default CategoriesListWithData;
