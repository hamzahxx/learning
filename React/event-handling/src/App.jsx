import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hellooo");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleHover() {
    setMouseOver(true);
  }

  function handleOut() {
    setMouseOver(false);
  }

  function handleClick() {
    const userName = document.getElementById("inputName").value
    setHeadingText("Hellooo " + userName);
    console.log("Clicked");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input id="inputName" type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleHover}
        onMouseOut={handleOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
