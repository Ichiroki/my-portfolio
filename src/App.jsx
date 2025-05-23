import { Route, Routes, useLocation } from "react-router-dom"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/contact/Contact"
import { useLayoutEffect, useRef } from "react"
import Starfield from "./component/Starfield"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function App() {
  const location = useLocation()
  const nodeRef = useRef(null)

  useLayoutEffect(() => {
      document.title = "My Portfolio"
  }, [])
  
  return (
    <>
      <Starfield/>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;