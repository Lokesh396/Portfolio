import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Archivepage from './pages/Archivepage'
import CursorGradient from '../CursorGradient'

const App = () => {
  return (
    <main className='!font-primary relative'>
      <CursorGradient />
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archivepage />} />
    </Routes>
   </BrowserRouter>
   </main>
  )
}

export default App