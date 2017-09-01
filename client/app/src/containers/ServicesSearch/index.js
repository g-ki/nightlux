import React from 'react';
import { Grid } from 'semantic-ui-react';

import ServiceSearchResults from 'Components/ServiceSearchResults';
import HeaderBar from 'Components/HeaderBar';

export default (props) => (
  <div className="category">
    <HeaderBar />
    <Grid container>
      <Grid.Column>
        <ServiceSearchResults {...props} />
      </Grid.Column>
    </Grid>
  </div>
);
