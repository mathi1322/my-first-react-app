import React from 'react';
import './TicTacToe.css';

const getInitialState = () => {
  return {
    data: ["", "", "", "", "", "", "", "", ""],
    player: 'x'
  };
};
class TicTacToe extends React.Component {
  constructor(props) { // props: {color: "red"}
    super(props);
    this.state = getInitialState();
    this.reset = this.reset.bind(this);
    this.updateData = this.updateData.bind(this);
    this.finishing = this.finishing.bind(this);
  }
  reset(){
    this.setState(getInitialState());
  }
  updateData(position) {
    const { data, player } = this.state;
    if(data[position] ==='x' || data[position] === 'o') {
      return;
    }
    const setData = data;
    const setPlayer = player === "x" ? "o" : "x";
    setData[position] = player;
    this.setState(
      {
        data: setData,
        player: setPlayer
      },
      this.finishing
    );
  }
  finishing(){
    const { data } = this.state;
    const winPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const win = winPositions.find(x => {
      return(  
        data[x[0]] === data[x[1]] &&
        data[x[1]] === data[x[2]]
      );
    });
    debugger;
    if (win) {
      const setWinner = data[win[0]];
      this.setState( {
        winner: setWinner
      });
    }
  }
  render() {
    return (
      <div>
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
        </div><br/>
        <div className='display'>Winner is:
          <span className='big'><b>{this.state.winner}</b></span><br/>
          <button onClick={() => {this.reset()}}>Reset</button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;