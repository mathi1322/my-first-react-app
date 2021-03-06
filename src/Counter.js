import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(1);
  const increaseCount = () => setCount(prevCount => prevCount + parseInt(change) );
  const decreaseCount = () => {
    //debugger; 
    if (count >= 0 && (count - change) >= 0) {
      setCount(prevCount => prevCount - parseInt(change));
    }
    else setCount(0);
  }
  const resetCount = () => setCount(0);
  const handleChange = (e) =>{
    setChange(e.target.value)
  }
  return (
    <div className="counter">
      <h1> Click Count: {count}</h1>
      <button className='btn' onClick={increaseCount} >Increase</button>
      <button className='btn' onClick={decreaseCount} >Decrease</button>
      <button className='btn' onClick={resetCount} >Reset</button><br /><br/>
      Change by:
      <input className='btn' onChange={handleChange} type="number" min="1" max="5" step="1"></input>
    </div>
  );
}

export default Counter;
