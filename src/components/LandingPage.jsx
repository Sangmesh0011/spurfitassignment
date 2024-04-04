import React from 'react'

const LandingPage = () => {
  return (
    <div className='rounded-3xl bg-[#eeeaff] h-[100vh] w-full flex justify-center items-center gap-4 p-10'>
        <section className='hidden border-dotted border-2 border-black w-[400px] h-[400px] rounded-full absolute right-[130px] top-[30%]'></section>
      <div className="flex flex-col w-1/2">
        <span>Ahead app</span>
        <strong style={{lineHeight:"60px"}} className='text-[58px] w-[500px] ml-[-5px]'>Master your life by mastering Emotions</strong>
        <div className="flex items-center gap-6">
        <img className='w-28 my-6' src='/download-on-the-app-store.svg' alt='Get App On App Store'></img>
        <div className="flex flex-col">
            <img className='h-5 w-24' src="/Stars.png" alt="stars" />
            <span className='text-sm'>100+ AppStore Reviews</span>
        </div>
        </div>
      </div>
      <div className="w-1/2">
      <img className='absolute top-[60%] left-[76%] w-16' src="/Insect1.png" alt="." />
        <img className='absolute top-[40%] left-[60%] w-12' src="/Insect2.png" alt="." />
        <img className='absolute top-[78%] left-[50%] w-20' src="/Insect3.png" alt="." />
      </div>
    </div>
  )
}

export default LandingPage
