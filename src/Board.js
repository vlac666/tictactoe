import React from "react";
import { Square } from "./Square";

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
    for (let c = 0; c < 3; c++) {
      cols.push(this.renderSquare(rowNumber * 3 + c));
    }
    return cols;
  }

  renderRows() {
    const rows = [];
    for (let r = 0; r < 3; r++) {
      rows.push(<div className="board-row">{this.renderCols(r)}</div>);
    }
    return rows;
  }

  render() {
    return <div>{this.renderRows()}</div>;
  }
}
