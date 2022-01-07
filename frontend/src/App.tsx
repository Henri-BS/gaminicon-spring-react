import Navbar from 'components/NavBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
