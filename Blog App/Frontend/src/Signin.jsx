import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
    let navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const postData=async()=>{
        let result=await fetch("http://localhost:3000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password,
            })
        });
        result=await result.json()
        console.log(result)
        navigate('/')
        alert(`Signin successfully ${result.fullname}`)
    }
  return (
    <div>
        <h1>SignIn</h1>
        <br />
        <div className="con">
            <div className="formin">
                <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="submit" value="submit" id='submit' onClick={postData}  />
            </div>
        </div>
        <div className="concontent">
        <div className="content">
            <p>If you don't have any Account so please ?</p>  <Link to='/signup'>SignUp</Link>
        </div>
        </div>
    </div>
  )
}

export default Signin