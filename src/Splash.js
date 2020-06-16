import React, { useState, Suspense } from "react";
import { Toggle } from "./Toggle";

const GameModule = React.lazy(() => import('./Game'));

function logger(msg) {
    console.log(`${new Date()}: ${msg}`);
}

function sleep(ms) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve("tick"), ms); 
        setTimeout(() => reject("FAIL"), ms);
    });
}

async function jabber() {
    logger("\tJabber - sleeps");
    const result = await sleep(5000);
    logger("\tJabber - wakes: " + result);
}

export default function Spalsh() {
    const [showGame, setShowGame] = useState(false);
    const style = { backgroundColor: "blue" };

    logger("Splash - jabber()");
    jabber();
    logger("Splash - jabber() - done");

    return (
        <React.Fragment>
            <h1>Splash is working</h1>
            <div style={style}>
                <Toggle name="gameToggle" togglePosition={showGame} onChange={setShowGame}></Toggle>
            </div>
            {showGame &&
                <Suspense fallback={<div>Loading Tic-Tac-Toe...</div>}>
                    <GameModule></GameModule>
                </Suspense>
            }
        </React.Fragment>
    );
}