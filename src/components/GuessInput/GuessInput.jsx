import React from "react";
import { checkGuess } from "../../game-helpers.jsx"
import { check } from "prettier";

function GuessInput({ guess, setGuess, guessResult, setGuessResult, answer,setWinLose, winLose }) {
  const [iterate,setIterate] = React.useState(0)
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        
        if (guess.length === 5 && iterate < 5) {
          let newResult = [... guessResult]
          let checkAnswer = checkGuess(guess,answer)
          newResult[iterate].guess = guess
          newResult[iterate].attempt = checkAnswer
          setGuessResult(newResult)
          let nextIterate = iterate + 1
          
          setIterate(nextIterate)
          
          setGuess("");
          if(answer == guess) setWinLose("happy")
        }
        if(iterate == 4) {
          setWinLose("sad")
          document.querySelector("#guess-input").setAttribute("disabled", "") 
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          let nextWord = event.target.value.toUpperCase();
          if (nextWord.length < 6) {
            setGuess(nextWord);
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
