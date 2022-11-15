import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Quotes from '../pages/Quotes/Quotes'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quotes/:stockId' element={<Quotes/>}/>
    </Routes>
  )
}

export default AllRoutes