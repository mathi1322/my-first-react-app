import React from 'react';
import './TicTacToe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["", "", "", "", "", "", "", "", ""],
      player: 'x'
    };
    this.updateData = this.updateData.bind(this);
    this.finishing = this.finishing.bind(this);
  }
  updateData(position) {
    const { data, player } = this.state;
    if(data[position] ==='x' ||
    data[position] === 'o'){
      return;
    }
    const setData = data;
    const setPlayer = player === "x" ? "o" : "x";
    setData[position] = player;
    this.setState(
      {
        data: setData,
        player: setPlayer
      }
    );  
    
  }
  finishing(){
    
    const { data } = this.state;
    if(data[0] === 'x' && data[0] === data[1] && data[0] === data[2]){
      return 'X win'
    }

  }
  render() {
    return (
      <div className='justify'>
        <div className="outline-board">
          <div className='row'>
            <div className='box' onClick={() => this.updateData(0)}>{this.state.data[0]}</div>
            <div className='box' onClick={() => this.updateData(1)}>{this.state.data[1]}</div>
            <div className='box' onClick={() => this.updateData(2)}>{this.state.data[2]}</div>
          </div>
          <div className='row'>
            <div className='box' onClick={() => this.updateData(3)}>{this.state.data[3]}</div>
            <div className='box' onClick={() => this.updateData(4)}>{this.state.data[4]}</div>
            <div className='box' onClick={() => this.updateData(5)}>{this.state.data[5]}</div>
          </div>
          <div className='row'>
            <div className='box' onClick={() => this.updateData(6)}>{this.state.data[6]}</div>
            <div className='box' onClick={() => this.updateData(7)}>{this.state.data[7]}</div>
            <div className='box' onClick={() => this.updateData(8)}>{this.state.data[8]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;