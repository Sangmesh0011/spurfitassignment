import React from 'react'

const Button = ({text}) => {
  return (
    <div className='w-auto h-auto p-4 text-white rounded-full bg-black items-center text-sm'>
      {text}
    </div>
  )
}

export default Button