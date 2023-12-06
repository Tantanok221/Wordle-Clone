import React from "react";
import Guess from "../Guess";
function GuessResult({ guessResult }) {
  return (
    <div className="guess-results">
      {guessResult.map(({ guess, guessKey, attempt }, i) => {
        
        let words = guess.split("");
        
        
        if (words.length === 0) words = ["", "", "", "", ""];
        let state = attempt.map(val => val.status);
        
        let newkey = guessKey.split("-");
        
        return (
          <Guess iterate = {i} words={words} key={guessKey} keys={guessKey} newkey={newkey} state={state} />

          
        );
      })}
    </div>
  );
}

export default GuessResult;
