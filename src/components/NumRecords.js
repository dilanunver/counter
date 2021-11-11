import React from "react";

const NumRecords = ({ message, id, MdDelete, deleteItem }) => {

  return (
    <div style={{
      display: 'flex',
      width: '28%',
      fontFamily: 'Red Hat Display", sans-serif',
      fontWeight: '400',
      fontSize: '18px',
      color: ' #182848'

    }}>

      <div className='id'>

        {id}.record:
      </div>
      <div className='message'>
        {message}
      </div>
      <button style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }} onClick={() => deleteItem(id)}>
        <MdDelete />
      </button>
    </div>
  )
}



export default NumRecords;


