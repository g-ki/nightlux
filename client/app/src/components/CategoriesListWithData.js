import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AddCategoryWithMutation from './AddCategoryWithMutation'

import { Link } from 'react-router-dom';

function CategoryListItem({ category }) {
  return (
    <Link to={`category/${category.id}`}>{category.name}</Link>
  );
}

function CategoriesList({ data : { loading, error, categories }}) {
  if (loading)
    return <p>Loading...</p>

  return (
    <div className='categoriesList pure-g'>
      {
        categories.map(cat =>
          <div className="pure-u-1-3" key={cat.id}>
            <CategoryListItem category={cat}/>
          </div>
        )
      }
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
