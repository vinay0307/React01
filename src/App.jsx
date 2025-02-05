import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtil" />

      <div className="container">
        {/* <TextForm heading="Enter the text here" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
