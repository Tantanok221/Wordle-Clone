import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner"
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const guessResultObj = [{
    guess: "",
    guessKey: crypto.randomUUID(),
    attempt: [{status: "none"},{status: "none"},{status: "none"},{status: "none"},{status: "none"},]
  },
  {
    guess: "",
    guessKey: crypto.randomUUID(),
    attempt: [{status: "none"},{status: "none"},{status: "none"},{status: "none"},{status: "none"},]
  },
  {
    guess: "",
    guessKey: crypto.randomUUID(),
    attempt: [{status: "none"},{status: "none"},{status: "none"},{status: "none"},{status: "none"},]
  },
  {
    guess: "",
    guessKey: crypto.randomUUID(),
    attempt: [{status: "none"},{status: "none"},{status: "none"},{status: "none"},{status: "none"},]
  },
  {
    guess: "",
    guessKey: crypto.randomUUID(),
    attempt: [{status: "none"},{status: "none"},{status: "none"},{status: "none"},{status: "none"},]
  },


]
  const [guess, setGuess] = React.useState("");
  const [guessResult, setGuessResult] = React.useState(guessResultObj);
  const [winLose,setWinLose] = React.useState("")
  console.log(guess)
  console.log(guessResult)
  
  return (
    <>
      {<GuessInput
        guess={guess}
        setGuess={setGuess}
        guessResult={guessResult}
        setGuessResult={setGuessResult}
        answer = {answer}
        setWinLose = {setWinLose}
        winLose = {winLose}
      />}
      
      < GuessResult guessResult={guessResult} />
      
      {winLose != "" && <Banner answer = {answer} winLose={winLose}/>}
    </>
  );
}

export default Game;
