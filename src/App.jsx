import React from "react";
import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div className="app">
      <Navbar />
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/#" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
    </Routes>
    </div>
        
  );
}

export default App