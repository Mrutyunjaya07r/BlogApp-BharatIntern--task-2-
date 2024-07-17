import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <img src="blog.png" alt="blogimg" />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addblog'>Create Blog</Link></li>
                <li><Link to='/removeblog'>Delete Blog</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/signin'>Signin</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar