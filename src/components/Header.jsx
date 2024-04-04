import React from 'react'
import Button from './Button'

const Header = () => {
  return (
<div className='flex justify-between items-center py-4 px-16'>
      <div className="w-16"><img className='w-16' src="/ahead.jpg" alt="logo" /></div>
      <div className="flex justify-center items-center gap-8">
        <span>Emotions</span>
        <span>Manifesto</span>
        <span>Self-awareness test</span>
        <span>Work with us</span>
      </div>
      <div className=""><Button text="Download App"/></div>
    </div>
  )
}

export default Header
