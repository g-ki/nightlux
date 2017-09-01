import React from 'react';
import { Grid } from 'semantic-ui-react';

import NearSearchResults from 'Components/NearSearchResults';
import HeaderBar from 'Components/HeaderBar';

export default (props) => (
  <div className="category">
    <HeaderBar />
    <Grid container>
      <Grid.Column>
        <NearSearchResults />
      </Grid.Column>
    </Grid>
  </div>
);
