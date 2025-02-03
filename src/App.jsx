import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtil" />

      <div className="container">
        <TextForm heading="Enter the text here" />
      </div>
    </>
  );
}

export default App;
