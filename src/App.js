import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NumRecords from './components/NumRecords'
import { MdDelete } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
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

  function deleteAll() {
    setNums([]);
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

  //styling
  const modalDeleteAllEnter = (e) => {
    let modalDeleteAllStyle = e.target.style;
    modalDeleteAllStyle.color = 'rgb(15, 24, 49)';
    modalDeleteAllStyle.backgroundColor = '#386add';
    modalDeleteAllStyle.transition = 'all 0.5s ease - out';
  }
  const modalDeleteAllLeave = (e) => {
    let modalDeleteAllStyle = e.target.style;
    modalDeleteAllStyle.color = 'rgb(15, 24, 49)';
    modalDeleteAllStyle.backgroundColor = 'transparent';
    modalDeleteAllStyle.transition = 'all 0.5s ease - out';

  }
  const handleMouseEnter = (e) => {
    let mouseStyle = e.target.style;
    mouseStyle.border = '2px solid #8ca6db';
    mouseStyle.borderRadius = '5px'
    mouseStyle.color = '#386add'
  }
  const handleMouseLeave = (e) => {
    let mouseStyle = e.target.style;
    mouseStyle.border = 'none'
    mouseStyle.backgroundColor = 'transparent'
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
        <form onSubmit={(e) => handleSubmit(e, nums, setNums, number)}>
          <button className='save'>Save</button>
        </form>
        <button className="deleteAll" onClick={() => setNums([])}>Delete</button>
      </div>
      <div className='numsStyle' >
        {nums.map(num => (
          <NumRecords id={num.id} message={num.message} MdDelete={MdDelete} deleteItem={deleteItem}>
          </NumRecords>
        ))}
      </div>
      {nums.length >= 25 && <div onClick={() => setModalIsOpen(true)} className='readMore' >Read More</div>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModel}>
        <h2 className='allRecords' >All Records</h2>
        <AiOutlineClose
          onClick={() => setModalIsOpen(false)}
          className='modalClose'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}></AiOutlineClose>
        <div
          className='numStyle'
        >
          {nums.map(num => (
            <NumRecords id={num.id} message={num.message} MdDelete={MdDelete} deleteItem={deleteItem}>
            </NumRecords>

          ))}
        </div><button
          className='deleteButton'
          onMouseEnter={modalDeleteAllEnter} onMouseLeave={modalDeleteAllLeave} onClick={deleteAll}>Delete All</button>
      </Modal>
    </div>
  )
}

export default App;
