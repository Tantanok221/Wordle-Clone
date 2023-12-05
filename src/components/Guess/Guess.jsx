import React from "react";

function Guess({ words, newkey, keys,state }) {

  return (
    <p className="guess" key={keys}>
      {words.map((word, i) => {
        return <span className={"cell " + state[i]} key={newkey[i]}>{word}</span>;
      })}
    </p>
  );
}

export default Guess;
