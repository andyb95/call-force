import React, {useState, useEffect} from 'react'
import Form from '../Form/Form'

import './Availability.css'

export default function Availability(props){

  const [formOpen, setFormOpen] = useState(false)
  const [availability, setAvailability] = useState(null)

  useEffect(() => {
    setAvailability([
      {
        time: 9,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 10,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 11,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 12,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 1,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 2,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
      {
        time: 3,
        Doctor: 'false',
        Assistant: 'false',
        Hygenist: 'false'
      },
    ])
  },[])

  return(
    <div className = 'availability'>
      {formOpen ? (
        <Form 
          id = {props.match.params.day}
          closeForm = {setFormOpen}
        />
      ): null}
      <button className = 'add-button' onClick={()=>setFormOpen(true)}>Add Availability</button>
      <div className = 'chart'>
        <div className = 'roles'>
          <p>Doctor</p>
          <p>Assistant</p>
          <p>Hygienist</p>
        </div>
        {availability ? (availability.map(e => {
          console.log(e)
          return (
            <div className = 'times'>
              {e.time}
            </div>
          )
        })): <p>Loading</p>}
      </div>
    </div>
  )
}