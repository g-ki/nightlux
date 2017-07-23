import React from 'react';

import CategoryDetails from 'Components/CategoryDetails';
import HeaderBar from 'Components/HeaderBar';

export default ({ match, location }) => (
  <div className="category">
    <HeaderBar />
    <CategoryDetails match={match}/>
  </div>
);
