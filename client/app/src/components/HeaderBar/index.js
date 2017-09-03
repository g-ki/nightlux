import React from 'react';
import { Grid, Menu, Button } from 'semantic-ui-react';
import style from './style.css';
import { Link } from 'react-router-dom';

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
      <Grid.Column width={3}>
         <Button
          color='blue'
          content='Add new service'
          icon='plus'
          as={Link}
          to="/services/new"
          />
      </Grid.Column>
    </Grid>
  </div>
);
