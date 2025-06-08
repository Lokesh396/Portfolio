import React from 'react'
import ProjectCard from './ProjectCard'
import { LuArrowUpRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { projectsObj } from '../utils/data';

const Projects = () => {
  return (
   <section id='projects' className='lg:mb-16'>
      <h5 className='text-left py-4 sticky top-0 bg-slate-900 text-xl font-semibold md:hidden text-white'>PROJECTS</h5>
    {projectsObj.map((project) => <ProjectCard key={project.id} project={project}/>)}

    <NavLink to='/archive' className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Full Projects Archive <span>{<LuArrowUpRight />}</span></NavLink>
   </section>
  )
}

export default Projects