import "../css/Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "안녕하세요. 상룡의 포토폴리오 입니다.      ";

  const pathn = window.location.pathname;
  //console.log(pathn);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle("");
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <header className="header">
      <ul className="menu">
        <li>
          <Link to="/about" className={pathn === "/about" ? "active" : ""}>
            about
          </Link>
        </li>

        <li>
          <Link to="/edu" className={pathn === "/edu" ? "active" : ""}>
            education
          </Link>
        </li>

        <li>
          <Link to="/skill" className={pathn === "/skill" ? "active" : ""}>
            skill
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={pathn === "/projects" ? "active" : ""}
          >
            projects
          </Link>
        </li>
      </ul>
      {pathn === "/about" || pathn === "/" ? (
        <h1>
          배움을 좋아하는 개발자,
          <br />
          <span>{blogTitle}</span>
        </h1>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
