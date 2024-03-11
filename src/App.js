import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageGenerate from "./pages/ImageGeneration";
import Project from "./pages/TextGeneration";
import About from "./pages/About";

import Footer from "./components/Footer";
// import AnimeCursor from "./components/AnimeCursor";

function App() {
  return (
    // bg-gradient-to-r from-slate-900 via-blue-400 to-slate-900"
    <div  className=" bg-zinc-900">
      {/* <AnimeCursor /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagegenerate" element={<ImageGenerate />} />
        <Route path="/textgenerate" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
