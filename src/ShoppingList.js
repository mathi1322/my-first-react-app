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
  const handleChange = () => {
    setDisplay(false)
  };
  const offChange = () => {
    setDisplay(true)
  };
  const list = display ? "show-list" : "hide-list";
  return (
    <div className = 'justify'>
      <div>
        <input
          placeholder = "Enter Items"
          onFocus = {handleChange}
          onBlur = {offChange}
        />
        <div>
          <List className = {list} items = {myItems}/>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
