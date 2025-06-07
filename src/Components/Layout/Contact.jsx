import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare } from "react-icons/fa";

const socialObj = [
  {
    id:1,
    icon:"FaGithub",
    component:<FaGithub />,
    link:""
  },
  {
    id:2,
    icon:"FaLinkedin",
    component:<FaLinkedin />,
    link:""
  },
  {
    id:3,
    icon:"FaTwitterSquare",
    component:<FaTwitterSquare />,
    link:""
  },
  {
    id:4,
    icon:"FaInstagram",
    component:<FaInstagram />,
    link:""
  }
]

const Contact = () => {
  return (
    <ul className='flex gap-5 justify-start'>
        {socialObj.map((social)=>(
          <li className='text-2xl cursor-pointer text-slate-300 hover:text-slate-200' key={social.id}>{social.component}</li>
        ))}
    </ul>
  )
}

export default Contact