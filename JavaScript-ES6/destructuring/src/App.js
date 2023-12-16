import React from "react";
import cars from "./practice";
import Row from "./components/Row";

function carData(car) {
  const {
    model,
    coloursByPopularity,
    speedStats: { topSpeed },
  } = car;
  return (
    <Row
      key={model}
      name={model}
      speed={topSpeed}
      color={coloursByPopularity[0]}
    />
  );
}

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Top Speed</th>
            <th>Top Color</th>
          </tr>
        </thead>
        <tbody>{cars.map(carData)}</tbody>
      </table>
    </>
  );
}

export default App;
