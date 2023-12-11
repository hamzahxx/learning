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
        <tr>
          <th>Model</th>
          <th>Top Speed</th>
          <th>Top Color</th>
        </tr>
        {cars.map(carData)}
      </table>
    </>
  );
}

export default App;
