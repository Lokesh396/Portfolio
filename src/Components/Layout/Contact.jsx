import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const socialObj = [
  {
    id:1,
    icon:"FaGithub",
    component:<FaGithub />,
    link:"https://github.com/Lokesh396"
  },
  {
    id:2,
    icon:"FaLinkedin",
    component:<FaLinkedin />,
    link:"https://www.linkedin.com/in/c-lokesh-kumar-reddy-30a5681a1/"
  },
  {
    id:3,
    icon:"FaTwitterSquare",
    component:<FaTwitterSquare />,
    link:"https://x.com/Lokeshkr55?t=wxpWUSjo6hcUvt6Q0kxXYQ&s=09"
  },
  {
    id:4,
    icon:"FaInstagram",
    component:<FaInstagram />,
    link:"https://www.instagram.com/lokeshkumarreddy_5/"
  }
]

const Contact = () => {
  return (
    <ul className='flex gap-5 justify-start'>
        {socialObj.map((social)=>(
          <Link className='text-2xl cursor-pointer text-slate-300 hover:text-slate-200' target='_blank' to={social.link} key={social.id}>{social.component}</Link>
        ))}
    </ul>
  )
}

export default Contact