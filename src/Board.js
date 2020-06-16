import React from "react";
import { Square } from "./Square";
import "./Board.css";

export function Board({ squares, winningLine, onClick, rowCount, colCount }) {
  return <div className="board-grid">{renderSquares()}</div>;

  function renderSquares() {
    const cells = [];
    const cellCount = rowCount * colCount;
    for (let i = 0; i < cellCount; i++) {
      cells.push(
        <Square
          key={"sqaure" + i}
          isWinningLine={winningLine.includes(i)}
          value={squares[i]}
          onClick={() => onClick(i)}
        />
      );
    }
    return cells;
  }
}