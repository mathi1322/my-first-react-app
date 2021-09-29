import React, { useState } from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

const List = props => {
  return props.items.map((item) => {
    return <li>{item}</li>
  });
};

function ShoppingList() {
  const [display, setDisplay] = useState('show');
  const [list, setList] = useState([]);
  const style = {
    color: 'black',
    fontSize: '50px'
  };
  const myItems = ['laptop','speakers','mic','amplifier','instruments'];
  const handleClick = () => {
    display == 'show' ? setDisplay('hide') : setDisplay('show') ;
    list.length === 0 ? setList(myItems) : setList([]);
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
          <ul>
            <List items={list}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
