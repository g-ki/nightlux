import React from 'react';
import style from './style.css';
import { Input } from 'semantic-ui-react'

export default function searchBar(props) {
  const handleKeyUp = async (evt) => {
    console.log(evt.target.value);
  }

  return (
    <div className={`${props.className}`}>
      <Input
        fluid
        icon='search'
        placeholder='Search...'
        onKeyUp={handleKeyUp}
      />
      <div className="results"></div>
    </div>
  );
}
