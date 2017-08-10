import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Button, Form, Divider, Grid } from 'semantic-ui-react';

import Chips from 'Components/Chips';


class AddServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      tags: [],
      description: "",
    };
  }


  handleInputChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    });
  }


  handleTagsUpdate = (e, { value } ) => {
    this.setState({ tags: value });
  }


  handleSearchChange = (e, value) => {
    // TODO: Search in the datatabe
    console.log('search for', value);
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.props.mutate({
        variables: { input: this.state },
      });
      // TODO: redirect to service page
    } catch (e) {
      // TODO: display proper error message
      console.error('something went wrong', e);
    }

    this.setState({
      name: "",
      address: "",
      tags: [],
      description: "",
    });
  }


  tagsOptions = () => {
    return this.state.tags.map(t => ({ key: t, text: t, value: t }))
  }


  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Form as='div'>
            <Form.Input
              label='Service Name'
              name="name"
              type="text"
              placeholder="Service name"
              value={this.state.name}
              onChange={this.handleInputChange} />

            <Form.Input
              label='Service address'
              name="address"
              type="text"
              placeholder="Service address"
              value={this.state.address}
              onChange={this.handleInputChange} />

            <Form.Dropdown
              label='Tags'
              placeholder='Tags'
              fluid multiple selection search
              options={[]}
              value={this.state.tags}
              onChange={this.handleTagsUpdate}
              onSearchChange={this.handleSearchChange} />

            <Form.TextArea
              label='Description'
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleInputChange} />

              <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <h1>Map goes here</h1>
        </Grid.Column>
      </Grid>
    );
  }
}


const addServiceMutation = gql`
  mutation addService($input: ServiceInput) {
    addService(input: $input) {
      id
    }
  }
`;


const AddServiceFormWithMutation = graphql(addServiceMutation)(AddServiceForm);
export default AddServiceFormWithMutation;
