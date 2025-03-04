import { Route, Routes } from "react-router-dom"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
      document.title = "My Portfolio"
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title="Home"/>} />
        <Route path="/about" element={<About title="About"/>} />
        <Route path="/projects" element={<Projects title="Projects"/>} />
        <Route path="/contact" element={<Contact title="Contact"/>} />
      </Routes>
    </>
  );
}

export default App;