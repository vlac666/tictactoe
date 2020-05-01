import React, { useState } from "react";
import "./MoveHistory.css";
import { COL_COUNT } from "./Board";

const ASC = true;

export function MoveHistory({ history, jumpTo, currentStep }) {
  const [direction, setDirection] = useState(ASC);
  const [ /*ignore initial step */, ...actualMoves] = history;

  const moves = actualMoves.map((step, index) => {
    //const desc = stepNumber ? "Go to move #" + stepNumber : <b>Reset Game</b>;
    const stepNumber = index + 1; //becasue we trimmed out step 0
    const desc = "Go to move #" + stepNumber;
    const row = Math.floor(step.clickIndex / COL_COUNT) + 1;
    const col = (step.clickIndex % COL_COUNT) + 1;
    const className =
      stepNumber === currentStep ? "currentStep" : "historyButton";
    return (
      <li key={stepNumber}>
        <button onClick={() => jumpTo(stepNumber)} className={className}>
          {desc} {stepNumber > 0 && `(${row}, ${col})`}
        </button>
      </li>
    );
  });

  if (direction != ASC) {
    moves.reverse();
  }

  return (
    <>
      <button onClick={() => jumpTo(0)}>Reset Game</button>
      <button onClick={() => setDirection(!direction)}>
        {direction === ASC ? "Descending" : "Ascending"}
      </button>
      <ul>{moves}</ul>
    </>
  );
}
