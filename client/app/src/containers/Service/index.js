import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import ServiceInfo from 'Components/ServiceInfo';
import HeaderBar from 'Components/HeaderBar';

export default ({ match, location }) => (
  <div className="service">
    <HeaderBar />
    <Grid container>
      <Grid.Column>
        <ServiceInfo match={match}/>
      </Grid.Column>
    </Grid>
  </div>
);
