import { motion } from "framer-motion";
import React from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Meet from "./components/Meet";
import Steps from "./components/Steps";
import Wonder from "./components/Wonder";
import emotionsData from "./res/emotionsData";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center px-8">
        <LandingPage />

        <div className="p-14 flex justify-evenly items-center gap-8 my-8">
          <strong className="w-1/3 text-3xl">EQ beats IQ</strong>
          <span
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            People with high emotional intelligence (EQ) live more fulfilled
            lives.They tend to be happier and have healthier relationships.
          </span>
          <span
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            They are more successful in their pursuits and make for inspiring
            leaders.According to science,they earn $29k a year.
          </span>
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

          <div className="p-14 flex justify-evenly items-center mt-72 gap-8 my-8 mb-60">
          <strong className="w-1/3 text-3xl">Be the best with EQ</strong>
          <span
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            Not having your own emotions under control might be holding you back.
          </span>
          <span
            style={{ wordBreak: "normal" }}
            className="w-1/4 text-gray-500 font-semibold"
          >
            Additionally, not understanding those of others stops you from being parent, friend you can be.
          </span>
        </div>
      <Wonder/>


        <div className="flex flex-col justify-center items-center">
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

      </div>


    </div>
  );
}

export default App;
