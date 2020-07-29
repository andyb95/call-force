import React, {useState, useEffect} from 'react'
import Day from '../Day/Day'

import './Master.css'

export default function Master(){

  const [days, setDays] = useState(['sun','m','t','w','th','f','sat'])

    

  return(
    <div className = 'master'>Master.js
    <div className = 'days'>
      {days.map((day, index) => {
        return(
          <Day 
            id={index+1}
            day={day}
          />
          )
        })
      }
    </div>  

  </div>
  )
}