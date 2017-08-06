import React from 'react';
import { gql, graphql } from 'react-apollo';

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


  handleChipsUpdate = (newTags) => {
    this.setState({ tags: newTags });
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.props.mutate({
        variables: { input: this.state },
      });
      // TODO: redirect to service page
    } catch (e) {
      console.error('something went wrong');
    }

    this.setState({
      name: "",
      address: "",
      tags: [],
      description: "",
    });
  }


  render() {
    return (
      <div className="pure-form pure-form-stacked">
        <input
          name="name"
          type="text"
          placeholder="Service name"
          value={this.state.name}
          onChange={this.handleInputChange} />

          <input
            name="address"
            type="text"
            placeholder="Service address"
            value={this.state.address}
            onChange={this.handleInputChange} />

          <Chips value={this.state.tags} onUpdate={this.handleChipsUpdate}/>

        <textarea
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleInputChange}
          ></textarea>

          <button onClick={this.handleSubmit}>Submit</button>
      </div>
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
