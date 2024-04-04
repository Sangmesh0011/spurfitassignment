import React from 'react'

const Wonder = () => {
  return (
    <div className='w-[90%] h-[120vh] bg-[#edf8fe] rounded-2xl p-12 flex flex-col justify-center items-center gap-4 mb-36'>
        <span className='text-xl'>Let your friends, family, and co-workers (anonymously) rate your social skills </span>
        <span className='text-5xl font-bold'>Ever wondered what others think of you?</span>
        <img className='mt-8' src="/Progress.png" alt="progress" />
        <div className="w-[70%] flex justify-between items-center gap-36 ml-10">
            <span className='text-center text-sm'>Answer questions on your social skills</span>
            <span className='text-center text-sm ml-8'>Let others anonymously answer the same questions about you</span>
            <span className='text-center text-sm'>Find out where you and others see things the same way - and where not!</span>
        </div>
        <section className='-z-0 w-[60%] h-[40vh] rounded-2xl bg-white mt-12 flex justify-center items-center'>
            <span className='absolute px-4 py-2 left-44 ml-56 mt-[-110px] bg-blue-300 rounded-3xl'>You</span>
            <span className='absolute px-4 py-2 left-64 ml-56 mt-[110px] bg-violet-300 rounded-3xl'>Anonymous 1</span>
            <span className='absolute px-4 py-2 right-44 mr-80 mt-[-110px] bg-red-300 rounded-3xl'>Anonymous 2</span>
            <span className='absolute px-4 py-2 right-60 mr-44 mt-[110px] bg-green-300 rounded-3xl'>Anonymous 3</span>

            <section className='flex gap-28'>
                <section className='-z-10 w-[32%] h-1 absolute ml-5 mt-3 bg-slate-600'></section>
                <span className="w-8 h-8 rounded-full bg-blue-300"></span>
                <span className="w-8 h-8 rounded-full bg-violet-300"></span>
                <span className="w-8 h-8 rounded-full bg-red-300"></span>
                <span className="w-8 h-8 rounded-full bg-green-300"></span>
            </section>
        </section>
    </div>
  )
}

export default Wonder
