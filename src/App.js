
import './App.css';
import React, { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use';
import rollSoundFile from '../src/Sound/roll.wav';
import holdSoundFile from '../src/Sound/hold.wav';
import winSoundFile from '../src/Sound/win.wav';
import diceImage from '../src/Sound/dice3.png';

const rollSound = new Audio(rollSoundFile);
const holdSound = new Audio(holdSoundFile);
const winSound = new Audio(winSoundFile);

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [rollCount, setRollCount] = useState(0);
    const { width, height } = useWindowSize();

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
            winSound.play();
        }
    }, [dice]);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        if (!tenzies) {
            rollSound.play();
            setDice(oldDice => oldDice.map(die => die.isHeld ? die : generateNewDie()));
            setRollCount(prevCount => prevCount + 1);
        } else {
            setTenzies(false);
            setDice(allNewDice());
            setRollCount(0);
        }
    }

    function holdDice(id) {
        holdSound.play();
        setDice(oldDice => oldDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die));
    }

    function startOver() {
        setTenzies(false);
        setDice(allNewDice());
        setRollCount(0);
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

    return (
        <main>
            {tenzies && <Confetti width={width} height={height} />}
            <div className="main-content">
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="roll-counter">Rolls: {rollCount}</div>
                {tenzies && <div className="win-note">You won in {rollCount} rolls!</div>}
                <div className="dice-and-image">
                    <div className="dice-container">
                        {diceElements}
                    </div>
                    <img src={diceImage} alt="funny dice" className="side-image" />
                </div>
                <div className="buttons-container">
                    <button className="button" onClick={rollDice}>
                        {tenzies ? "New Game" : "Roll"}
                    </button>
                    <button className="button" onClick={startOver}>
                        Start Over
                    </button>
                </div>
            </div>
        </main>
    );
}
