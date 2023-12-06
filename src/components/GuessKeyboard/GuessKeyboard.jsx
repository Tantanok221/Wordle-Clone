import React from 'react';

function GuessKeyboard({keyboard}) {
  
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
