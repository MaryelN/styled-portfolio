import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Formation from "./sections/Formation";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route target="/#Hero" element={<Hero />}></Route>
        <Route target="/#formation" element={<Formation />} />
      </Routes>
      <Navbar />
      <Hero />
      <Formation />
    </BrowserRouter>
  );
}

export default App;
