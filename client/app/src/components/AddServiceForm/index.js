import React from 'react';
import { Redirect } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';
import { Button, Form, Divider, Grid,  Message } from 'semantic-ui-react';
import lo from 'lodash';

import ServiceForm from './form';

import { EMBED_API_KEY } from '../../services/google-maps';


class AddServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.clearForm(),
      redirectTo: null,
    };
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

    if (name == 'place') {
      console.log(value);
    }

    this.setState({
      [name]: value,
    });
  }


  placeToLocation = (place) => {
    const location = lo.get(
      place, 'geometry.location',
      { lat: lo.noop, lng: lo.noop }
    );
    return {
      address: lo.get(place, 'formatted_address', place.name),
      latitude: location.lat(),
      longitude: location.lng(),
    }
  }


  handleTagsChange = (e, { value } ) => {
    this.setState({ tags: value });
  }


  handleSubmit = async (event) => {
    const input = lo.omit(this.state, 'place', 'redirectTo');
    input.location = this.placeToLocation(this.state.place);

    try {
      const res = await this.props.mutate({ variables: { input } });
      this.setState({ redirectTo: `/services/${res.data.createService.id}` });
      this.setState(this.clearForm());
    } catch (e) {
      // TODO: display proper error message
      console.error('something went wrong');
      console.error(e)
    }
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

   if (this.state.redirectTo)
    return (
      <Redirect to={{
        pathname: this.state.redirectTo
      }} />
    );

    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <ServiceForm
            data={this.state}
            onInputChange={this.handleInputChange}
            onTagsChange={this.handleTagsChange}
            onSubmit={this.handleSubmit} />
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
  mutation createService($input: ServiceInput) {
    createService(input: $input) {
      id
    }
  }
`;


const AddServiceFormWithMutation = graphql(addServiceMutation)(AddServiceForm);
export default AddServiceFormWithMutation;
