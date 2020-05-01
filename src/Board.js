import React from "react";
import { Square } from "./Square";

export const ROW_COUNT = 3;
export const COL_COUNT = 3;

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
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
      rows.push(<div className="board-row">{this.renderCols(r)}</div>);
    }
    return rows;
  }

  render() {
    return <div>{this.renderRows()}</div>;
  }
}
