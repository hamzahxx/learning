import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(element) {
  return (
    <Card
      key={element.id}
      id={element.id}
      name={element.name}
      photo={element.imgURL}
      mail={element.email}
      contact={element.phone}
    />
  );
}

function App() {
  return (
    <div className="main">
      <h1 className="heading">My Contacts</h1>
      <Avatar photo="https://hamzahxx.github.io/images/body/hamzah.jpeg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
