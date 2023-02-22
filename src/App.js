import "./App.css";
import Navbar from "./Navbar";
import Alert from './Alert';
import Textform from "./Textform";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <Navbar showAlert={showAlert} title="ConvertCase" aboutprops="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
