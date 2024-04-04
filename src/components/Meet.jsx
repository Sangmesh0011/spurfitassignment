import React from 'react'

const Meet = () => {
  return (
    <div className='bg-[#fff7f1] rounded-2xl w-[86%] h-[90vh] mt-16 py-32 px-14 mb-10'>
        <img className='absolute right-32 mr-16 mt-[-160px]' src="/Flower.png" alt="." />
      <div className="">
        <span>Built out of frustration</span>
        <h2 className='text-[60px] font-bold'>Meet the ahead app</h2>
      </div>
      <div className="flex mt-20">
        <div className="w-1/2">
            <section className='w-52 h-52 bg-[#f7f6f7] rounded-full ml-[90px] flex justify-center items-center'>
            <section className='w-44 h-44 bg-white rounded-full flex justify-center items-center'>
                <img className='w-16' src="/Insect1.png" alt="." />
            </section>
            </section>
            <img className='absolute w-12 right-36 rotate-12' src="Semi1.png" alt="." />
            <img className='w-12 right-40 rotate-45 ml-[600px] mt-[-400px]' src="Semi1.png" alt="." />

        </div>
        <div className="w-1/2 flex flex-col p-14 mt-[-30px]"><span>A personalized pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.</span>
        <br />
        <span>Think it of as a pocket cheerleader towards a better,more fulfilling.</span></div>
      </div>
    </div>
  )
}

export default Meet
