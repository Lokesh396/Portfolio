import React from 'react'
import Hero from '../Sections/Hero'
import NavBar from './NavBar'
import Contact from './Contact'

const Header = ({ref}) => {
  return (
    <div className="md:h-[calc(100vh-160px)] w-full md:w-[48%] flex flex-col justify-between md:sticky top-16 z-10 overflow-y-auto">
    <div className="flex flex-col gap-4">
      <Hero />
      <NavBar mainRef={ref} />
    </div>
    <Contact />
  </div>
  )
}

export default Header