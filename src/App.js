import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282854';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar firstcolumn = "Aditya Singh" secondcolumn = "Project" thirdcolumn = "About Me(Aditya Singh)"  mode={mode} toggleMode={toggleMode}/>

    <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About mode = {mode}/>}/>
          <Route path="/" element = {<TextForm heading="Enter text to analyse" mode={mode}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
