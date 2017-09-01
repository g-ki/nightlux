import React from 'react'
import { Item } from 'semantic-ui-react';

import Service from './service';

export default function ServiceList({ services }) {
  return (
    <Item.Group divided>
      {
        services.map(s => <Service key={s.id} service={s} />)
      }
    </Item.Group>
  );
}
