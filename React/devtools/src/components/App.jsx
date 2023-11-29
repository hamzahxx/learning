import React from "react";
import Card from "./Card";
import contacts from "../contacts"
import Avatar from "./Avatar";

function App() {
  return (
    <div className="main">
      <h1 className="heading">My Contacts</h1>
      <Avatar photo="https://hamzahxx.github.io/images/body/hamzah.jpeg" />
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
