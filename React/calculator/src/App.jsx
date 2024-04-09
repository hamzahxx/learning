import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const operate = (operation, e) => {
    e.preventDefault();
    const num = Number(inputRef.current.value);
    setResult((result) => {
      switch (operation) {
        case "plus":
          return result + num;
        case "minus":
          return result - num;
        case "times":
          return result * num;
        case "divide":
          return result / num;
        default:
          return result;
      }
    });
  };

  const reset = () => {
    inputRef.current.value = 0;
    setResult(0);
  };

  return (
    <>
      <h2>Building a Calculator using React</h2>
      <form>
        <p>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Type a number"
        />
        <br />
        <button onClick={(e) => operate("plus", e)}>Add</button>
        <button onClick={(e) => operate("minus", e)}>Subtract</button>
        <button onClick={(e) => operate("times", e)}>Multiply</button>
        <button onClick={(e) => operate("divide", e)}>Divide</button>
        <button onClick={reset}>Reset</button>
      </form>
    </>
  );
};

export default App;
