import React from 'react'
import Button from './Button'

const Header = () => {
  return (
<div className='flex justify-between items-center py-4 px-16'>
      <div className="w-16 cursor-pointer"><img className='w-16' src="/ahead.jpg" alt="logo" /></div>
      <div className="flex justify-center items-center gap-8">
        <span className='cursor-pointer'>Emotions</span>
        <span className='cursor-pointer'>Manifesto</span>
        <span className='cursor-pointer'>Self-awareness test</span>
        <span className='cursor-pointer'>Work with us</span>
      </div>
      <div className="cursor-pointer"><Button text="Download App"/></div>
    </div>
  )
}

export default Header
