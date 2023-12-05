import React from "react";
import Guess from "../Guess";
function GuessResult({ guessResult }) {
  return (
    <div className="guess-results">
      {guessResult.map(({ guess, guessKey, attempt }, i) => {
        // if (i == 0) continue
        let words = guess.split("");
        // console.log(words)
        
        if (words.length === 0) words = ["", "", "", "", ""];
        let state = attempt.map(val => val.status);
        // console.log(state);
        let newkey = guessKey.split("-");
        
        return (
          <Guess words={words} key={guessKey} keys={guessKey} newkey={newkey} state={state} />

          // <p class="guess" key={guessKey}>
          //   {words.map((word, i) => {return(<span class="cell" key={newkey[i]} >{word}</span>)})}
          // </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
