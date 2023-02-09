
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import TextForm from './components/TextForm';


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState();
  const[customColor,setCustomColor]=useState("");
  

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#343a40";
      showAlert("Dark Mode has been Enabled","success")
      setCustomColor("");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light Mode has been Enabled","success")
      setCustomColor("");
      
    }
  }
  const HandleonChange=(event)=>{
    setCustomColor(event.target.value);
    document.body.style.backgroundColor=customColor;

  }


  
  return (
    <>
   
   <Navbar title="TextUtils-Ak" aboutText="About-TextUtils" mode={mode} toggleMode={toggleMode} customColor={customColor} HandleonChange={HandleonChange} />
   <Alert alert={alert}/>
   <div className="conatainer my-3">
       {<TextForm heading="Enter Text to Analyse" mode={mode} showAlert={showAlert} customColor={customColor}/>}
   </div>
    

    {/* <BrowserRouter>
    <Navbar title="TextUtils-Ak" aboutText="About-TextUtils" mode={mode} toggleMode={toggleMode} customColor={customColor} HandleonChange={HandleonChange} />
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter Text to Analyse" mode={mode} showAlert={showAlert} customColor={customColor}/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter> */}
    



         
    </>
  );
}

export default App;
