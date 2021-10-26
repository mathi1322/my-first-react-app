import React, { useState, useEffect} from 'react';
import reactDom from 'react-dom';
import './ShoppingList.css';

const myItems = ['laptop', 'speakers', 'mic', 'amplifier', 'instruments'];
const List = props => {
  return props.items.map((item) => {
    return (
      <div className='shop-item' onClick={() => props.clickItem(item)}>
        {item}
      </div>
    );
  });
};

function ShoppingList() {
  const [itemsVisibility, setItemsVisibility] = useState(false);
  const [item, setItem] = useState('');
  const availableItems = itemsVisibility ? "hide-list" : "show-list";
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.className !== 'shop-item' && e.target.className !== 'input-field'){
        setItemsVisibility(false);
      }
    })
  }, [])
  const handleChange = () => {
    setItemsVisibility(true)
  };
  return (
    <div className='justify'>
      <div>
        <input
          className='input-field'
          value={item}
          placeholder="Enter Items"
          onFocus={handleChange}
        />
        <div className={availableItems}>
          <List items={myItems} clickItem={(item) => { 
            setItem(item);
            setItemsVisibility();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
