// required modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
