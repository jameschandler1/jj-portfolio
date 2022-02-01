// required modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Home from './pages/Home';

//data
import Bio from "./data/Bio";


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
