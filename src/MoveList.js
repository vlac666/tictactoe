import React from "react";
import styling from "./MoveList.module.css";
import { whosTurn } from "./Game";

export function MoveList({
  history,
  jumpTo,
  currentStep,
  ascending = true,
  colCount,
}) {
  const [, ...actualMoves] = history; //trim off initial state

  const moves = actualMoves.map((step, index) => {
    const stepNumber = index + 1; //becasue we trimmed out step 0
    const row = Math.floor(step.clickIndex / colCount) + 1;
    const col = (step.clickIndex % colCount) + 1;
    const style = stepNumber === currentStep ? styling.currentStep : styling.historyButton;

    return (
      <li key={stepNumber}>
        <button
          onClick={() => jumpTo(stepNumber)}
          className={style}
        >
          {whosTurn(index)} ({row}, {col})
        </button>
      </li>
    );
  });

  if (!ascending) {
    moves.reverse();
  }

  return <ol reversed={!ascending}>{moves}</ol>;
}
