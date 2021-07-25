import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }
  const resetCount = () => setCount(0);
  return (
    <div className="App">
      <h1> Click Count: {count}</h1>
      <button onClick={increaseCount}> Increase </button>
      <button onClick={decreaseCount}> Decrease </button>
      <button onClick={resetCount}> Reset </button>
    </div>
  );
}

export default App;
