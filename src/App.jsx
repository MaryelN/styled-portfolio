import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Hero from "./sections/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Hero />
      <section id="About"></section>
      <section id="contact"></section>
      <section id="formation"></section>
      <section id="code"></section>
    </BrowserRouter>
  );
}

export default App;
