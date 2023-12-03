import React from "react";
import shopping from "../gottaBuy";
import Card from "./Card";

function createCard(data) {
  return (
    <Card
      key={data.id}
      item={data.item}
      name={data.name}
      meaning={data.meaning}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="transition duration-300 ease-in-out pb-1 px-2 inline bg-sky-300 text-center text-5xl text-white font-bold p-{heading}">
        emojipedia
      </h1>
      <div className="p-5 lg:flex">{shopping.map(createCard)}</div>
    </>
  );
}

export default App;
