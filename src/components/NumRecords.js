import React from "react";

const NumRecords = ({ message, id, MdDelete }) => {
  if (id > 6) {
    console.log('hey')
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '28%',

    }}>
      <div className='id'>
        {id}.record:
      </div>
      <div className='message'>
        {message}
      </div>
      <div>
        <MdDelete />
      </div>
    </div>
  )
}



export default NumRecords;


