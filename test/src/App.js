
import React, { useState } from "react";
import Discover from "./components/Discover Widget/Discover";
import Navbar from './components/Navbar/Navbar'

function App() {
  const [inputValue,setInputValue] = useState('') 
  console.log("App",inputValue)
  return (
    <>
        <Navbar inputValue={inputValue} setInputValue={setInputValue} />
        <Discover inputValue={inputValue} />
    </>
  );
}

export default App;
