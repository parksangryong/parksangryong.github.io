import "../css/Skill.css";
import node from "../images/노드2.gif";
import spring from "../images/스프링.jpg";
import adobe from "../images/adobe.jpg";
import bootstrap from "../images/bootstrap.jpg";
import github from "../images/github.jpg";
import html from "../images/html.jpg";
import java from "../images/java.jpg";
import jquery from "../images/jquery.jpg";
import js from "../images/js.gif";
import jsp from "../images/jsp.jpg";
import mysql from "../images/mysql.jpg";
import react from "../images/react.gif";
import Typescript from "../images/Typescript.gif";
import oracle from "../images/oracle.png";

function Skill() {
  return (
    <section id="skill-sec">
      <h2>Skills</h2>
      <div className="skill-img">
        <img src={java} alt="java" />
        <img src={jsp} alt="jsp" />
        <img src={oracle} alt="oracle" />
        <img src={spring} alt="spring" />

        <img src={html} alt="html" />
        <img src={js} alt="js" />
        <img src={jquery} alt="jquery" />
        <img src={mysql} alt="mysql" />
        <img src={node} alt="node" />
        <img src={react} alt="react" />

        <img src={github} alt="github" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={Typescript} alt="Typescript" />
        <img src={adobe} alt="adobe" />
      </div>
      <h3>그 외 기술스택</h3>
      <p>
        React-hooks, Styled componen, Express, MongoDB, netlify, Cloudtype, REST
        API, Axios, AJAX, MVC, Redux
      </p>
    </section>
  );
}

export default Skill;
