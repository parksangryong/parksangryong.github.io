import "../css/Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "안녕하세요. 상룡의 포토폴리오 입니다.      ";

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
      <h1>
        배움을 좋아하는 개발자,
        <br />
        <span>{blogTitle}</span>
      </h1>
    </header>
  );
}

export default Header;
