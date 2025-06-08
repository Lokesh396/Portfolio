import React from 'react'
import { heroName, heroposition, heroTagLine } from '../utils/data'

const Hero = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-slate-200">
       {heroName}
      </h1>
      <h2 className='mb-4 text-white text-sm'>{heroposition}</h2>
      <p className="text-sm md:text-lg max-w-sm mb-6 text-slate-400 ">
        {heroTagLine}
      </p>
    
    </section>
  )
}

export default Hero