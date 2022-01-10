import React from 'react';
import Navbar from './Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
  
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Routes>
    </Router>
    </>
  );
}
  
export default App;