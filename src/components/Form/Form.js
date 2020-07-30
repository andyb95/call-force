import React, {useState} from 'react'
import './Form.css'

export default function Form (props){

  const [role, setRole] = useState(null)
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return(
    <form className = 'form' onSubmit={handleSubmit}>
      <button 
        className = 'escape' 
        onClick={()=> props.closeForm(false)}
      >X
      </button>

      <div className = 'form-section'>
        <h3 className = 'form-label'>Role</h3>
        <select className = 'form-input' name='role'>
          <option value = '0'>Select Role</option>
          <option value = 'Doctor'>Doctor</option>
          <option value = 'Assistant'>Assistant</option>
          <option value = 'Hygenist'>Hygenist</option>
        </select> 
      </div>

      <div className = 'form-section'>
        <h3 className = 'form-label'>Start Time</h3>
        <select className = 'form-input'>
          <option value = '0'>Start Time</option>
          <option value = '9:00'>9:00</option>
          <option value = '10:00'>10:00</option>
          <option value = '11:00'>11:00</option>
          <option value = '12:00'>12:00</option>
          <option value = '1:00'>1:00</option>
          <option value = '2:00'>2:00</option>
          <option value = '3:00'>3:00</option>
        </select> 
      </div>

      <div className = 'form-section'>
        <h3 className = 'form-label'>End Time</h3>
        <select className = 'form-input'>
          <option value = '0'>End Time</option>
          <option value = '9:00'>9:00</option>
          <option value = '10:00'>10:00</option>
          <option value = '11:00'>11:00</option>
          <option value = '12:00'>12:00</option>
          <option value = '1:00'>1:00</option>
          <option value = '2:00'>2:00</option>
          <option value = '3:00'>3:00</option>
        </select> 
      </div>
      
      <button>Save</button>
    </form>
  )
}