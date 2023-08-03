import "../css/Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul className="menu">
        <li>
          <Link to="/about" className={pathn === "/about" ? "active" : ""}>
            About
          </Link>
        </li>

        <li>
          <Link to="/edu" className={pathn === "/edu" ? "active" : ""}>
            Education
          </Link>
        </li>

        <li>
          <Link to="/skill" className={pathn === "/skill" ? "active" : ""}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={pathn === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
