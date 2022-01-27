// required modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Home from './pages/Home';
import About from './pages/About';
//data
import Bio from "./data/Bio";


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
