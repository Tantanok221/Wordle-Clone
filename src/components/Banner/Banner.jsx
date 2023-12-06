import React from "react";

function Banner({ winLose,answer,globalIterate }) {
  if (winLose === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          
          <strong> {globalIterate} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
