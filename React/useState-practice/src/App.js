import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function getTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  setInterval(getTime, 1000);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default App;
