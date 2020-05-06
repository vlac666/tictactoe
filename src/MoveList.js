import React from "react";
import "./MoveList.css";
import { COL_COUNT } from "./Board";
import { whosTurn } from "./Game";

export function MoveList({ history, jumpTo, currentStep, ascending = true }) {
  const [, ...actualMoves] = history; //trim off initial state

  const moves = actualMoves.map((step, index) => {
    const stepNumber = index + 1; //becasue we trimmed out step 0
    const row = Math.floor(step.clickIndex / COL_COUNT) + 1;
    const col = (step.clickIndex % COL_COUNT) + 1;
    const style = stepNumber === currentStep ? "currentStep" : "historyButton";

    return (
      <li key={stepNumber}>
        <button onClick={() => jumpTo(stepNumber)} className={style}>
          #{stepNumber} {whosTurn(index)} ({row}, {col})
        </button>
      </li>
    );
  });

  if (!ascending) {
    moves.reverse();
  }

  return <ul>{moves}</ul>;
}
