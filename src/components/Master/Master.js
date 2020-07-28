import React, {useState, useEffect} from 'react'
import Day from '../Day/Day'

import './Master.css'

export default function Master(){

  const [days, setDays] = useState(['sun','m','t','w','th','f','sat'])

    

  return(
    <div className = 'master'>Master.js
    <div className = 'days'>
      {days.map(e => {
        return(
          <Day 
            key={e.id}
            day={e}
          />
          )
        })
      }
    </div>  

  </div>
  )
}