import React from "react";
import Login from "./Login";

var isRegistered = 1;
var isLoggedIn = 0;

function App() {
  return (
    <div className="container">{isLoggedIn && isRegistered ? <h1>Hello</h1> : <Login register={isRegistered} />}</div>
  );
}

export default App;
