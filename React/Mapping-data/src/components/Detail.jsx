import React from "react";

function Detail(props) {
  return (
    <>
      <p className="info">{props.contact}</p>
      <p className="info">{props.mail}</p>
    </>
  );
}

export default Detail;
