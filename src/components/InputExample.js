import React from 'react'
import { useState } from 'react'

function InputExample() {

    const [form,setForm] = useState({name:"", surname:""})

    const onChangeInput = (e)=> {
        setForm({...form, [e.target.name]:e.target.value})


    }


  return (
    <div>

        Name <br />
        <input  name='name' onChange={onChangeInput}  />
        <br />
        Surname  <br />
        <input  name='surname' onChange={onChangeInput} />
        <br />
        <br />

        {form.name} {form.surname}
      
    </div>
  )
}

export default InputExample
