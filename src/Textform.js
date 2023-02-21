import React from "react";
import { useState } from "react";

export default function Textform(props) {
    const handleClick = () =>{
        // console.log("uppercase is clicked");
        let UpperText = text.toUpperCase();
        setText(UpperText);   
    }
    const handlellowClick = () =>{
      let lowertext = text.toLowerCase();
      setText(lowertext);
    }
    const handleOnChange = (e) =>{
        // console.log("change");
        setText(e.target.value);
    }
    const getEmail = () =>
    {
      return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
  const [text,setText] = useState("");
  const clear = () => {
    setText('');
  }
  const handleCopy = () =>{
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const extraSpaces = () =>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
  }
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea value={text} onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="mx-1 btn btn-primary" onClick={handleClick}>Convert to UpperCase</button>
        <button className="mx-1 btn btn-primary" onClick={handlellowClick}>Convert to lowercase</button>
        <button className="mx-1 btn btn-primary" onClick={clear}>Clear</button>
        <button className="mx-1 btn btn-primary" onClick={handleCopy}>Copy</button>
        <button className="mx-1 btn btn-primary" onClick={extraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
         <h3>Your text summary</h3>
         <p>{text.split(" ").length} Words , {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} minutes reading</p>
         <p>{text}</p>
         Email extractor : <p>{getEmail()}</p>
      </div>
    </>
  );
}
