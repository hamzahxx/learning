import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">
          {props.id}. {props.name}
        </h2>
        <Avatar photo={props.photo} />
      </div>
      <div className="bottom">
        <Detail contact={props.contact} mail={props.mail} />
      </div>
    </div>
  );
}

export default Card;
