import React from 'react';
import style from './style.css';

export default function searchBar(props) {
  const handleKeyUp = async (evt) => {
    console.log(evt.target.value);
  }

  return (
    <div className={`${style.search} ${props.className}`}>
      <input
        className="prompt"
        type="text"
        placeholder="Search"
        onKeyUp={handleKeyUp}
      />
      <div className="results"></div>
    </div>
  );
}
