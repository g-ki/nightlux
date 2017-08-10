import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Card, Image } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

function CategoryListItem({ category }) {
  return (
    <Card raised as={ Link } to={`tags/${category.id}`}>
      <Card.Content>
        <Card.Header content={`#${category.name}`}/>
      </Card.Content>
    </Card>
  );
}

function CategoriesList({ data : { loading, error, tags }}) {
  if (loading)
    return <p>Loading...</p>

  return (
    <Card.Group stackable itemsPerRow={3}>
      {
        tags.map(cat =>
          <CategoryListItem key={cat.id} category={cat}/>
        )
      }
    </Card.Group>
  );
}

export const categoriesListQuery = gql`
  query CategoriesListQuery {
    tags {
      id
      name
      services {
        name
      }
    }
  }
`;
const CategoriesListWithData = graphql(categoriesListQuery, {
  options: { pollInterval: 5000 }
})(CategoriesList);

export default CategoriesListWithData;
