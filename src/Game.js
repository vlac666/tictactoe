import React from "react";
import { Board } from "./Board";
import { MoveHistory } from "./MoveHistory";
import "./Game.css";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    const [winner] = calculateWinner(current.squares);
    if (winner || current.squares[i]) {
      return;
    }

    const squares = current.squares.slice();
    squares[i] = whosTurn(this.state.stepNumber);
    this.setState({
      history: history.concat([
        {
          squares: squares,
          clickIndex: i,
        },
      ]),
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({ stepNumber: step });
  }

  render() {
    console.log("game.render()");
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const [winner, winningLine] = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.stepNumber === 9) {
      status = "*** DRAW ***";
    } else {
      status = "Next player: " + whosTurn(this.state.stepNumber);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winningLine={winningLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <MoveHistory
            history={history}
            jumpTo={(stepNumber) => this.jumpTo(stepNumber)}
            currentStep={this.state.stepNumber}
          />
        </div>
      </div>
    );
  }
}

function whosTurn(stepNumber) {
  return stepNumber % 2 === 0 ? "X" : "O";
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return [null, []];
}
