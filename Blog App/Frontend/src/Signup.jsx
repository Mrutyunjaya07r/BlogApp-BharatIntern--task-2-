import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'

function Signup() {
    let navigate=useNavigate()
    const [fullname,setFullname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")

    const postData=async()=>{
        let result=await fetch("http://localhost:3000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fullname:fullname,
                email:email,
                password:password,
                username:username
            })
        });
        result=await result.json()
        console.log(result)
        navigate('/signin')
        alert(`signup successfully ${fullname}`)
    }
  return (
    <div>
        <h1>SignUp</h1>
        <br />
        <div className="con">
            <div className="form">
                <input type="text" name="fullname" id="fullname" placeholder='Fullname' value={fullname} onChange={(e)=>{setFullname(e.target.value)}} />
                <input type="text" name="Username" id="username" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="submit" value="submit" id='submit' onClick={postData}  />
            </div>
        </div>
        <div className="concontent">
        <div className="content">
            <p>If you already have any Account so please ?</p>  <Link to='/signin'>SignIn</Link>
        </div>
        </div>
    </div>
  )
}

export default Signup