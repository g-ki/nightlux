import React from 'react';
import Search from 'Components/Search';
import CategoriesListWithData from 'Components/CategoriesListWithData';

import style from './style.css';

export default () => (
  <div className={style.home}>
    <div className={`${style.hero} pure-g`}>
      <Search className={`${style.search} pure-u-11-12 pure-u-md-1-2 pure-u-lg-4-8`}/>
    </div>

    <div className="pure-g">
      <div className={`pure-u-11-12 pure-u-md-3-4 ${style.categories}`}>
        <CategoriesListWithData />
      </div>
    </div>
  </div>
);
