import React from "react";

import notes from "./notes.js";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {notes.map(data => <Note title={data.title} content={data.content} />)}
      <Footer />
    </>
  );
}

export default App;
