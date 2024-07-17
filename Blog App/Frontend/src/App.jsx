import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Addblog from './Addblog'
import Removeblog from './Removeblog'
import Update from './Update'
import Signin from './Signin'
import Signup from './Signup'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/addblog' element={<Addblog/>}></Route>
  <Route path='/removeblog' element={<Removeblog/>}></Route>
  <Route path='/update/:id' element={<Update/>}/>
  <Route path='/signin' element={<Signin/>}>Signin</Route>
  <Route path='/signup' element={<Signup/>}>Signup</Route>
</Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
