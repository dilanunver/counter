import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0)

  function increment() {
    setNumber(number + 1)
  }
  function decrement() {
    setNumber(number - 1)
  }
  function zero() {
    setNumber(0)
  }

  useEffect(() => {
    setInterval(() => {
      numberRef.current += 1
      setNumber(numberRef.current);
    }, 1000)
  }, [])


  return (
    <div className="app">
      <h2 className="header">Counter App</h2>
      <h1 className="number">{number}</h1>
      <div className="row">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
      </div>
      <div className="row2">
        <button className="zero" onClick={zero}>Reset</button>
        <button className="save">Save</button>
      </div>
      <button >auto increment</button>

    </div>
  )
}

export default App;
