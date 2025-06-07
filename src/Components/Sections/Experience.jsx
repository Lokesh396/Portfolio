import React from 'react'
import ExperienceCard from './ExperienceCard'
import { LuArrowUpRight } from "react-icons/lu";

const experienceObj = [
    {
        id:1,
        position:"Junior Software Engineer",
        start_end:"JUN 2023 - PRESENT",
        company:"Way2news",
        description:"Built and scaled a full-fledged ad management system (like GAM) using Kafka, React, and PostgreSQL to handle millions of daily impressions. Developed real-time dashboards, automated WhatsApp reporting (via Gupshup API), and integrated 2FA with OTP and browser fingerprinting. Enabled role-based access, performance tracking, and revenue analytics for brands and sales teams. Delivered tools like market share trackers to drive data-informed decisions.",
        homepage:"",
        technologies:['JavaScript', 'Node.JS', 'Reactjs','PostgreSQL','MongoDB', 'Redis','Kafka']
    },
    {
        id:1,
        position:"Software Engineer Trainee",
        start_end:"OCT 2022 - JUN 2023",
        company:"Way2news",
        homepage:"",
        description:"Contributed to the development of Way2Ads by assisting in backend API design, database modeling, and frontend UI enhancements. Gained hands-on experience in full-stack development, performance optimization, and production-grade systems.",
        technologies:['JavaScript', 'Node.JS', 'Reactjs','PostgreSQL','MongoDB',]
    }
]
const Experience = () => {
  return (
   <section id='experience' className='lg:mb-16'>
    {experienceObj.map((experience) => <ExperienceCard key={experience.id} experience={experience}/>)}

    <span className='hover:text-teal-400 text-white flex gap-1 items-center cursor-pointer mt-5'>View Full Resume <span>{<LuArrowUpRight />}</span></span>
   </section>
  )
}

export default Experience