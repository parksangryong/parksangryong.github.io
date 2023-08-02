import "./App.css";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import AboutTxt from "./components/AboutTxt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/edu" element={<AboutTxt />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      {/* <div id="about">
        <About />
      </div>
      <div id="about-txt">
        <AboutTxt />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="projects">
        <Projects />
      </div> */}

      <div id="footer"></div>
    </div>
  );
}

export default App;
