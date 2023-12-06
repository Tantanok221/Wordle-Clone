import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner";
import GuessKeyboard from "../GuessKeyboard";
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

      <GuessResult guessResult={guessResult} />
      <GuessKeyboard keyboard={keyboard}/>
      {winLose != "" && <Banner answer={answer} winLose={winLose} />}
    </>
  );
}

export default Game;
