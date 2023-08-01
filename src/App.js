import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import AboutTxt from "./components/AboutTxt";

function App() {
  return (
    <div id="App">
      <Header />
      <ul className="menu">
        <li>
          <a href="#about">about</a>
        </li>

        <li>
          <a href="#about-txt">education</a>
        </li>

        <li>
          <a href="#skill">skill</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
      </ul>

      <div id="about">
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
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default App;
