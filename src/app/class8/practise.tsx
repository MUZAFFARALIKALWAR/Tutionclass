"use client"
import React, { useState } from 'react'

function Practise() {
    const [comment,setComments] = useState([""]);
    const [newComment,setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
          setComments([...comment, newComment]); // Comments array update karein
          setNewComment(''); // Input ko clear karein
        }
      };
  return (
    <div>
        <ul>
            {comment.map((items)=>{
                return (
                    <div><h1>{items}</h1></div>
                )
            })}
            
        </ul>
        <textarea  
            placeholder='add comment'
            value={newComment}
            onChange={(e)=>setNewComment(e.target.value)}>

            </textarea>
         <button onClick={()=>handleAddComment()}>
            add comment
         </button>
    </div>
  )
}

export default Practise