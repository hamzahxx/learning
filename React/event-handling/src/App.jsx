import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [headingText, setHeadingText] = useState("Hellooo");
  const [isMouseOver, setMouseOver] = useState(false);

  const handleHover = () => setMouseOver(true);

  const handleOut = () => setMouseOver(false);

  const handleInputChange = event => setUserName(event.target.value);

  function handleClick() {
    setHeadingText("Hellooo " + userName);
    console.log("Clicked");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input onChange={handleInputChange} value={userName} type="text" placeholder="What's your name?" />
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
