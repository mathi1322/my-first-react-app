import React, { useState } from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

function ShoppingList() {
  const [display, setDisplay] = useState('show');
  const [list, setList] = useState('');
  const style = {
    color: 'black',
    fontSize: '50px'
  };
  const myItems = ['laptop','speakers','mic','amplifier','instruments'];
  const listItems = myItems.map( (item) => {
    return <li>{item}</li>
  });
  const handleClick = () => {
    display == 'show' ? setDisplay('hide') : setDisplay('show') ;
    list == '' ? setList(listItems) : setList('');
  }
  return (
    <div className='justify'>
      <div>
        <button
          style = {style} 
          onClick = {handleClick}
        > 
          {display}
        </button>
        <div>
          <ul>{list}</ul>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
