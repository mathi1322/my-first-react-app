import React, { useState } from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

const List = props => {
  return props.items.map((item) => {
    return <div className={props.className}  >{item}</div>
  });
};

function ShoppingList() {
  const [display, setDisplay] = useState('show');
  const [list, setList] = useState([]);
  const style = {
    fontSize: '25px'
  };
  const myItems = ['laptop', 'speakers', 'mic', 'amplifier', 'instruments'];
  const handleClick = () => {
    display == 'show' ? setDisplay('hide') : setDisplay('show');
    list.length === 0 ? setList(myItems) : setList([]);

  }
  const classStr = display === "show" ? "showbtn" : "hidebtn";
  const btn = display === "show" ? " " : "list"
  return (
    <div className='justify'>
      <div>
        <button
          className={classStr}
          style={style}
          onClick={handleClick}
        >
          {display}
        </button>
        <div className={btn}>
          <List className='shopitem' items={list} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
