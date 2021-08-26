import React from 'react';
import './ShoppingList.css';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      // listing: displaying
    })
  }
  showlist(){
    
  }

  render() {
    return (
      <div>
        <div className='justify'>
          <div className='shop'>
            <div className='bton' onChange='showlist'>Showlist</div>
          </div>
        </div><br/>
        <div className='justify'>
          <div className='list'>
            <div className='listItem'>coffee</div>
            <div className='listItem'>snacks</div>
            <div className='listItem'>chicken</div>
            <div className='listItem'>onion</div>
            <div className='listItem'>masala</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
