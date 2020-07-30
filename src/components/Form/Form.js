import React, {useState} from 'react'
import './Form.css'

export default function Form (props){

  const [formValues, setFormValues] = useState({role: null, start: null, end: null})
  

  const handleRole = (e) => {
    setFormValues({
      ...formValues, role: e.target.value
    })
  }

  const handleStart = (e) => {
    setFormValues({
      ...formValues, start: e.target.value
    })
  }

  const handleEnd = (e) => {
    setFormValues({
      ...formValues, end: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {role, start, end} = formValues
    if (!role ){
      alert('Please enter role')
    } else if (!+start>=+end){
      alert('Please enter vaild times')
    } else {
      for(let i = 0; i < props.availability.length; i++){
        console.log(props.availability[i])
      }
    }
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
        <select className = 'form-input' value={formValues.role} onChange = {handleRole}>
          <option value = '0'>Select Role</option>
          <option value = 'Doctor'>Doctor</option>
          <option value = 'Assistant'>Assistant</option>
          <option value = 'Hygenist'>Hygenist</option>
        </select> 
      </div>

      <div className = 'form-section'>
        <h3 className = 'form-label'>Start Time</h3>
        <select className = 'form-input' value={formValues.start} onChange = {handleStart}>
          <option value = '0'>Start Time</option>
          <option value = '9'>9:00</option>
          <option value = '10'>10:00</option>
          <option value = '11'>11:00</option>
          <option value = '12'>12:00</option>
          <option value = '13'>1:00</option>
          <option value = '14'>2:00</option>
          <option value = '15'>3:00</option>
        </select> 
      </div>

      <div className = 'form-section'>
        <h3 className = 'form-label'>End Time</h3>
        <select className = 'form-input' value={formValues.end} onChange = {handleEnd}>
          <option value = '0'>End Time</option>
          <option value = '9'>9:00</option>
          <option value = '10'>10:00</option>
          <option value = '11'>11:00</option>
          <option value = '12'>12:00</option>
          <option value = '13'>1:00</option>
          <option value = '14'>2:00</option>
          <option value = '15'>3:00</option>
        </select> 
      </div>
      
      <button onClick = {handleSubmit}>Save</button>
    </form>
  )
}