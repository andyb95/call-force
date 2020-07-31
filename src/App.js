import React from 'react';
import Nav from './components/Nav/Nav'
import './App.css';
import Availability from './components/Availability/Availability';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Availability />
    </div>
  );
}

export default App;
