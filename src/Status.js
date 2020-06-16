import React from "react";

export function Status({ winningPlayer,  isDraw, nextPlayer }) {
  let status;
  if (winningPlayer) {
    status = "Winner: " + winningPlayer;
  } else if (isDraw) {
    status = "*** DRAW ***";
  } else {
    status = "Next player: " + nextPlayer;
  }
  return <>{status}</>;
}
