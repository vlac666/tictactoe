import React from "react";
import './MoveHistory.css';
import {COL_COUNT} from './Board';

export function MoveHistory({ history, jumpTo, currentStep }) {
    const moves = history.map((step, stepNumber) => {
        const desc = stepNumber ? "Go to move #" + stepNumber : <b>Reset Game</b>;
        const row = Math.floor(step.clickIndex / COL_COUNT) + 1;
        const col = (step.clickIndex % COL_COUNT) + 1;
        const className = stepNumber === currentStep? "currentStep": "historyButton";
        return (<li key={stepNumber}>
            <button onClick={() => jumpTo(stepNumber)} className={className}> 
                {desc} {stepNumber > 0 && `(${row}, ${col})`}
            </button>
        </li>);
    });
    return <ol>{moves}</ol>;
}
