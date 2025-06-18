import React from 'react'
import Hero from '../Sections/Hero'
import NavBar from './NavBar'
import Contact from './Contact'

const Header = ({scrollRef}) => {
  return (
    <div
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
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
