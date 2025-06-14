import React from 'react'
import ProjectCard from './ProjectCard'
import { LuArrowUpRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { projectsObj } from '../utils/data';

const Projects = () => {
  return (
   <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <h5 className='text-left mb-2 py-4 sticky top-0 bg-slate-900 text-white text-base font-semibold lg:hidden'>PROJECTS</h5>
    {projectsObj.map((project) => <ProjectCard key={project.id} project={project}/>)}

    <NavLink to='/archive' className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Full Projects Archive <span>{<LuArrowUpRight />}</span></NavLink>
   </section>
  )
}

export default Projects