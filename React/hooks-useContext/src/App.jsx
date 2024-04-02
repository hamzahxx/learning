import React, { useState, useContext, createContext } from "react";
import Header from "./Header";

const UserNameContext = createContext();

function App() {
  const [name, setName] = useState("User");
  return (
    <>
      <UserNameContext.Provider value={name}>
        <Header />
      </UserNameContext.Provider>
      <button onClick={() => setName("Baba")}>Baba</button>
      <button onClick={() => setName("Bhai")}>Bhai</button>
    </>
  );
}

export const useNameContext = () => useContext(UserNameContext);

export default App;
