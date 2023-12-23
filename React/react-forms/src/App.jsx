import React, { useState } from "react";

function App() {
  //useStates
  const [isMouseOver, setMouseOver] = useState(false);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  //HOVER FUNCTIONS
  function handleHover() {
    setMouseOver(true);
  }

  function handleOut() {
    setMouseOver(false);
  }

  //PAGE FUNCTIONS
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick(event) {
    console.log("Submitted");
    setName(input);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hellooo {name}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={input}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleHover}
          onMouseOut={handleOut}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
