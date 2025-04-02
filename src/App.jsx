import About from "./sections/About";
import Hero from "./sections/Hero";
import Formation from "./sections/Formation";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./sections/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route target="/#Hero" element={<Hero />}></Route>
        <Route target="/#About" element={<About />}></Route>
        <Route target="/#formation" element={<Formation />} />
        <Route target="/#projects" element={<Projects />} />
      </Routes>
      <Navbar />
      <Hero />
      <About />
      <Formation />
      <Projects />
    </BrowserRouter>
  );
}

export default App;
