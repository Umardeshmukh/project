import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navigation/navbar";

gsap.registerPlugin(useGSAP);

const App = () => {


  

  return (
    <div className="text-white bg-gray-500">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
    </div>
  );
};

export default App;