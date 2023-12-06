import React from 'react';

function GuessKeyboard() {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (<div className="keyboard">
    {keyboard.map((row, i) => {
      
      return (
        <div className="rowKeyboard" key={i}>
        {row.map((letter, j) => <div key={j} className="keycell">{letter}</div>)}
        </div>
        )
    }
      )}

  </div>);
}

export default GuessKeyboard;
