import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Autocomplete from 'react-google-autocomplete';

import InputTags from './inputTags';

export default function({ data, onInputChange, onTagsChange, onSubmit }) {
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

      <InputTags
        value={data.tags}
        onChange={onTagsChange}
      />

      <Form.TextArea
        label='Description'
        name="description"
        placeholder="Description"
        value={data.description}
        onChange={onInputChange} />

        <Button onClick={onSubmit}>Submit</Button>
    </Form>
  );
}
