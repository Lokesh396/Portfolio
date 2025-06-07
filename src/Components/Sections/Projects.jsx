import React from 'react'
import ProjectCard from './ProjectCard'
import { LuArrowUpRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const projectsObj = [
    {
        id:1,
        project_name:"way2newsAds",
        company:"Way2news",
        description:"Built and scaled a full-fledged ad management system (like GAM) using Kafka, React, and PostgreSQL to handle millions of daily impressions. Developed real-time dashboards, automated WhatsApp reporting (via Gupshup API), and integrated 2FA with OTP and browser fingerprinting. Enabled role-based access, performance tracking, and revenue analytics for brands and sales teams. Delivered tools like market share trackers to drive data-informed decisions.",
        homepage:"",
        technologies:['JavaScript', 'Node.JS', 'Reactjs','PostgreSQL','MongoDB', 'Redis','Kafka']
    },
    {
        id:2,
        project_name:"way2Locations",
        company:"Way2news",
        description:"Built and scaled a full-fledged ad management system (like GAM) using Kafka, React, and PostgreSQL to handle millions of daily impressions. Developed real-time dashboards, automated WhatsApp reporting (via Gupshup API), and integrated 2FA with OTP and browser fingerprinting. Enabled role-based access, performance tracking, and revenue analytics for brands and sales teams. Delivered tools like market share trackers to drive data-informed decisions.",
        homepage:"",
        technologies:['JavaScript', 'Node.JS', 'Reactjs','MYSQL','MongoDB']
    },
    {
        id:1,
        project_name:"Youtube Shorts Automation",
        company:"Personal",
        homepage:"",
        description:"Contributed to the development of Way2Ads by assisting in backend API design, database modeling, and frontend UI enhancements. Gained hands-on experience in full-stack development, performance optimization, and production-grade systems.",
        technologies:['Python', 'Node.JS', 'Flask','Reactjs','React-Query','MongoDB','moviepy']
    }
]
const Projects = () => {
  return (
   <section id='projects' className='lg:mb-16'>
    {projectsObj.map((project) => <ProjectCard key={project.id} project={project}/>)}

    <NavLink to='/archive' className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Project Archive <span>{<LuArrowUpRight />}</span></NavLink>
   </section>
  )
}

export default Projects