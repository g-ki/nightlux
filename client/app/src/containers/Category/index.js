import React from 'react';
import { Grid } from 'semantic-ui-react';

import CategoryDetails from 'Components/CategoryDetails';
import HeaderBar from 'Components/HeaderBar';

export default ({ match, location }) => (
  <div className="category">
    <HeaderBar />
    <Grid container>
      <Grid.Column>
        <CategoryDetails match={match}/>
      </Grid.Column>
    </Grid>
  </div>
);
