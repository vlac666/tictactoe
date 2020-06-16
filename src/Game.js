import "./Game.css";
import React, { useState } from "react";
import { Board } from "./Board";
import { MoveList } from "./MoveList";
import { Status } from "./Status";
import { Toggle } from "./Toggle";

const initHistory = [{ squares: Array(9).fill(null) }];

export const Gayme = "Gayme";

export default function Game() {
  const [history, setHistory] = useState(initHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const [historySequenceToggle, setHistorySequenceToggle] = useState(true);
  const current = history[stepNumber];
  const [winner, winningLine] = calculateWinner(current.squares);
  const rowCount = 3;
  const colCount = 3;

  return (
    <React.Fragment>
      <div className="game">
        <div className="game-controls">
          <div className="statusMsg">
            <Status
              winningPlayer={winner}
              isDraw={stepNumber >= rowCount * colCount}
              nextPlayer={whosTurn(stepNumber)}
            />
          </div>
          <button onClick={() => jumpTo(0)} className="resetButton">
            Reset Game
          </button>
        </div>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            winningLine={winningLine}
            rowCount={rowCount}
            colCount={colCount}
          />
        </div>
        <div className="game-info">
          <Toggle
            onText="Ascending"
            offText="Descending"
            togglePosition={historySequenceToggle}
            onChange={(toggle) => setHistorySequenceToggle(toggle)}
          />
          <h3>Moves</h3>
          <MoveList
            history={history}
            jumpTo={(stepNumber) => jumpTo(stepNumber)}
            currentStep={stepNumber}
            ascending={historySequenceToggle}
            colCount={colCount}
          />
        </div>
      </div>
    </React.Fragment>
  );

  function handleClick(i) {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length - 1];
    const [winner] = calculateWinner(current.squares);

    if (winner || current.squares[i]) {
      return;
    }

    const squares = current.squares.slice();
    squares[i] = whosTurn(stepNumber);
    const newHIstory = currentHistory.concat([
      {
        squares: squares,
        clickIndex: i,
      },
    ]);

    setHistory(newHIstory);
    setStepNumber(currentHistory.length);
  }

  function jumpTo(step) {
    setStepNumber(step);
  }
}

export function whosTurn(stepNumber) {
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
