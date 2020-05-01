import React from "react";
export function MoveHistory({ history, jumpTo }) {
    const moves = history.map((step, stepNumber) => {
        const desc = stepNumber ? "Go to move #" + stepNumber : <b>Reset Game</b>;
        const row = Math.floor(step.clickIndex / 3) + 1;
        const col = (step.clickIndex % 3) + 1;
        return (<li key={stepNumber}>
            <button onClick={() => jumpTo(stepNumber)}>
                {desc} {stepNumber > 0 && `(${row}, ${col})`}
            </button>
        </li>);
    });
    return <ol>{moves}</ol>;
}
