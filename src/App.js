import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import App2 from "./components/App2";
import Header from "./components/Header";

function App({isAdmin}) {
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
