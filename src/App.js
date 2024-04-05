import { motion } from "framer-motion";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import Button from "./components/Button";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Meet from "./components/Meet";
import Steps from "./components/Steps";
import Wonder from "./components/Wonder";
import Work from "./components/Work";
import emotionsData from "./res/emotionsData";

function App() {
  const { ref:r1, inView:iv1 } = useInView();
  const { ref:r2, inView:iv2 } = useInView();
  const { ref:r3, inView:iv3 } = useInView();
  const { ref:r4, inView:iv4 } = useInView();
  const { ref:r5, inView:iv5 } = useInView();
  const { ref:r6, inView:iv6 } = useInView();




  const containerVariants = {
    hidden: { opacity: 0, y: -100,rotateX:50 },
    visible: { opacity: 1, y: 0,rotateX:0 },
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-col justify-center items-center px-8">
        <LandingPage />

        <div
        className="p-14 flex justify-evenly items-center gap-8 my-8">
          <motion.strong className="w-1/3 text-3xl"
          ref={r1}
          variants={containerVariants}
          initial="hidden"
          animate={iv1 ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}>EQ beats IQ</motion.strong>
          <motion.span
          ref={r2}
          variants={containerVariants}
          initial="hidden"
          animate={iv2 ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            People with high emotional intelligence (EQ) live more fulfilled
            lives.They tend to be happier and have healthier relationships.
          </motion.span>
          <motion.span
          ref={r3}
          variants={containerVariants}
          initial="hidden"
          animate={iv3 ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            They are more successful in their pursuits and make for inspiring
            leaders.According to science,they earn $29k a year.
          </motion.span>
        </div>

        <strong className="text-4xl ml-[-580px] mb-14 flex gap-6">
          Does this sound familiar...{" "}
          <img className="w-8 mt-[-6px]" src="/Insect2.png" alt="" />
        </strong>

        <div className="flex items-center mb-16">
          <div
          id="scroller"
            className="w-[80vw] h-full overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
          >
            {emotionsData.map((item, index) => {
              return (
                <motion.div
                key={index}
                  style={{ backgroundColor: item.color }}
                  initial={{x:100}}
                  animate={{x:-2000}}
                  transition={{
                    repeat: Infinity,
                    repeatType:"reverse",
                    duration: 20,
                    ease: "linear",
                  }}
                  className="rounded-lg mr-5 w-[300px] h-[200px] inline-flex flex-col text-wrap py-8 px-4 bg-slate-700"
                >
                  <span className="w-16 h-16">{item.emoji}</span>
                  <span className="text-xl mt-[-10px] font-semibold">
                    {item.title}
                  </span>
                  <span className="text-sm mt-3">{item.details}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
          <Meet/>
          <Steps/>

          <div className="p-14 flex justify-evenly items-center mt-72 gap-8 my-8 mb-32">
          <motion.strong 
          ref={r4}
          initial={{x:-200}}
          animate={{x:iv4?0:-200}}
          transition={{ duration: 1.2, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
          className="w-1/3 text-3xl">Be the best with EQ</motion.strong>
          <motion.span
          ref={r5}
          initial={{y:-100}}
          animate={{y:iv5?0:-100}}
          transition={{ duration: 1.2, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            Not having your own emotions under control might be holding you back.
          </motion.span>
          <motion.span
          ref={r6}
          initial={{x:200}}
          animate={{x:iv6?0:200}}
          transition={{ duration: 1.2, delay: 0.1,type: "spring", stiffness: 300, damping: 20, overshootClamping: true }}
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            Additionally, not understanding those of others stops you from being parent, friend you can be.
          </motion.span>
        </div>
      <Wonder/>


        <div className="flex flex-col justify-center items-center mb-48">
          <span className="text-lg">We take privacy seriously</span>
          <span className="text-3xl font-bold">Before you get started</span>
          <br />
          <span className="text-slate-500 w-[600px] text-center">"We will not share your answers with anyone (and will never tell you which friends said what about you!)"</span>
            <br />
            <span>with love, ahead</span>
            <br />
            <Button text="Start a test"/><br />
            <span className="text-slate-600 text-xs mt-[-10px]">Takes only 5 minutes</span>
        </div>


        <Work/>


            <div className="vacancies mt-36 mb-36">
            <h2 className="text-6xl text-yellow-700 mb-14">Open vacancies</h2>
            <div className="flex justify-center items-center gap-12">
              <div className="job w-[25vw] h-[300px] bg-[#fffbed] rounded-2xl flex flex-col p-10">
                <span className="text-3xl mb-10">Senior Full-Stack Engineer</span>
                <ol>
                  <li>1. Full Time Position</li>
                  <li>2. Berlin or remote</li>
                  <li>3. $65-85k, 0.5-1.50% equity share options</li>
                </ol>
              </div>
              <div className="job w-[25vw] h-[300px] bg-[#fffbed] rounded-2xl flex flex-col p-10">
                <span className="text-3xl mb-10">Senior Full-Stack Engineer</span>
                <ol>
                  <li>1. Full Time Position</li>
                  <li>2. Berlin or remote</li>
                  <li>3. $65-85k, 0.5-1.50% equity share options</li>
                </ol>
              </div>
              <div className="job w-[25vw] h-[300px] bg-[#fffbed] rounded-2xl flex flex-col p-10">
                <span className="text-3xl mb-10">Senior Full-Stack Engineer</span>
                <ol>
                  <li>1. Full Time Position</li>
                  <li>2. Berlin or remote</li>
                  <li>3. $65-85k, 0.5-1.50% equity share options</li>
                </ol>
              </div>

            </div>
            </div>


            <section className="w-screen h-1 bg-slate-500"></section>


            <div className="footer p-12 flex flex-col justify-center items-center gap-10">
              <img src="/ahead.jpg" alt="ahead" />
              <div className="flex justify-center items-center gap-12">
                <span className="flex justify-center items-center gap-1"><ImLocation />AuguststraBe 26, 10117 Berlin</span>
                <span className="flex justify-center items-center gap-1"><AiFillMail />hi@ahead-app.com</span>
              </div>
              <img src="download-on-the-app-store.svg" alt="AppStore" />
              
            </div>

            
      </div>


    </div>
  );
}

export default App;
