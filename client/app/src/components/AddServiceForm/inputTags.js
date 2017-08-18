import React from 'react';
import { gql, graphql } from 'react-apollo';
import {  Form } from 'semantic-ui-react';
import lo from 'lodash';

class InputTags extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      searchQuery: "",
    };
  }


  handleSearch = lo.debounce((e, value) => {
    this.setState({ searchQuery: value });

    this.props.data.fetchMore({
      variables: { name: value },

      updateQuery(previousResult, { fetchMoreResult, queryVariables }) {
        return {
          ...previousResult,
          tags: lo.unionBy(previousResult.tags, fetchMoreResult.tags, 'id')
        }
      },

    });
  }, 300)


  render() {
    const { value, onChange, data } = this.props;
    const { loading, error, tags = [] } = data;
    const { searchQuery } = this.state;

    let tagOptions = tags.map(t => ({ key: t.id, text: t.name, value: t.name }));
    const valueOptions = value.map(v => ({ key: v, text: v, value: v }));
    tagOptions = lo.unionBy(tagOptions, valueOptions, 'value');

    if (searchQuery.length > 0) {
      const queryTag = {key: searchQuery, text: searchQuery, value: searchQuery};
      tagOptions.unshift(queryTag);
    }

    return (
      <Form.Dropdown
        label='Tags'
        placeholder='Tags'
        fluid multiple selection search
        options={tagOptions}
        value={value}
        onChange={onChange}
        onSearchChange={this.handleSearch}
        loading={data.loading}
        />
    );
  }
}

const searchTags = gql`
  query searchTags($name: String) {
    tags(name: $name, limit: 5) {
      id
      name
    }
  }
`;


export default graphql(searchTags)(InputTags);
