import React, {useState, useEffect} from 'react'
import Form from '../Form/Form'

export default function Availability(props){

  const [formOpen, setFormOpen] = useState(true)



  return(
    <div>
      {formOpen ? (
        <Form />
      ): null}
      <button >Add Availability</button>
    </div>
  )
}