import React from "react";
import { Square } from "./Square";
import "./Board.css";

export const ROW_COUNT = 3;
export const COL_COUNT = 3;

export class xxxBoard extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={"sqaure" + i}
        isWinningLine={this.props.winningLine.includes(i)}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderCols(rowNumber) {
    const cols = [];
    for (let c = 0; c < COL_COUNT; c++) {
      cols.push(this.renderSquare(rowNumber * COL_COUNT + c));
    }
    return cols;
  }

  renderRows() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
      rows.push(
        <div key={"row" + r} className="board-row">
          {this.renderCols(r)}
        </div>
      );
    }
    return rows;
  }

  render() {
    return <div>{this.renderRows()}</div>;
  }
}

export function Board({ squares, winningLine, onClick }) {
  return <div>{renderRows()}</div>;

  function renderRows() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
      rows.push(
        <div key={"row" + r} className="board-row">
          {renderCols(r)}
        </div>
      );
    }
    return rows;
  }

  function renderCols(rowNumber) {
    const cols = [];
    for (let c = 0; c < COL_COUNT; c++) {
      cols.push(renderSquare(rowNumber * COL_COUNT + c));
    }
    return cols;
  }

  function renderSquare(i) {
    return (
      <Square
        key={"sqaure" + i}
        isWinningLine={winningLine.includes(i)}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }
}
