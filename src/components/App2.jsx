import { easeInOut, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import emotionsData from "../res/emotionsData";
import Button from "./Button";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Meet from "./Meet";
import Steps from "./Steps";
import Wonder from "./Wonder";
import Work from "./Work";
import WorkBox from "./WorkBox";


function App2({isAdmin}) {
  
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
  const { ref:r12, inView:iv12 } = useInView();

  const [adding,setAdding]=useState(false)
  const [id,setId]=useState("")
  const [title,setTitle]=useState("")
  const [d1,setD1]=useState("")
  const [d2,setD2]=useState("")
  const [d3,setD3]=useState("")

  const [data,setData]=useState([])

  const handleSubmit=()=>{
    console.log("clicked submit")
    var toAdd={
      id: id,
      title: title,
      d1: d1,
      d2: d2,
      d3: d3,
    }
    const newWorkData=[...data,toAdd];
    localStorage.setItem("localData",JSON.stringify(newWorkData))
    setData([...data,toAdd])
    setId('')
    setTitle('')
    setD1('')
    setD2('')
    setD3('')
  }

  useEffect(() => {

    var stored=localStorage.getItem("localData")
    if(stored){
       setData(JSON.parse(stored))
    }
  }, [setData])
  

  const handleDelete=(idr)=>{
    const modifiedData=data.filter((item)=>item.id !== idr)
    setData(modifiedData)
    localStorage.setItem('localData',JSON.stringify(modifiedData))
  }  

  const idRef=useRef()
  const titleRef=useRef()
  const d1Ref=useRef()
  const d2Ref=useRef()
  const d3Ref=useRef()

  const [editing,setEditing]=useState(false)

  const handleEditData=async(idr)=>{
    await setAdding(true)
    const fromLocal=localStorage.getItem("localData")
    const items=JSON.parse(fromLocal)
    const oneToEdit=items.find((item)=>item.id===idr)
    console.log("Found for edit",oneToEdit)
    console.log(idRef.current)
    idRef.current.value=oneToEdit.id;
    idRef.current.style.visibility="hidden";

    titleRef.current.value=oneToEdit.title;
    d1Ref.current.value=oneToEdit.d1;
    d2Ref.current.value=oneToEdit.d2;
    d3Ref.current.value=oneToEdit.d3;
    setId(oneToEdit.id)
    setTitle(oneToEdit.title)
    setD1(oneToEdit.d1)
    setD2(oneToEdit.d2)
    setD3(oneToEdit.d3)

  }

  const handleSave=()=>{
    const updatedOne={
      id: id,
      title: title,
      d1: d1,
      d2: d2,
      d3: d3,
    }
    const storage = localStorage.getItem("localData");
    const items=JSON.parse(storage)

    const editIndex=items.findIndex((item)=>item.id===id)

    if(editIndex !== -1 ){
      items[editIndex]=updatedOne;
      localStorage.setItem("localData", JSON.stringify(items));
    }
    setAdding(false)
    setId('')
    setTitle('')
    setD1('')
    setD2('')
    setD3('')
    window.location.reload();

  }

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
          <motion.span 
          ref={r7}
          initial={{opacity:0}}
          animate={{opacity:iv7?100:0}}
          transition={{ duration: 1, delay: 0.3,easeInOut}}
          className="text-lg">We take privacy seriously</motion.span>
          <motion.span
          ref={r8}
          initial={{opacity:0}}
          animate={{opacity:iv8?100:0}}
          transition={{ duration: 1, delay: 0.5,easeInOut}}
          className="text-3xl font-bold">Before you get started</motion.span>
          <br />
          <motion.span 
          ref={r9}
          initial={{opacity:0}}
          animate={{opacity:iv9?100:0}}
          transition={{ duration: 1, delay: 0.7,easeInOut}}
          className="text-slate-500 w-[600px] text-center">"We will not share your answers with anyone (and will never tell you which friends said what about you!)"</motion.span>
            <br />
            <motion.span
            ref={r10}
            initial={{opacity:0}}
            animate={{opacity:iv10?100:0}}
            transition={{ duration: 1, delay: 0.9,easeInOut}}
            >with love, ahead</motion.span>
            <br />
            <motion.div
            ref={r11}
            initial={{opacity:0}}
            animate={{opacity:iv11?100:0}}
            transition={{ duration: 1, delay: 1.1,easeInOut}}
            className="cursor-pointer">
            <Button text="Start a test"/>
            </motion.div>
            <br />
            <motion.span
            ref={r12}
            initial={{opacity:0}}
            animate={{opacity:iv12?100:0}}
            transition={{ duration: 1, delay: 1.3,easeInOut}}
            className="text-slate-600 text-xs mt-[-10px]">Takes only 5 minutes</motion.span>
        </div>
        <Work/>

  


       <div id="work" className="vacancies mt-36 mb-36">
                {console.log(isAdmin)}
                {isAdmin && <span className="text-xl px-4 py-2 bg-black text-white rounded-md cursor-pointer" onClick={()=>setAdding(!adding)}>Add work</span>}
            <h2 className="text-6xl text-yellow-700 mt-4 mb-14">Open vacancies</h2>
            <div className="flex justify-center items-center flex-wrap gap-12">
              {adding && (<motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1,easeInOut}}
              className="w-72 h-fit p-6 flex flex-col justify-center items-center border-2 shadow-2xl rounded-lg">
              <input id="id" ref={idRef} className="border-2 rounded-lg p-2 mb-4" type="text" value={id} placeholder="Job ID" onChange={(e)=>{setId(e.target.value)}} />
                <input id="title" ref={titleRef} className="border-2 rounded-lg p-2 mb-4" type="text" value={title} placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} />
                <input id="d1" ref={d1Ref} className="border-2 rounded-lg p-2 mb-4" type="text" value={d1} placeholder="type" onChange={(e)=>{setD1(e.target.value)}} />
                <input id="d2" ref={d2Ref} className="border-2 rounded-lg p-2 mb-4" type="text" value={d2} placeholder="location" onChange={(e)=>{setD2(e.target.value)}} />
                <input id="d3" ref={d3Ref} className="border-2 rounded-lg p-2 mb-4" type="text" value={d3} placeholder="pay" onChange={(e)=>{setD3(e.target.value)}} />  
            
                {!editing?(<button className="px-4 py-2 w-[85%] bg-black text-white rounded-md" onClick={handleSubmit}>Add</button>):(<button className="px-4 py-2 w-[85%] bg-black text-white rounded-md" onClick={handleSave}>Save</button>)}
                
              </motion.div>)}
              {              
              data.map((item)=>{
                  return <WorkBox key={item.id} isAdmin={isAdmin} title={item.title} d1={item.d1} d2={item.d2} d3={item.d3} onRemove={()=>handleDelete(item.id)} onEdit={()=>{setEditing(true);handleEditData(item.id)}}/>
              })}

            </div>
            </div>


            <section className="w-screen h-[1px] bg-slate-500"></section>


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

export default App2;
