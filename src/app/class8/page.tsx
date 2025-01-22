"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Onchanger from './Onchanger';

function Counter() {
 const [counter,setcounter] = useState(0);
 const handleIncreament = ()=>{
     if(counter < 20){
        setcounter(counter + 1)
     }
 }

//  decreament function
const decreament:any = ()=>{
   if(counter > 1){
    setcounter(counter - 1)
   }
}
  return (
    <div className={`h-screen flex flex-col justify-start items-center 
    ${counter > 5 ? 'bg-red-400': 'bg-purple-200 '}`}>
       <h1 className='text-3xl font-bold'>Class 8</h1>
       <h1 className='text-3xl font-bold'>Counter UseState</h1>
         <h1>{counter}</h1>
        <div className='flex space-x-3'>
        <Button onClick={()=>handleIncreament()} >Increament</Button>
        <Button onClick={()=>decreament()} >decreament</Button>
        </div>
        <Onchanger/>
    </div>
  )
}


export default Counter
