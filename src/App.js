import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0)
  const [counting, setCounting] = useState(false)
  const [saveNum, setSaveNum] = useState([])

  function increment() {
    setNumber(number + 1)
  }
  function decrement() {
    setNumber(number - 1)
  }
  console.log(numberRef)
  console.log(number)
  if (numberRef.current < number || numberRef.current > number) {
    numberRef.current = number
  }
  useEffect(() => {
    let interval;
    if (counting) {
      interval = setInterval(() => {
        console.log(numberRef)

        numberRef.current += 1
        setNumber(numberRef.current)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [counting])

  const save = () => {
    setSaveNum(number)
    console.log(typeof (saveNum))
  }


  return (
    <div className="app">
      <h2 className="header">Counter App</h2>
      <h1 className="number">{number}</h1>
      <div className="row">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
      </div>
      <div className="row2">
        <button className="start" onClick={() => setCounting(true)}>Start Counting</button>
        <button className="stop" onClick={() => setCounting(false)}>Stop Counting</button>
        <button className="resume" onClick={() => setCounting(true)}>Resume</button>
        <button className="zero" onClick={() => setNumber(0)}>Reset</button>
        <button className="save" onClick={save}>Save</button>
      </div>
      <div className='saveNumbers'>
        <span>Your first record</span><input type="text" value={saveNum}></input>
      </div>

    </div>
  )
}

export default App;
