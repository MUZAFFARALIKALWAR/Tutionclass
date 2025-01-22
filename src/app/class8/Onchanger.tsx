"use client"
import React, { useState } from 'react'

function Onchanger() {
    const [name,setName] = useState("Muzaffar Ali")
const hanldleName = (e:any)=>{
    setName(e.target.value)
}

  return (
    <div className='mt-14 '>
        <p className='text-2xl font-bold mb-2'>{name}</p>
        <input type="text"
        onChange={hanldleName} 
        placeholder='Enter your Name'/>
    </div>
  )
}

export default Onchanger