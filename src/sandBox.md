
// import './App.css';
// import React from "react"
// import Die from "./Die"
// import { nanoid } from "nanoid"
// import Confetti from "react-confetti"

// /**
//  * Challenge:
//  * 
//  * - Create a Die component that takes a `value` prop
//  * - Render 10 instances of the Die component (manually)
//  *      - Provide a number between 1-6 for the value on each
//  *        for now
//  * - Style the <main> and <Die> components 
//  *   to look like they do in the slide
//  *      - Hints: Create a container to hold the 10 instances
//  *        of the Die component, and use CSS Grid to lay them
//  *        out evenly in 2 rows of 5 columns
//  *      - Use flexbox on main to center the dice container
//  *        in the center of the page
//  */

// /**
//  * Challenge:
//  * 
//  * Write a function (allNewDice) that returns an array 
//  * of 10 random numbers between 1-6 inclusive.
//  * 
//  * Log the array of numbers to the console for now
//  */

// /**
//  * Challenge:
//  * 
//  * Create state to hold our array of numbers. (Initialize
//  * the state by calling our `allNewDice` function so it 
//  * loads all new dice as soon as the app loads)
//  * 
//  * Map over the state numbers array to generate our array
//  * of Die elements and render those in place of our
//  * manually-written 10 Die elements.
//  */


// /**
//  * Challenge: Create a `Roll Dice` button that will re-roll
//  * all 10 dice
//  * 
//  * Clicking the button should generate a new array of numbers
//  * and set the `dice` state to that new array (thus re-rendering
//  * the array to the page)
//  */

// /**
// * Challenge: Update the array of numbers in state to be
// * an array of objects instead. Each object should look like:
// * { value: <random number>, isHeld: false }
// * 
// * Making this change will break parts of our code, so make
// * sure to update things so we're back to a working state
// */
// /**
//  * Challenge: Add conditional styling to the Die component
//  * so that if it's held (isHeld === true), its background color
//  * changes to a light green (#59E391)
//  * 
//  * Remember: currently the Die component has no way of knowing
//  * if it's "held" or not.
//  */
// /**
// * Challenge: Create a function `holdDice` that takes
// * `id` as a parameter. For now, just have the function
// * console.log(id).
// * 
// * Then, figure out how to pass that function down to each
// * instance of the Die component so when each one is clicked,
// * it logs its own unique ID property. (Hint: there's more
// * than one way to make that work, so just choose whichever
// * you want)
// * 
// */
// /**
// * Challenge: Update the `holdDice` function to flip
// * the `isHeld` property on the object in the array
// * that was clicked, based on the `id` prop passed
// * into the function.
// * 
// * Hint: as usual, there's > 1 way to accomplish this.
// * I'll be using `dice.map()` and checking for the `id`
// * of the die to determine which one to flip `isHeld` on,
// * but you can do whichever way makes the most sense to you.
// */

// /**
//  * Challenge: Check the dice array for these winning conditions:
//  * 1. All dice are held, and
//  * 2. all dice have the same value
//  * 
//  * If both conditions are true, set `tenzies` to true and log
//  * "You won!" to the console
//  */


// export default function App() {

//     const [dice, setDice] = React.useState(allNewDice())
//     const [tenzies, setTenzies] = React.useState(false)

//     React.useEffect(() => {
//         const allHeld = dice.every(die => die.isHeld)
//         const firstValue = dice[0].value
//         const allSameValue = dice.every(die => die.value === firstValue)
//         if (allHeld && allSameValue) {
//             setTenzies(true)
//         }
//     }, [dice])

//     function generateNewDie() {
//         return {
//             value: Math.ceil(Math.random() * 6),
//             isHeld: false,
//             id: nanoid()
//         }
//     }

//     function allNewDice() {
//         const newDice = []
//         for (let i = 0; i < 10; i++) {
//             newDice.push(generateNewDie())
//         }
//         return newDice
//     }

//     function rollDice() {
//         if (!tenzies) {
//             setDice(oldDice => oldDice.map(die => {
//                 return die.isHeld ?
//                     die :
//                     generateNewDie()
//             }))
//         } else {
//             setTenzies(false)
//             setDice(allNewDice())
//         }
//     }

//     function holdDice(id) {
//         setDice(oldDice => oldDice.map(die => {
//             return die.id === id ?
//                 { ...die, isHeld: !die.isHeld } :
//                 die
//         }))
//     }

//     const diceElements = dice.map(die => (
//         <Die
//             key={die.id}
//             value={die.value}
//             isHeld={die.isHeld}
//             holdDice={() => holdDice(die.id)}
//         />
//     ))

//     return (
//         <main>
//             {tenzies && <Confetti />}
//             <h1 className="title">Tenzies</h1>
//             <p className="instructions">Roll until all dice are the same.
//                 Click each die to freeze it at its current value between rolls.</p>
//             <div className="dice-container">
//                 {diceElements}
//             </div>
//             <button
//                 className="roll-dice"
//                 onClick={rollDice}
//             >
//                 {tenzies ? "New Game" : "Roll"}
//             </button>
//         </main>
//     )
// }


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */


/* * {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #0B2434;
  padding: 20px;
  font-family: 'Karla', sans-serif;
}

main {
  background-color: #F5F5F5;
  height: 400px;
  max-width: 800px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.title {
  font-size: 40px;
  margin: 0;
}

.instructions {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  margin-top: 0;
  text-align: center;
}

.dice-container {
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.die-face {
  height: 50px;
  width: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.die-num {
  font-size: 2rem;
}

.roll-dice {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 6px;
  background-color: #5035FF;
  color: white;
  font-size: 1.2rem;
  font-family: 'Karla', sans-serif;
  cursor: pointer;
}

.roll-dice:focus {
  outline: none;
}

.roll-dice:active {
  box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
} */

//


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #141414; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Karla', sans-serif;
}

main {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

main:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: - 60px; */
}

.title {
  font-size: 40px;
  margin: 0;
  color: #e50914; 
  text-transform: uppercase;
}

.instructions {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  /* margin-top: 10px; */
  text-align: center;
  /* color: #141414;
  background-color: #f9f9f9; */
  padding: 10px;
  /* border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.roll-counter {
  font-size: 1.5rem;
  color: #e50914; 
  margin: 20px 0;
}

.win-note {
  font-size: 1.2rem;
  color: #1ce783; 
  color: #08529b; 
  margin: 20px 0;
}

.dice-container {
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
  margin: 40px 0;
  margin-left: 3rem;
}

.die-face {
  height: 60px;
  width: 60px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.die-face:hover {
  transform: scale(1.1);
}

.die-num {
  font-size: 2rem;
  color: #333;
}

.buttons-container {
  display: flex;
  gap: 20px;
}

.button {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 6px;
  background-color: #1ce783; 
  color: white;
  font-size: 1.2rem;
  font-family: 'Karla', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  margin-left: 2rem;
}

.button:hover {
  background-color: #15b66d; 
  transform: translateY(-2px);
}

.button:focus {
  outline: none;
}

.button:active {
  box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
}

.side-image {
  max-width: 150px;
  height: auto;
  /* border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s; */
  /* margin-left: -80px; */
}

.side-image:hover {
  transform: scale(1.05);
}


/* Styles for larger screens */
@media (min-width: 768px) {
  .side-image {
    max-width: 150px; 
    margin-left: -90px; 
  }
}

/* Styles for medium screens */
@media (min-width: 480px) and (max-width: 767px) {
  .side-image {
    max-width: 120px; 
    margin-left: -20px;
  }
}

/* Styles for small screens */
@media (max-width: 479px) {
  .side-image {
    max-width: 100px;
    margin-left: 0;
  }
}

.side-image:hover {
  transform: scale(1.05);
}
