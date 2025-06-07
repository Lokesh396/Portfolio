import React from 'react'

function Button({content}) {
  return (
    <span className='px-2 py-1 text-xs rounded-2xl bg-teal-400/10 text-teal-300 hover:text-teal-400'>{content}</span>
  )
}

export default Button