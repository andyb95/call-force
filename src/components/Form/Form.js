import React from 'react'

export default function Form (props){

  return(
    <div className = 'form'>
      <input 
        type= 'text'
        placeholder= 'Role'
      />
      <input 
        type= 'text'
        placeholder= 'Start Time'
      />
      <input 
        type= 'text'
        placeholder= 'End Time'
      />
      <button>Save</button>
    </div>
  )
}