import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Autocomplete from 'react-google-autocomplete';

export default function({ data, onInputChange, onTagsChange, tagOptions, onTagSearch }) {
  return (
    <Form as='div'>
      <Form.Input
        label='Service Name'
        name="name"
        type="text"
        placeholder="Service name"
        value={data.name}
        onChange={onInputChange} />

      <Form.Field>
        <label>Service address</label>
        <Autocomplete
          placeholder="Service address"
          onPlaceSelected={(place) => {
            onInputChange({
              target: {
                name: "place",
                value: place
              }
            })
          }}
          types={['address']} />
      </Form.Field>

      <Form.Dropdown
        label='Tags'
        placeholder='Tags'
        fluid multiple selection search
        options={tagOptions}
        value={data.tags}
        onChange={onTagsChange}
        onSearchChange={onTagSearch} />

      <Form.TextArea
        label='Description'
        name="description"
        placeholder="Description"
        value={data.description}
        onChange={onInputChange} />

        <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
  );
}
