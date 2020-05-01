import React from "react";

export function Square({ value, onClick, isWinningLine }) {
  const className = "square" + (isWinningLine? " winSquare" : "");
  return (
    <button className={className}  onClick={onClick}>
      {value}
    </button>
  );
}
