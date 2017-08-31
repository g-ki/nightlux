import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import style from './style.css';

import Search from 'Components/Search';
import Logo from 'Components/Logo';

export default () => (
  <div className={style.headerBar}>
    <Grid stackable>
      <Grid.Column width={2} className={style.logoCol}>
        <Logo white/>
      </Grid.Column>
      <Grid.Column width={9}>
        <Search className={style.search}/>
      </Grid.Column>
    </Grid>
  </div>
);
