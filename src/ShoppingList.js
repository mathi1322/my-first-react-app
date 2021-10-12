import React, { useState } from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

const List = props => {
  return props.items.map((item) => {
    return (
      <div className = {props.className}>
      <div className = 'shop-item'> {item} </div>
      </div>
    );
  });
};

function ShoppingList() {
  const [display, setDisplay] = useState(true);
  const myItems = ['laptop', 'speakers', 'mic', 'amplifier', 'instruments'];
  const handleClick = () => {
    display ? setDisplay(false) : setDisplay(true);
  }
  const buttonClass = display ? "show-button" : "hide-button";
  const buttonText = display ? "show" : "hide";
  const list = display ? "show-list" : "hide-list";
  return (
    <div className = 'justify'>
      <div>
        <button
          className = {buttonClass}
          onClick = {handleClick}
        >
          {buttonText}
        </button>
        <div>
          <List className = {list} items = {myItems}/>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
