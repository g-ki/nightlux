import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default function PlacesList({ places }) {
  return (
    <div className='places-list'>
      {
        places.map(p =>
          <li key={p.id}>{p.name}</li>
        )
      }
    </div>
  );
}
