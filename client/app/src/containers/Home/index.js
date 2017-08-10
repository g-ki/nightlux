import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import Search from 'Components/Search';
import CategoriesListWithData from 'Components/CategoriesListWithData';
import Logo from 'Components/Logo';


import style from './style.css';

export default () => (
  <Grid container>
    <Grid.Row>
      <Grid.Column>
        <Logo />
        <Search className={style.search}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Divider horizontal>Popular</Divider>
        <CategoriesListWithData />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
