import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Archivepage from './pages/Archivepage'
import CursorGradient from '../CursorGradient'

// GitHub Pages serves the site from a sub-path (/Portfolio/), so the router
// must be mounted at the same base or every route redirect 404s.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

const App = () => {
  return (
    <main className='!font-primary relative'>
      <CursorGradient />
   <BrowserRouter basename={basename}>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archivepage />} />
        <Route path ='*' element={<Home />} />
     </Routes>
   </BrowserRouter>
   </main>
  )
}

export default App