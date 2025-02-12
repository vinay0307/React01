import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [alert, setAlert]=useState(null);
  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
setTimeout(() => {
  setAlert(null)
}, 3000);


  }

  return (
    <>
      <Navbar title="TextUtil" />
      <Alert alert = {alert}/>

      <div className="container">
        <TextForm heading="Enter the text here" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
