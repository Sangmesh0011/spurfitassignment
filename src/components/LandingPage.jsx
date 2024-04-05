import { easeInOut, motion } from "framer-motion";
import React, { useRef } from 'react';
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
    const det="Master your life by mastering     Emotions"
    const { ref, inView } = useInView();
    const containerRef = useRef();
    const containerVariants = {
        v1: { x: -500 },
        v2: { x: 0 },
      };

      const charVariants1 = {
        initial: { opacity: 0,scale:1.6, letterSpacing: "8px"},
        animate: { opacity: 1,scale:1 ,letterSpacing: "6px"},
        transition: {duration: 0.5}
      };

  return (
    <div className='rounded-3xl bg-[#eeeaff] h-[100vh] w-full flex justify-center items-center gap-4 p-10' ref={containerRef}>
        <section className='hidden border-dotted border-2 border-black w-[400px] h-[400px] rounded-full absolute right-[130px] top-[30%]'></section>
      <div className="flex flex-col w-1/2">
        <motion.span 
        ref={ref}
        variants={containerVariants}
        initial="v1"
        animate={inView ? "v2" : "v1"}
        transition={{ duration: 1, delay: 0.6, ease: easeInOut }}>Ahead app</motion.span>


        <strong style={{lineHeight:"60px",letterSpacing:"0px",wordBreak:"break-word"}} className='text-[58px] w-[535px] ml-[-5px]'>
        {det.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={char === " " ? null : charVariants1}
          initial={char === " " ? null : "initial"}
          animate={char === " " ? null : "animate"}
          transition={{ duration: 0.05, delay: index * 0.03 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
        </strong>
        
        
        <motion.div ref={ref}
        variants={containerVariants}
        initial="v1"
        animate={inView ? "v2" : "v1"}
        transition={{ duration: 1, delay: 0.6, ease: easeInOut }} className="flex items-center gap-6">
        <img className='w-28 my-6' src='/download-on-the-app-store.svg' alt='Get App On App Store'></img>
        <div className="flex flex-col">
            <img className='h-5 w-24' src="/Stars.png" alt="stars" />
            <span className='text-sm'>100+ AppStore Reviews</span>
        </div>
        </motion.div>
      </div>
      <div className="w-1/2">
      <motion.img 
      initial={{x:0,rotateY:"0deg"}}
      animate={{x:1,rotateZ:"-20deg"}}
      transition={{duration:1,repeat:Infinity,repeatType:"reverse",delay:0.2}}
      className='absolute top-[60%] left-[76%] w-16' src="/Insect1.png" alt="." />
        <motion.img 
        initial={{x:0,rotateY:"0deg"}}
        animate={{x:1,rotateZ:"-20deg"}}
        transition={{duration:1,repeat:Infinity,repeatType:"reverse"}}className='absolute top-[40%] left-[60%] w-12' src="/Insect2.png" alt="." />
        <motion.img 
        initial={{x:0,rotateY:"0deg"}}
        animate={{x:1,rotateZ:"-20deg"}}
        transition={{duration:1,repeat:Infinity,repeatType:"reverse",delay:0.7}}className='absolute top-[78%] left-[50%] w-20' src="/Insect3.png" alt="." />
      </div>
    </div>
  )
}

export default LandingPage
