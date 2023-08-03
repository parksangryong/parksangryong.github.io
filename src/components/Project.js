import { useState } from "react";
import "../css/Projects.css";

function Project(props) {
  const [isHover, setIsHover] = useState(false);

  //console.log(props);

  const movesite = (web) => {
    //console.log(web);
    //setIsHover(true);
    window.open(web, "_blank");
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <h3>{props.title}</h3>
      <img
        src={props.imageUrl}
        alt={props.id}
        className={isHover ? "blur-image" : ""}
      />
      {isHover && (
        <ul>
          <li>{props.dates}</li>
          <li>{props.skills}</li>
          <li>{props.desc}</li>
          <li onClick={() => movesite(props.home)} className="probtn">
            WebSite
          </li>
          <li onClick={() => movesite(props.github)} className="probtn">
            GitHub
          </li>
        </ul>
      )}
    </li>
  );
}

export default Project;
