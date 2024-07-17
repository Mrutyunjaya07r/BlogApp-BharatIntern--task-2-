import React,{useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

function Update() {
    const param=useParams()
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [bodycontent,setBodycontent]=useState("")
    const [author,setAuthor]=useState("")

    const postData=async()=>{
        let result=await fetch(`http://localhost:3000/update/${param.id}`,{
          method:"put",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title:title,
            bodycontent:bodycontent,
            author:author
          })
        });
        result=await result.json()
        console.log(result)
        navigate("/")
    
      }
  return (
    <div>
        <h1>Update Blog</h1>
        <br />
        <br />
        <div className="con">
        <div className="form">
          <input type="text" name="title" id="title" placeholder='Enter Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
          <textarea name="bodycontent" id="bodycontent" placeholder='Enter Content' value={bodycontent} onChange={(e)=>{setBodycontent(e.target.value)}} ></textarea>
          <input type="text" name="author" id="author" placeholder='Enter Author Name' value={author} onChange={(e)=>{setAuthor(e.target.value)}} />
          <input type="submit" value="Post" id='submit' onClick={postData} />
        </div>
      </div>
    </div>
  )
}

export default Update