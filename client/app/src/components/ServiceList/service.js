import React from 'react'

import { Link } from 'react-router-dom';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';

const GOOGLE_DIR = 'https://www.google.com/maps/dir/?api=1&destination=';

export default function Service({ service }) {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='a'>{ service.name }</Item.Header>
        <Item.Meta>
          { service.location.address }
        </Item.Meta>
        <Item.Description>{ service.description }</Item.Description>
        <Item.Extra>
          <Button primary floated='right' as='a'
            href={`${GOOGLE_DIR}${encodeURIComponent(service.location.address)}`}
            target='_blank' >
            Get Directions
            <Icon name='right chevron' />
          </Button>
          {
            service.tags.map(tag =>
              <Label as={Link} to={`/tags/${tag.id}`} key={tag.name}>
                #{ tag.name }
              </Label>
            )
          }
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
