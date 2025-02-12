import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
const handleLoClick = () => {
  //console.log("Upper case was clicked " + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lower case" , "Success")
};

const handleReverseClick = () => {
  //console.log("Upper case was clicked " + text);
  let newText = text.split("").reverse().join("");
  setText(newText);
};


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
    <div className= "container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse text</button>
    </div>
    <div className= "container my-2">
    <h1>You text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 *text.split(" ").length }</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  );
}
