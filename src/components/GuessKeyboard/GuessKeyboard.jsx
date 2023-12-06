import React from 'react';

function GuessKeyboard({keyboard,keyboardState}) {
  
  return (<div className="keyboard">
    {keyboard.map((row, i) => {
      
      return (
        <div className="rowKeyboard" key={i}>
        {row.map((letter, j) => {
        
        
        return(<div id={"keyboard"+letter}key={j} className="keycell">{letter}</div>)
        
        })}
        </div>
        )
    }
      )}

  </div>);
}

export default GuessKeyboard;
