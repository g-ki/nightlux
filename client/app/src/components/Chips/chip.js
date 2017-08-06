import React from 'react';

import style from './style.css';

export default function Chip(props) {
  return (
    <span className={style.chip}>
      {props.value} 
    </span>
  );
}
