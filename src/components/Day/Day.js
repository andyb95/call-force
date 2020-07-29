import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Availability from '../Availability/Availability'

import './Day.css'

export default function Day(props){

  return(
    

    <Link 
      to = {`/availability/${props.id}`}
      className = 'day link'
    >
      {props.day}
    </Link>
  )
}