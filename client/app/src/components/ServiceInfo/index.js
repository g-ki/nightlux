import React from 'react';
import { Redirect } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';
import { Button, Rating, Divider, Grid,  Label, Header, Link } from 'semantic-ui-react';
import lo from 'lodash';

import { EMBED_API_KEY } from '../../services/google-maps';


function ServiceInfo(props) {
  if (props.data.loading)
    return (<p>Loading...</p>);

  return (
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header>{props.data.service.name}</Header>
        <h4>{props.data.service.location.address}</h4>
        <p>{props.data.service.description}</p>
        {
          props.data.service.tags.map(tag =>
            <Label as={Link} to={`/tags/${tag.id}`} key={tag.name}>
              #{ tag.name }
            </Label>
          )
        }
        <div>
          <Rating icon='heart' defaultRating={3} maxRating={5} />
        </div>
      </Grid.Column>
      <Grid.Column>
        <iframe
          width="100%"
          height="400"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=${EMBED_API_KEY}&q=${props.data.service.location.address}`} allowFullScreen>
        </iframe>
      </Grid.Column>
    </Grid>
  );
}


const ServiceQuery = gql`
  query ServiceQuery($id: ID!) {
    service(id: $id) {
      id
      name
      description
      location {
        address
        latitude
        longitude
      }
      tags {
        id
        name
      }
    }
  }
`;


export default graphql(ServiceQuery, {
  options(props) {
    return {
      variables: { id: props.match.params.id }
    }
  }
})(ServiceInfo);
