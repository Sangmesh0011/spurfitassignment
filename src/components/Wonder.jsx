import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Wonder = () => {
  const { ref:r1, inView:iv1 } = useInView();
  const { ref:r2, inView:iv2 } = useInView();
  const { ref:r3, inView:iv3 } = useInView();
  const { ref:r4, inView:iv4 } = useInView();
  const { ref:r5, inView:iv5 } = useInView();
  const { ref:r6, inView:iv6 } = useInView();
  const { ref:r7, inView:iv7 } = useInView();
  const { ref:r8, inView:iv8 } = useInView();
  const { ref:r9, inView:iv9 } = useInView();
  const { ref:r10, inView:iv10 } = useInView();
  const { ref:r11, inView:iv11 } = useInView();


  
  return (
    <div className="w-[90%] h-[120vh] bg-[#edf8fe] rounded-2xl p-12 flex flex-col justify-center items-center gap-4 mb-36">
      <motion.span
      ref={r1}
      initial={{scale:0}}
      animate={{scale:iv1?1:0}}
      transition={{ duration: 1.8, delay: 0.1,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
      className="text-xl">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills{" "}
      </motion.span>
      <motion.span 
      ref={r2}
      initial={{rotateX:0,scale:1.2}}
      animate={{rotateX:iv2?0:360,scale:iv2?1:1.2}}
      transition={{ duration: 1, delay: 0.1 }}
      className="text-5xl font-bold">
        Ever wondered what others think of you?
      </motion.span>
      <motion.img
      ref={r3}
      initial={{rotateX:0,scale:1.2}}
      animate={{rotateX:iv3?0:360,scale:iv3?1:1.2}}
      transition={{ duration: 1, delay: 0.1 }}
      className="mt-8" src="/Progress.png" alt="progress" />
      <div className="w-[70%] flex justify-between items-center gap-36 ml-10">
        <span className="text-center text-sm">
          Answer questions on your social skills
        </span>
        <span className="text-center text-sm ml-8">
          Let others anonymously answer the same questions about you
        </span>
        <span className="text-center text-sm">
          Find out where you and others see things the same way - and where not!
        </span>
      </div>
      <section className="-z-0 w-[60%] h-[40vh] rounded-2xl bg-white mt-12 flex justify-center items-center">
        <motion.span
        ref={r8}
        initial={{x:-200,scale:0}}
        animate={{scale:iv8?1:0,x:iv8?0:-200}}
        transition={{ duration: 1.8, delay: 0.1,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
        className="absolute px-4 py-2 left-44 ml-56 mt-[-110px] bg-blue-300 rounded-3xl">
          You
        </motion.span>
        <motion.span
        ref={r9}
        initial={{x:-100,scale:0}}
        animate={{scale:iv9?1:0,x:iv9?0:-100}}
        transition={{ duration: 1.8, delay: 0.3,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
         className="absolute px-4 py-2 left-64 ml-56 mt-[110px] bg-violet-300 rounded-3xl">
          Anonymous 1
        </motion.span>
        <motion.span
        ref={r10}
        initial={{x: 100,scale:0}}
        animate={{scale:iv10?1:0,x:iv10?0:100}}
        transition={{ duration: 1.8, delay: 0.5,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
         className="absolute px-4 py-2 right-44 mr-80 mt-[-110px] bg-red-300 rounded-3xl">
          Anonymous 2
        </motion.span>
        <motion.span
        ref={r11}
        initial={{x:300,scale:0}}
        animate={{scale:iv11?1:0,x:iv11?0:400}}
        transition={{ duration: 1.8, delay: 0.7,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
         className="absolute px-4 py-2 right-60 mr-44 mt-[110px] bg-green-300 rounded-3xl">
          Anonymous 3
        </motion.span>

        <section className="flex gap-28">
          <section className="-z-10 w-[32%] h-1 absolute ml-5 mt-3 bg-slate-600"></section>
          <motion.span 
          ref={r4}
      initial={{scale:0}}
      animate={{scale:iv4?1:0}}
      transition={{ duration: 1.8, delay: 0.1,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
          className="w-8 h-8 rounded-full bg-blue-300"></motion.span>
          <motion.span 
          ref={r5}
      initial={{scale:0}}
      animate={{scale:iv5?1:0}}
      transition={{ duration: 1.8, delay: 0.3,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
          className="w-8 h-8 rounded-full bg-violet-300"></motion.span>
          <motion.span 
          ref={r6}
      initial={{scale:0}}
      animate={{scale:iv6?1:0}}
      transition={{ duration: 1.8, delay: 0.5,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
          className="w-8 h-8 rounded-full bg-red-300"></motion.span>
          <motion.span 
          ref={r7}
      initial={{scale:0}}
      animate={{scale:iv7?1:0}}
      transition={{ duration: 1.8, delay: 0.7,type: "spring", stiffness: 200, damping: 20, overshootClamping: true }}
          className="w-8 h-8 rounded-full bg-green-300"></motion.span>
        </section>
      </section>
    </div>
  );
};

export default Wonder;
