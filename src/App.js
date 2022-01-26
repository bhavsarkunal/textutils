// import logo from './logo.svg';
// import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react';

function App() {
  const [mode , setMode] = useState("light");
 

  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#364758";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    
    <Navbar heading="TextUtils" mode={mode} togglemode={togglemode}/>
   
    <Textarea title="Welcome to TextUtils" mode={mode}/>
    
    </>
  );
}

export default App;
