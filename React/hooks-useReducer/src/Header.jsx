import React from "react";
import { useNameContext } from "./App";

function Header() {
  const name = useNameContext();
  console.log(name);
  return <h1>Baby {name} ki 100% Labboo</h1>;
}

export default Header;
