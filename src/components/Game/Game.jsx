import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner";
import GuessKeyboard from "../GuessKeyboard";
import { checkGuess } from "../../game-helpers.jsx"
import ShowGuess from "../ShowGuess"
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


  function typeKeyboard(event) {
    let word = event.key.toUpperCase()
    
    if(event.code[0] === "K" && guess.length < 5){
      let newGuess = guess + word
      
      setGuess(newGuess)
      
      }
    if(word === "BACKSPACE" && guess.length > 0){
      let newGuess = guess.substring(0, guess.length - 1)
      setGuess(newGuess)
    }
    if(word === "ENTER" && guess.length === 5){
      let newGuessResult = [...guessResult]
      newGuessResult[globalIterate].guess = guess
      
      newGuessResult[globalIterate].guess.split("").forEach((letter, i) => {
        
        let checkAnswer = checkGuess(letter, answer)
        
        newGuessResult[globalIterate].attempt[i].status = checkAnswer[0].status
      })
      
      setIterate(globalIterate + 1);
    }
  }
  React.useEffect(() => {
    window.addEventListener("keydown",typeKeyboard )
    return () => {
      window.removeEventListener("keydown", typeKeyboard)
    }
  }, [guess])
  

  
  console.log(guessResult);
  

  return (
    <>
      
      {/* {
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          guessResult={guessResult}
          setGuessResult={setGuessResult}
          answer={answer}
          setWinLose={setWinLose}
          winLose={winLose}
        />
      } */}
      <ShowGuess className="ShowGuess" guess={guess} globalIterate={globalIterate}/>
      <GuessResult guessResult={guessResult} />
      <GuessKeyboard keyboard={keyboard}/>
      {winLose != "" && <Banner answer={answer} winLose={winLose} />}
    </>
  );
}

export default Game;
