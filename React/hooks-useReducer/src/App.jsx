import React, { useContext, createContext, useReducer } from "react";
import Header from "./Header";

const UserNameContext = createContext();
const initialName = { name: "User" };

const reducer = (state, action) => {
  if (action.type == "Baba") return { name: "Baba" };
  if (action.type == "Bhai") return { name: "Bhai" };
  throw new Error("Type not found");
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialName);
  return (
    <>
      <UserNameContext.Provider value={state.name}>
        <Header />
      </UserNameContext.Provider>
      <button onClick={() => dispatch({ type: "Baba" })}>Baba</button>
      <button onClick={() => dispatch({ type: "Bhai" })}>Bhai</button>
    </>
  );
}

export const useNameContext = () => useContext(UserNameContext);

export default App;
