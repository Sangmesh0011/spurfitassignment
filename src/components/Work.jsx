import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Work = () => {

  const { ref:r1, inView:iv1 } = useInView();
  const { ref:r2, inView:iv2 } = useInView();
  const { ref:r3, inView:iv3 } = useInView();
  const { ref:r4, inView:iv4 } = useInView();
  const { ref:r5, inView:iv5 } = useInView();
  const { ref:r6, inView:iv6 } = useInView();
  
  
  return (
    <div className="flex flex-col justify-center items-center px-12 py-14 w-[98%] h-[140vh] bg-[#f2f0ff]">
      <div className="flex justify-between items-center px-4 w-full gap-10 mt-14 mb-32">
        <motion.span
        ref={r1}
        initial={{x:-150,scale:0}}
        animate={{x:iv1?0:-150,scale:iv1?1:0}}
        transition={{ duration: 1, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
        className="text-6xl font-bold">Work with us</motion.span>
        <div>
          <motion.div
          ref={r2}
          initial={{x:150,scale:0}}
          animate={{x:iv2?0:150,scale:iv2?1:0}}
          transition={{ duration: 1, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
          className="w-24">
              <img className="w-full" src="/ahead.jpg" alt="ahead" />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="left w-1/2 p-4">
            <div className="w-full flex flex-col justify-start items-start gap-8 bg-[#fefffe] p-8 rounded-lg">
                <img className="w-8" src="/Insect3.png" alt="." />
                <motion.span 
                ref={r3}
                initial={{y:-150,scale:0}}
                animate={{y:iv3?0:-150,scale:iv3?1:0}}
                transition={{ duration: 1, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
                className="font-semibold text-4xl">About</motion.span>
                <span className="text-xl text-slate-700">At ahead our goal is to make self-improvement fun and lasting. We know there is a way to make it work. And thats what ahead is about.</span>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-8 bg-[#fff7f1] mt-[-10px] p-8 rounded-lg">
                <motion.span 
                ref={r4}
                initial={{y:-150,scale:0}}
                animate={{y:iv4?0:-150,scale:iv4?1:0}}
                transition={{ duration: 1, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
                className="font-semibold text-4xl">Product</motion.span>
                <span className="text-xl text-slate-700">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</span>
            </div>
        </div>
        <div className="right w-1/2 p-4 h-[550px] overflow-y-scroll">
        <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>
            <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>
            <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>
            <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>
            <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>
            <div className="mb-6 w-[70%] ml-20 flex flex-col justify-start items-start gap-8 bg-[#fefffe] mt-[-10px] p-8 rounded-lg">
                <span className="font-semibold text-2xl">Power through, even when the going gets tough </span>
                <span className="text-md text-slate-800">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
