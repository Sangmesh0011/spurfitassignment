import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Steps = () => {
  const { ref:r1, inView:iv1 } = useInView();
  const { ref:r2, inView:iv2 } = useInView();

      function highlightAuto(index) {
        const dots = document.querySelectorAll('.dot');
        const dataAll = document.querySelectorAll('.data');
    
        dataAll.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('opacity-40');
                item.classList.add('opacity-100');
            } else {
                item.classList.remove('opacity-100');
                item.classList.add('opacity-40');
            }
        });
        dots.forEach(dot => {
            dot.classList.remove('bg-blue-800', 'w-12', 'h-12', 'transition-all', 'ease-in-out', 'duration-2');
        });
    
        dots[index].classList.add('bg-blue-800', 'w-12', 'h-12', 'transition-all', 'duration-2', 'ease-in-out');
        const nextIndex = (index + 1) % dots.length;
         setTimeout(() => {
            highlightAuto(nextIndex);
        }, 1600);
    }
    
    useEffect(() => {        
      return () => {
        highlightAuto(0);
      }
    }, [])
    
    
    
  return (
    <div className="mt-28 flex flex-col w-[85%] p-12 h-[110vh]">
      <motion.img 
      ref={r2}
      initial={{x:100,rotateZ:360}}
      animate={{rotateZ:iv2?0:150,x:iv2?0:100}}
      transition={{duration:2,delay:0.2,type: "spring", stiffness: 300, damping: 20, overshootClamping: true}}
      className="w-8 absolute right-96" src="/Insect2.png" alt="." />
      <div className="flex flex-col justify-start items-start">
        <span 
         className="text-xl">
          Wrong with self-improvement and how we're fixing it.
        </span>
        <motion.h2
        ref={r1}
        initial={{opacity:0,y:-10,scale:0}}
        animate={{opacity:iv1?1:0,y:iv1?0:-400,scale:iv1?1:0}}
        transition={{duration:2,delay:0.2,type: "spring", stiffness: 300, damping: 20, overshootClamping: true}}
        className="text-6xl font-bold mt-4">Self-Improvement. Ugh.</motion.h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-24 space-y-10">
        <section className="h-[470px] w-2 bg-blue-500 absolute mt-6 ml-[-535px] -z-50"></section>
        <div className="flex justify-center items-center gap-24 ml-40">
          <div className="dot w-6 h-6 rounded-full bg-blue-500"></div>
          <div
            className="data flex flex-col justify-normal items-start gap-4 w-[600px] opacity-40"
          >
            <span className="font-bold text-xl w-96">It is not easy as 1-2-3.</span>
            <span className="w-96">
              The journey of change may be log, but our sessions are quick. We
              get to the point and tell you what you want to know(and anything
              else).
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-24 ml-40">
          <div className="dot w-6 h-6 rounded-full bg-blue-500"></div>
          <div
            className="data flex flex-col justify-normal items-start gap-4 w-[600px]"
          >
            <span className="font-bold text-xl w-96">Old habits are hard to break.</span>
            <span  className="w-96">
              And bad behaviors die hard. Fortunately, we give you a great, science-backed techniques to use.
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-24 ml-40">
          <div className="dot w-6 h-6 rounded-full bg-blue-500"></div>
          <div
            className="data flex flex-col justify-normal items-start gap-4 w-[600px]"
          >
            <span className="font-bold text-xl w-96">You and you motivation don not have a long term relationship.</span>
            <span  className="w-96">
              Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-24 ml-40">
          <div className="dot w-6 h-6 rounded-full bg-blue-500"></div>
          <div
            className="data flex flex-col justify-normal items-start gap-4 w-[600px]"
          >
            <span className="font-bold text-xl w-96">It is not easy as 1-2-3.</span>
            <span  className="w-96">
              The journey of change may be log, but our sessions are quick. We
              get to the point and tell you what you want to know(and anything
              else).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
