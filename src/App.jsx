import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Archivepage from './pages/Archivepage'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archivepage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App