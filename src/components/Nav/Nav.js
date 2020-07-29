import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function Nav(){

  return(
    <div className = 'nav'>
      <img className = 'logo' src = 'https://www.getcallforce.com/images/logo-large.png' alt='logo'/>
      <Link className = 'link links' to = '/'>Calendar</Link>
    </div>
  )
}