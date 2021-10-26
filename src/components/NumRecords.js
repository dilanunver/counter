import React from "react";

const NumRecords = ({ message, id, MdDelete }) => {
  if (id > 6) {
    console.log('hey')
  }
  if (id > 6) {
    return (
      <div className='secondRow'>
        <span className='id'>
          {id}.record:
        </span>
        <span className='message'>
          {message}
        </span>
        <span>
          <MdDelete />
        </span>
      </div>
    )
  } else {
    return (
      <div className='records'>
        <span className='id'>
          {id}.record:
        </span>
        <span className='message'>
          {message}
        </span>
        <span>
          <MdDelete />
        </span>
      </div>
    )
  }




}


export default NumRecords;


