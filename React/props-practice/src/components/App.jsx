import React from "react";
import Card from "./Card";
import contacts from "../contacts"

function App() {
  return (
    <div className="main">
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        photo={contacts[0].imgURL}
        mail={contacts[0].email}
        contact={contacts[0].phone}
      />
      <Card
        name={contacts[1].name}
        photo={contacts[1].imgURL}
        mail={contacts[1].email}
        contact={contacts[1].phone}
      />
      <Card
        name={contacts[2].name}
        photo={contacts[2].imgURL}
        mail={contacts[2].email}
        contact={contacts[2].phone}
      />
    </div>
  );
}

export default App;
