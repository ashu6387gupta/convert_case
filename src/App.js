import "./App.css";
import Navbar from "./Navbar";
import Alert from './Alert';
import Textform from "./Textform";
import { useState } from "react";
function App() {
  const [alert,setAlert] = useState(null);
  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
  return (
    <>
      <Navbar title="ConvertCase" aboutprops="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
