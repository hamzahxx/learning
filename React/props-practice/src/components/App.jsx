import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div className="main">
      <h1 className="heading">My Contacts</h1>
      <Card arr={contacts[0]} />
      <Card arr={contacts[1]} />
      <Card arr={contacts[2]} />
    </div>
  );
}

export default App;
