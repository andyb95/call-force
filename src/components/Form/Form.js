import React from 'react'
import './Form.css'

export default function Form (props){

  return(
    <div className = 'form'>
      <button 
        className = 'escape' 
        onClick={()=> props.closeForm(false)}
      >X
      </button>
      <select className = 'form-input'>
        <option value = 'doctor'>Doctor</option>
        <option value = 'assistant'>Assistant</option>
        <option value = 'hygenist'>Hygenist</option>
      </select> 
      <input
        className = 'form-input' 
        type= 'text'
        placeholder= 'Start Time'
      />
      <input 
        className = 'form-input'
        type= 'text'
        placeholder= 'End Time'
      />
      <button>Save</button>
    </div>
  )
}