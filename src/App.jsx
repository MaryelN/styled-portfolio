import About from "./sections/About";
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
      <About />
    </>
  );
}

export default App;
