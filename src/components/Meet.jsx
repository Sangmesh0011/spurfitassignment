import { easeInOut, motion } from "framer-motion";
import React from 'react';
import { useInView } from "react-intersection-observer";

const Meet = () => {
  const { ref:r1, inView:iv1 } = useInView();
  const { ref:r2, inView:iv2 } = useInView();
  const { ref:r3, inView:iv3 } = useInView();
  const { ref:r4, inView:iv4 } = useInView();



  return (
    <div className='bg-[#fff7f1] rounded-2xl w-[86%] h-[90vh] mt-16 py-32 px-14 mb-10'>
        <motion.img 
        ref={r1}
        initial={{rotateZ:0}}
        animate={{rotateZ:iv1?360:0}}
        transition={{duration:2,repeat:Infinity,repeatType:"mirror"}}
        className='absolute right-32 mr-16 mt-[-160px]' src="/Flower.png" alt="." />
      <div className="">
        <span>Built out of frustration</span>
        <motion.h2
        ref={r2}
        initial={{scale:1,rotateX:120}}
        animate={{scale:iv2?1:2.5,rotateX: iv2?360:0}}
        transition={{duration:0.8}}
        className='text-[60px] font-bold'>Meet the ahead app</motion.h2>
      </div>
      <div className="flex mt-20">
        <div className="w-1/2">
            <section className='w-52 h-52 bg-[#f7f6f7] rounded-full ml-[90px] flex justify-center items-center'>
            <section className='w-44 h-44 bg-white rounded-full flex justify-center items-center'>
                <motion.img 
                ref={r3}
                initial={{rotateZ:0}}
                animate={{rotateZ:iv3?360:0}}
                transition={{duration:2,repeat:Infinity,repeatType:"loop"}}
                className='w-16' src="/Insect1.png" alt="." />
            </section>
            </section>
            <img className='absolute w-12 right-36 rotate-12' src="Semi1.png" alt="." />
            <img className='w-12 right-40 rotate-45 ml-[600px] mt-[-400px]' src="Semi1.png" alt="." />

        </div>
        <motion.div
        ref={r4}
        initial={{scale:0}}
        animate={{scale:iv4?1:0}}
        transition={{duration:0.6,easeInOut}}
        className="w-1/2 flex flex-col p-14 mt-[-30px]"><span
        
        >A personalized pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.</span>
        <br />
        <span>Think it of as a pocket cheerleader towards a better,more fulfilling.</span></motion.div>
      </div>
    </div>
  )
}

export default Meet
