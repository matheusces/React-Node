import React, { useState } from 'react';
import './global.css'
import Routes from './routes'

// JSX (JavaScript XML)

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <Routes /> 
  );
}

export default App;
