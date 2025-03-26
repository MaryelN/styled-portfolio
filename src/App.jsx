import About from "./sections/About";
import Hero from "./sections/Hero";
import Formation from "./sections/Formation";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="#Hero" element={<Hero />}></Route>
        <Route path="#formation" element={<Formation />} />
      </Routes>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
