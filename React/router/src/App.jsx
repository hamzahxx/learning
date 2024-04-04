import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Link to="/">HOME PAGE</Link>
      <Link to="/contact/">CONTACT PAGE</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
