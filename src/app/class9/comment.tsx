import React, { useState } from 'react'

function Comment_section() {
    const [comment,setcomment] = useState([""]);
    const [newcomment,setnewcomment] = useState("");

    const handlecomment = ()=>{
        if(newcomment.trim() !== ''){
            setcomment([...comment,newcomment]);
            setnewcomment('');
        }
    }
  return (
    <div className='mt-6 mb-32 flex flex-col justify-center items-center'>
         <ul>
            {comment.map((items:any)=>{
                return (
                    <div>
                        <h1>{items}</h1>
                    </div>
                )
            })}
         </ul>
          
          <textarea
          placeholder='add comment'
          className='border'
          value={newcomment}
          onChange={(e)=>setnewcomment(e.target.value)}
          ></textarea>

          <button onClick={()=>handlecomment()} className='text-white bg-black py-2 px-5'>add comment</button>
    </div>
  )
}

export default Comment_section