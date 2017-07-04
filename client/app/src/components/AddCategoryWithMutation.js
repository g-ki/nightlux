import React from 'react';
import { gql, graphql } from 'react-apollo';

import { categoriesListQuery } from './CategoriesListWithData'

function AddCategory({ mutate }) {
  const handleKeyUp = async (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      await mutate({
        variables: { name: evt.target.value },
        refetchQueries: [{ query: categoriesListQuery }],
      });
      evt.target.value = '';
    }
  };

  return (
    <input
      type='text'
      placeholder='New Category'
      onKeyUp={handleKeyUp}
    />
  );
}

const addCategoryMutation = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      id
      name
    }
  }
`;

const AddCategoryWithMutation = graphql(addCategoryMutation)(AddCategory);
export default AddCategoryWithMutation;
