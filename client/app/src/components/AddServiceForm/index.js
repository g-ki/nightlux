import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Button, Form, Divider, Grid,  Message } from 'semantic-ui-react';

import ServiceForm from './form';
import GMap from 'Components/GMap';

import { EMBED_API_KEY } from '../../services/google-maps';


class AddServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.clearForm();
  }


  clearForm() {
    return {
      name: "",
      place: {},
      tags: [],
      description: "",
    }
  }


  handleInputChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    });
  }


  handleTagsChange = (e, { value } ) => {
    this.setState({ tags: value });
  }


  handleTagSearch = (e, value) => {
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

    this.setState(this.clearForm());
  }


  tagsOptions = () => {
    return this.state.tags.map(t => ({ key: t, text: t, value: t }))
  }


  render() {
    let place_id = "_"; // TODO: fallback to the current location of the user
    if (this.state.place.place_id)
      place_id = `place_id:${this.state.place.place_id}`;

    let address_percision_msg = ""
    if (this.state.place.types && this.state.place.types[0] !== "street_address")
      address_percision_msg = (
        <Message warning>
          <Message.Header>Please give more percise address!</Message.Header>
        </Message>
      );


    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <ServiceForm
            data={this.state}
            onInputChange={this.handleInputChange}
            onTagsChange={this.handleTagsChange}
            tagOptions={[]}
            onTagSearch={this.handleTagSearch} />
        </Grid.Column>
        <Grid.Column>
          { address_percision_msg }
          <iframe
            width="100%"
            height="400"
            frameBorder="0" style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?key=${EMBED_API_KEY}&q=${place_id}`} allowFullScreen>
          </iframe>
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
