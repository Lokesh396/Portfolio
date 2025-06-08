import React from 'react'
import ExperienceCard from './ExperienceCard'
import { LuArrowUpRight } from "react-icons/lu";
import { experienceObj } from '../utils/data';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
   <section id='experience' className='lg:mb-16'>
      <h5 className='text-left py-4 sticky top-0 bg-slate-900 text-xl font-semibold md:hidden text-white'>EXPERIENCE</h5>
    {experienceObj.map((experience) => <ExperienceCard key={experience.id} experience={experience}/>)}

    <Link to='resume.pdf' target='_blank' className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Full Resume <span>{<LuArrowUpRight />}</span></Link>
   </section>
  )
}

export default Experience