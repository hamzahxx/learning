import React from 'react'

function Card(props) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{props.arr.name}</h2>
          <img
            className="circle-img"
            src={props.arr.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.arr.phone}</p>
          <p className="info">{props.arr.email}</p>
        </div>
      </div>
    );
}

export default Card;