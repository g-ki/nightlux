import React from "react";
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import BlackLogoImg from 'Assets/images/b-logo.png';
import WhiteLogoImg from 'Assets/images/w-logo.png';

export default (props) => (
  <div className="logo">
    <Image
      to='/'
      as={ Link } size='small'
      centered
      src={props.white ? WhiteLogoImg : BlackLogoImg}
    />
  </div>
);
