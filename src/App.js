import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NumRecords from './components/NumRecords'
import { MdDelete } from 'react-icons/md'
import Modal from 'react-modal'

const App = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0)
  const [counting, setCounting] = useState(false)
  const [nums, setNums] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  Modal.setAppElement('#root');

  function closeModel() {
    setModalIsOpen(false)
  }

  const handleSubmit = (e, nums, setNums, number) => {
    e.preventDefault()
    const id = (nums.length) ? nums[nums.length - 1].id + 1 : 1;
    setNums([...nums, { id: id, message: number }])
  }
  const deleteItem = (id) => {
    const returned = nums.filter(num => num.id !== id);
    setNums(returned)
  }
  function increment() {
    setNumber(number + 1)
  }
  function decrement() {
    setNumber(number - 1)
  }
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
        <form onSubmit={(e) => handleSubmit(e, nums, setNums, number)}>
          <button className='save'>Save</button>
        </form>
      </div>
      <div style=
        {{
          fontFamily: 'Red Hat Display", sans-serif',
          fontSize: '18px',
          color: '#182848',
          paddingTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          height: '160px',
          width: '47vw',
          flexWrap: 'wrap',
          overflow: 'hidden',
          alignContent: 'flex-start'
        }}>
        {nums.map(num => (
          <NumRecords id={num.id} message={num.message} MdDelete={MdDelete} deleteItem={deleteItem}>
          </NumRecords>
        ))}
      </div>
      {nums.length >= 25 && <div onClick={() => setModalIsOpen(true)} style={{
        fontFamily: 'Red Hat Display", sans-serif',
        fontSize: '18px',
        color: '#386add',
        cursor: 'pointer',
        borderRadius: '5px',
        width: '108px',
        height: '37px',
        border: '#4b6cb7 solid 2px',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: '3%',
        right: '15%',
        textAlign: 'center',
        paddingTop: '3px'
      }}>Read More</div>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModel}>
        <h2 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '700px',
          color: '#b973b9',
          textTransform: 'uppercase',
          fontSize: '40px'
        }}>All Records</h2>
        <div style=
          {{
            fontFamily: 'Red Hat Display", sans-serif',
            fontSize: '18px',
            color: '#182848',
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            height: '160px',
            width: '47vw',
            flexWrap: 'wrap',
          }}>
          {nums.map(num => (
            <NumRecords id={num.id} message={num.message} MdDelete={MdDelete} deleteItem={deleteItem}>
            </NumRecords>

          ))}
        </div>
      </Modal>
    </div>
  )
}

export default App;
