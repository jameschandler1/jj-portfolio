// required modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
  );
}

export default App;
