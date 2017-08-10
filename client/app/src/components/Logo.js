import React from "react";
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="logo">
    <Image
      to='/'
      as={ Link } size='small'
      centered
      src='http://static1.squarespace.com/static/5579f1e7e4b0b5ae6f1ce056/t/589da8cd725e25b1e05df85b/1486727373827/minimalLogo.png?format=1000w'
    />
  </div>
);
