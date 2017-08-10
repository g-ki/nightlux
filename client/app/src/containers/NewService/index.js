import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import AddServiceForm from 'Components/AddServiceForm';
import HeaderBar from 'Components/HeaderBar';

export default () => (
  <div className="service">
    <HeaderBar />
    <Grid container>
      <Grid.Column>
        <Header as="h1">Add new Service</Header>
        <AddServiceForm />
      </Grid.Column>
    </Grid>
  </div>
);
