import React from 'react';
import Square from './Square';

class Board extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(64).fill(null),
        positions: []        
      };
    }

    findPositionsById(id) {
      fetch('http://localhost:3000/chess/' + id)
      .then(res => res.json())
      .then((data) => {
        this.setState({ positions: data })
        this.setPositionsInSquares();    
      })
      .catch(console.log)
    }

    setPositionsInSquares() {
      const squares = this.state.squares.slice();
      for (let i = 0; i < this.state.positions.length; i++) {
        let position = this.state.positions[i];          
        squares[position] = position;
        console.log ('squares[position] ' + squares[position]);
      }
      this.setState({squares: squares});      
    }
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = i;
      this.setState({squares: squares});
      this.findPositionsById(i);      
      //this.changeCellColor(i);      
    }

    changeCellColor(id) {
      this.changeCellDefaultColor();
      setTimeout(function() {
          document.getElementById(id).style.backgroundColor = "yellow";
      }, 2000);            
    }
    
    changeCellDefaultColor () {
      let cellArr = document.getElementsByTagName("td");
      for (let i = 0; i < cellArr.length; i++) {
        let cell = cellArr[i];
        cell.style.backgroundColor = "white";
      }
    }
  
    render() {
      //const status = 'Next player: X';
  
      return (
        <div className="center-div">
          <table>
            <thead></thead>
            <tbody>              
              <tr className="board-row">
                {this.renderSquare('A1')}
                {this.renderSquare('B1')}
                {this.renderSquare('C1')}
                {this.renderSquare('D1')}
                {this.renderSquare('E1')}
                {this.renderSquare('F1')}
                {this.renderSquare('G1')}
                {this.renderSquare('H1')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A2')}
                {this.renderSquare('B2')}
                {this.renderSquare('C2')}
                {this.renderSquare('D2')}
                {this.renderSquare('E2')}
                {this.renderSquare('F2')}
                {this.renderSquare('G2')}
                {this.renderSquare('H2')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A3')}
                {this.renderSquare('B3')}
                {this.renderSquare('C3')}
                {this.renderSquare('D3')}
                {this.renderSquare('E3')}
                {this.renderSquare('F3')}
                {this.renderSquare('G3')}
                {this.renderSquare('H3')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A4')}
                {this.renderSquare('B4')}
                {this.renderSquare('C4')}
                {this.renderSquare('D4')}
                {this.renderSquare('E4')}
                {this.renderSquare('F4')}
                {this.renderSquare('G4')}
                {this.renderSquare('H4')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A5')}
                {this.renderSquare('B5')}
                {this.renderSquare('C5')}
                {this.renderSquare('D5')}
                {this.renderSquare('E5')}
                {this.renderSquare('F5')}
                {this.renderSquare('G5')}
                {this.renderSquare('H5')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A6')}
                {this.renderSquare('B6')}
                {this.renderSquare('C6')}
                {this.renderSquare('D6')}
                {this.renderSquare('E6')}
                {this.renderSquare('F6')}
                {this.renderSquare('G6')}
                {this.renderSquare('H6')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A7')}
                {this.renderSquare('B7')}
                {this.renderSquare('C7')}
                {this.renderSquare('D7')}
                {this.renderSquare('E7')}
                {this.renderSquare('F7')}
                {this.renderSquare('G7')}
                {this.renderSquare('H7')}
              </tr>
              <tr className="board-row">
                {this.renderSquare('A8')}
                {this.renderSquare('B8')}
                {this.renderSquare('C8')}
                {this.renderSquare('D8')}
                {this.renderSquare('E8')}
                {this.renderSquare('F8')}
                {this.renderSquare('G8')}
                {this.renderSquare('H8')}
              </tr>
            </tbody>
          </table>
        </div>
        
      );
    }

}

export default Board;