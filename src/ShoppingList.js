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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(myItems);
  const availableItems = itemsVisibility ? "hide-list" : "show-list";
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const focusChange = () => {
    setItemsVisibility(true)
  };
  
  const clickHandler = (e) => {
      if (e.target.className !== 'shop-item' && e.target.className !== 'input-field'){
        setItemsVisibility(false);
      }
    }
  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return ()=>{
      document.removeEventListener('click', clickHandler);
    }
  }, [])
  
  useEffect(() => {
    const results = myItems.filter(item =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  
  return (
    <div className='justify'>
      <div>
        <input
          className='input-field'
          value={searchTerm}
          placeholder="Enter Items"
          onFocus={focusChange}
          onChange={handleChange}
        />
        <div className={availableItems}>
          <List items={searchResults} clickItem={(item) => { 
            setSearchTerm(item);
            setItemsVisibility();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
