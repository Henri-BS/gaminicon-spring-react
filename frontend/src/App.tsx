import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/NavBar';
import Home from 'components/pages/Home';
import Explorar from 'components/pages/Explorar';
import Suporte from 'components/pages/Suporte';

function App() {
  return (
    <Router>
      <Navbar />
      </Router>
  );
}

export default App;
