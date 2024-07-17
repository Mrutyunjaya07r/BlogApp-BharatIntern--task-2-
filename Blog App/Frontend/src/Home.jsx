import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Home() {
  const [blog,setBlog]=useState([])

useEffect(()=>{
getBlog()
},[])


  const getBlog=async()=>{
    let result=await fetch("http://localhost:3000/getblogs");
    result=await result.json()
    console.log(result)
    setBlog(result)
  }
  const search=async(e)=>{
    let key=e.target.value
    let result=await fetch(`http://localhost:3000/search/${key}`)
    result=await result.json()
    console.log(result)
    setBlog(result)
  }
  return (
    <div>
      <h1>Blogs</h1>
      <input type="text" name="search" id="search" onChange={search} placeholder='Search for blogs' />
      <hr/>
      
      <div className="container">
      {
        blog.map((item)=>
          <div className="card">
            <h2>{item.title}</h2>
            <p>{item.bodycontent}</p>
            <h3>Publish By:{item.author}</h3>
            <p>Id:{item._id}</p>
            <p>Date of Publish:{item.createdAt}</p>
            <br />
            <button><Link to={'/update/'+item._id} >update</Link></button>
          </div>
        )
      }
      </div>
     
    </div>
  )
}

export default Home