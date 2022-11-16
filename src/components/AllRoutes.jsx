import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Quotes from '../pages/Quotes/Quotes'
import Signup from '../pages/Signup/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/quotes/:stockId' element={<Quotes/>}/>
    </Routes>
  )
}

export default AllRoutes