import About from "./sections/About";
import Hero from "./sections/Hero";
import Formation from "./sections/Formation";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./sections/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route target="/#Hero" element={<Hero />}></Route>
        <Route target="/#About" element={<About />}></Route>
        <Route target="/#formation" element={<Formation />} />
      </Routes>
      <Navbar />
      <Hero />
      <About />
      <Formation />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
