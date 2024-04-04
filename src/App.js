import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <div className="flex flex-col justify-center items-center px-8">
        <LandingPage/>

        <div className="p-14 flex justify-evenly items-center gap-8 my-8">
          <strong className="w-1/3 text-3xl">EQ beats IQ</strong>
          <span style={{wordBreak:"normal"}} className="w-1/4 text-gray-500 font-semibold">People with high emotional intelligence (EQ) live more fulfilled lives.They tend to be happier and have healthier relationships.</span>
          <span style={{wordBreak:"normal"}} className="w-1/4 text-gray-500 font-semibold">They are more successful in their pursuits and make for inspiring leaders.According to science,they earn $29k a year.</span>
        </div>

        <div className="flex flex-col my-2 justify-start w-full px-12 py-2">
          <strong className="text-3xl ml-8 flex gap-6">Does this sound familiar... <img className="w-8 mt-[-6px]" src="/Insect2.png" alt="" /></strong>
          <div className=""></div>
        </div>


      </div>
    </div>
  );
}

export default App;
