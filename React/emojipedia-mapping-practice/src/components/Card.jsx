import React from "react";

function Card(props) {
  return (
    <div className="bg-white transition-shadow fade shadow-inner hover:shadow-xl my-10 md:mx-2 py-2 md:py-5 w-full">
      <dt>
        <h1 className="pt-2 text-5xl" role="img" aria-label={props.name}>
          {props.item}
        </h1>
        <h1 className="font-mono text-4xl py-4 text-sky-300 font-semibold">{props.name}</h1>
      </dt>
      <dd className="px-5 font-sans text-base">{props.meaning}</dd>
    </div>
  );
}

export default Card;
