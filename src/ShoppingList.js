import React, { useState } from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

const colorMap = {
  black: 'red',
  red:'green',
  green:'black'
};

function ShoppingList() {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('');
  const style = {
    color,
    fontSize: '100px'
  };
  const handleClick = () => {
    const newColor = colorMap[color];
    const newMessage = newColor == 'black' ? '' : `I'm ${newColor}`; 
    setColor(newColor);
    setMessage(newMessage);
  }
  return (
    <div className='justify'>
      <button
        style = {style} 
        onClick = {handleClick}
      > 
        Hi!
      </button>
      <span>{message}</span>
    </div>
  );
}

export default ShoppingList;
