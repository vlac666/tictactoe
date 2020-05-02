import React from "react";
import { ROW_COUNT, COL_COUNT } from "./Board";
import { whosTurn } from "./Game";
export function Status({ winner, stepNumber }) {
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else if (stepNumber === (ROW_COUNT * COL_COUNT)) {
        status = "*** DRAW ***";
    }
    else {
        status = "Next player: " + whosTurn(stepNumber);
    }
    return <div>{status}</div>;
}
