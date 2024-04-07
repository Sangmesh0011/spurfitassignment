import React from "react";
import { useInView } from "react-intersection-observer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import App2 from "./components/App2";
import Header from "./components/Header";

function App({isAdmin}) {
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
  const { ref:r13, inView:iv13 } = useInView();
  const { ref:r14, inView:iv14 } = useInView();
  const { ref:r15, inView:iv15 } = useInView();

  const containerVariants = {
    hidden: { opacity: 0, y: -100,rotateX:50 },
    visible: { opacity: 1, y: 0,rotateX:0 },
  };

  return (
    <div className="flex flex-col overflow-hidden">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<App2/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
      <Header />
    </div>
  );
}

export default App;
