import React from "react";

function Row(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.speed}</td>
        <td>{props.color}</td>
      </tr>
    </>
  );
}

export default Row;
