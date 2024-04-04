import React from 'react'

const BoxA = ({color,emoji,title,details}) => {
  return (
    <div style={{backgroundColor:{}}} className={`w-full h-full flex flex-col justify-start items-start p-4 gap-3`}>
      <span>{emoji}</span>
      <span style={{wordWrap:"break-word"}}>{title}</span>
      <span style={{wordWrap:"break-word"}} className='text-sm'>{details}</span>
    </div>
  )
}

export default BoxA
