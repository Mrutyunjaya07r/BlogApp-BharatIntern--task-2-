import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Removeblog() {
  const navigate=useNavigate()
  const [_id,set_Id]=useState("")
  const deleteData=async()=>{
    let result=await fetch('http://localhost:3000/deleteblog',{
      method:"delete",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        _id:_id
      })
    });
    result=await result.json()
    console.log(result);
    navigate('/')
    alert("deleted successfully")
  }
  return (
    <div>
      <h1>Remove Blog</h1>
      <br/>
      <br/>
      <div className="con">
        <div className="formdel">
          <input type="text" name="id" id="id" placeholder='Enter your Id' value={_id} onChange={(e)=>{set_Id(e.target.value)}} />
          <input type="submit" value="Delete" id='del' onClick={deleteData} />
        </div>
      </div>
    </div>
  )
}

export default Removeblog