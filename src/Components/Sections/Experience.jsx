import React from 'react'
import ExperienceCard from './ExperienceCard'
import { LuArrowUpRight } from "react-icons/lu";
import { experienceObj } from '../utils/data';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
   <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <h5 className='text-left mb-2 py-4 sticky top-0 bg-slate-900 text-base text-white font-semibold lg:hidden'>EXPERIENCE</h5>
    {experienceObj.map((experience) => <ExperienceCard key={experience.id} experience={experience}/>)}

    <Link to='resume.pdf' target='_blank' className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Full Resume <span>{<LuArrowUpRight />}</span></Link>
   </section>
  )
}

export default Experience