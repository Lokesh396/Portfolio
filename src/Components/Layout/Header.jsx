import React from 'react'
import Hero from '../Sections/Hero'
import NavBar from './NavBar'
import Contact from './Contact'

const Header = ({scrollRef}) => {
  return (
    <div
      className="md:h-[calc(100vh-160px)] w-full md:w-[48%] flex flex-col justify-between md:sticky md:top-16 lg:top-24 z-10 overflow-y-auto mb-20 lg:mb-0"
    >
      <div className="flex flex-col gap-4">
        <Hero />
        <NavBar scrollRef={scrollRef} />
      </div>
      <Contact />
    </div>
  )
}

export default Header
