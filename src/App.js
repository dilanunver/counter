import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NumRecords from './components/NumRecords'

const App = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0)
  const [counting, setCounting] = useState(false)
  const [nums, setNums] = useState([])

  const handleSubmit = (e, nums, setNums, number) => {
    e.preventDefault()
    const id = (nums.length) ? nums[nums.length - 1].id + 1 : 1;
    console.log(id)
    setNums([...nums, { id: id, message: number }])

  }
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
        numberRef.current += 1
        setNumber(numberRef.current)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [counting])



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
      </div>
      <div className='records'>
        <form onSubmit={(e) => handleSubmit(e, nums, setNums, number)}>
          <button>Save</button>

        </form>
        {nums.map(num => (
          <NumRecords message={num.message} id={num.id}></NumRecords>
        ))}
      </div>
    </div>
  )
}

export default App;
