import React from 'react';
import './App.css';
import Counter from './Counter.js';
import TicTacToe from './TicTacToe.js';
import ShoppingList from './ShoppingList.js'

function App() {
  return (
    <div>
      <Counter /> <br/>
      <ShoppingList /> <br/>
      <TicTacToe />
    </div>
  );
}

export default App;
