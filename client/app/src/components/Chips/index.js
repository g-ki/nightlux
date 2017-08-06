import React from 'react';
import Chip from './chip'

import style from './style.css';

export default function Chips(props) {
  const handleKeyUp = async (event) => {
    if (event.keyCode == 13) {
      event.persist()
      const { target: { value } } = event;
      const newValue = new Set(props.value);
      newValue.add(value);
      await props.onUpdate([...newValue]);
      event.target.value = ""
    }
  };

  return (
    <div className={style.chips}>
      {props.value.map(el => <Chip key={el} value={el}/>)}
      <input className={style.chipInput} type="text" onKeyUp={handleKeyUp}/>
    </div>
  );
}
