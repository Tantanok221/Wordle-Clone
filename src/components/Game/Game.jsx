import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner";
import GuessKeyboard from "../GuessKeyboard";
import { checkGuess } from "../../game-helpers.jsx"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const guessResultObj = [
    {
      guess: "",
      guessKey: crypto.randomUUID(),
      attempt: [
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
      ],
    },
    {
      guess: "",
      guessKey: crypto.randomUUID(),
      attempt: [
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
      ],
    },
    {
      guess: "",
      guessKey: crypto.randomUUID(),
      attempt: [
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
      ],
    },
    {
      guess: "",
      guessKey: crypto.randomUUID(),
      attempt: [
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
      ],
    },
    {
      guess: "",
      guessKey: crypto.randomUUID(),
      attempt: [
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
        { status: "none" },
      ],
    },
  ];
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const [globalIterate, setIterate] = React.useState(0);
  const [guess, setGuess] = React.useState("");
  const [guessResult, setGuessResult] = React.useState(guessResultObj);
  const [winLose, setWinLose] = React.useState("");
  const [keyboardState, setKeyboardState] = React.useState([])

  function typeKeyboard(event) {
    let word = event.key.toUpperCase()
    
    if(event.code[0] === "K" && guess.length < 5){
      let newGuess = guess + word
      
      setGuess(newGuess)
      
      }
    if(word === "BACKSPACE" && guess.length > 0){
      let newGuess = guess.substring(0, guess.length - 1)
      setGuess(newGuess)
      // Logic Edge Case: When can't delete the last letter in the guess container
      if(guess.length===1){
        let element = document.querySelector("span#a"+globalIterate+0)
        element.innerHTML = ""
        
      }
    }
    if(word === "ENTER" && guess.length === 5 && winLose === ""){
      let newGuessResult = [...guessResult]
      newGuessResult[globalIterate].guess = guess
      let newKeyboardState = [...keyboardState]
      let checkAnswer = checkGuess(guess, answer)
      let correctAnswer = 0
      checkAnswer.forEach((value, i) => {
        console.log(value)
        if(value.status === "correct"){
          correctAnswer++
        }
        newKeyboardState.push(value)
      })
      newGuessResult[globalIterate].guess.split("").forEach((letter, i) => {
        newGuessResult[globalIterate].attempt[i].status = checkAnswer[i].status
      })
      setKeyboardState(newKeyboardState)
      
      if(correctAnswer === 5){
        setWinLose("happy")
        
      }
      if(globalIterate === 4 && correctAnswer != 5){
        setWinLose("sad")
        
      }
      if(globalIterate < 4){
        setGuess("")
        setIterate(globalIterate + 1);
      }
      
      
    }
  }
  
  React.useEffect(() => {
    window.addEventListener("keydown",typeKeyboard )
    return () => {
      window.removeEventListener("keydown", typeKeyboard)
    }
  }, [guess])
  // Render the text input at guess result components.
  if(winLose === "" && guess.length != 0){
    let guesses = guess.split("")
    while(guesses.length < 5){
      guesses.push("")
    }  
    guesses.forEach((value, i) => {
      
      let element = document.querySelector("span#a"+globalIterate+String(i))
      element.innerHTML = value
    }) 
  }
  

  // Change keyboard color to individual status
  keyboardState.forEach(( value , i) => {
    console.log(value)
    let element = document.querySelector("#keyboard"+value.letter)
    element.classList.add(value.status)
  })

  return (
    <>
      
      
      <GuessResult guessResult={guessResult} />
      <GuessKeyboard keyboard={keyboard} keyboardState={keyboardState}/>
      {winLose != "" && <Banner answer={answer} winLose={winLose} globalIterate={globalIterate} />}
    </>
  );
}

export default Game;
