import "../css/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  //const [pathn, setPathn] = useState(window.location.pathname);
  const location = useLocation();
  const { pathname } = location;

  //console.log(pathname);

  return (
    <header className="header">
      <ul className="menu">
        <li>
          <Link
            to="/about"
            className={
              pathname === "/about" || pathname === "/" ? "active" : ""
            }
          >
            About
          </Link>
        </li>

        <li>
          <Link to="/edu" className={pathname === "/edu" ? "active" : ""}>
            Education
          </Link>
        </li>

        <li>
          <Link to="/skill" className={pathname === "/skill" ? "active" : ""}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
