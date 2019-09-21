import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Body from './components/Body';
function App() {
  return (
    <div className='wrap'>
      <div className="App">
        <Home />
      </div>
      <Nav />
      <div className="App">
        <Body />
      </div>
    </div>
  );
}

export default App;
