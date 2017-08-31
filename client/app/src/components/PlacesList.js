import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from 'react-router-dom';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';

export default function PlacesList({ services }) {
  return (
    <Item.Group divided>
      {
        services.map(s =>
          <Item key={s.id}>
            <Item.Content>
              <Item.Header as='a'>{ s.name }</Item.Header>
              <Item.Meta>
                { s.location.address }
              </Item.Meta>
              <Item.Description>{ s.description }</Item.Description>
              <Item.Extra>
                <Button primary floated='right' as='a' href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.location.address)}`} target='_blank'>
                  Get Directions
                  <Icon name='right chevron' />
                </Button>
                {
                  s.tags.map(tag =>
                    <Label as={Link} to={`/tags/${tag.id}`} key={tag.name}>
                      #{ tag.name }
                    </Label>
                  )
                }
              </Item.Extra>
            </Item.Content>
          </Item>
        )
      }
    </Item.Group>
  );
}
