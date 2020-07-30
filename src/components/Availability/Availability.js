import React, {useState} from 'react'
import Form from '../Form/Form'

import './Availability.css'

export default function Availability(props){

  const [formOpen, setFormOpen] = useState(false)
  const [availability, setAvailability] = useState([
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
      time: 13,
      Doctor: 'false',
      Assistant: 'false',
      Hygenist: 'false'
    },
    {
      time: 14,
      Doctor: 'false',
      Assistant: 'false',
      Hygenist: 'false'
    },
    {
      time: 15,
      Doctor: 'false',
      Assistant: 'false',
      Hygenist: 'false'
    },
  ])


  return(
    <div className = 'availability'>
      {formOpen ? (
        <Form 
          id = {props.match.params.day}
          closeForm = {setFormOpen}
          availability = {availability}
          setAvailability = {setAvailability}
        />
      ): null}
      <button className = 'add-button' onClick={()=>setFormOpen(true)}>Add Availability</button>
      <div className = 'chart'>
      <div className = 'row'>
        <div className = 'time box top'></div>
        <div className = 'cell box top'>Doctor</div>
        <div className = 'cell box top'>Assistant</div>
        <div className = 'cell box top'>Hygenist</div>

      </div>
        {availability ? (availability.map(e => {
          return (
            <div className = 'row'>
              <div className = 'time box'>{e.time}:00</div>
              <div className = 'cell box'>{e.Doctor}</div>
              <div className = 'cell box'>{e.Assistant}</div>
              <div className = 'cell box'>{e.Hygenist}</div>
            </div>
          )
        })): <p>Loading</p>}
        {/* <p className = 'box column'>Doctor</p>
        <p className = 'box column'>Assistant</p>
        <p className = 'box column'>Hygienist</p> */}
       
      </div>
    </div>
  )
}
