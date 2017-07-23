import React from 'react';
import style from './style.css';

import Search from 'Components/Search'
import Logo from 'Components/Logo'

export default () => (
  <div className={`pure-g ${style.headerBar}`}>
    <div className="pure-u-1-8">
      <Logo />
    </div>
    <div className="pure-g pure-u-2-3">
      <div className="pure-u-21-24">
        <Search className={style.search}/>
      </div>
    </div>
    <div className="pure-u-5-24">
      <p>Profile</p>
    </div>
  </div>
);
