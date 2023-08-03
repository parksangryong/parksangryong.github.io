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
import { useState } from "react";

function Skill() {
  const [images, setImages] = useState([
    {
      id: 1,
      imageUrl: java,
      description:
        "풀스택 과정에서 java에 대해 배워, 객체 지향 프로그래밍에 대한 이해가 있습니다.",
    },
    {
      id: 2,
      imageUrl: jsp,
      description:
        "풀스택 과정에서 jsp로 MVC 형태의 기본적인 게시판을 만든 경험이 있습니다.",
    },
    {
      id: 3,
      imageUrl: oracle,
      description:
        "Java, JSP, Spring을 사용할 때, Oracle을 이용해 DB를 구성하고 사용하였습니다.",
    },
    {
      id: 4,
      imageUrl: spring,
      description:
        "풀스택 과정 프로젝트에서 웹 서비스 전반적 환경을 구축하여 영화화면을 만들었습니다.",
    },
    {
      id: 5,
      imageUrl: html,
      description:
        "HTML + CSS를 이용해 페이지를 구성하고 원하는 모습으로 꾸밀 수 있습니다.",
    },
    {
      id: 6,
      imageUrl: js,
      description:
        "JAVAScript를 사용하여 원하는 기능을 사용할 수 있으며 UI 요소를 원하는 형태로 구상화 할 수 있습니다.",
    },
    {
      id: 7,
      imageUrl: jquery,
      description:
        "JAVAScript와 같이 Jquery를 이용하여 원하는 기능을 사용할 수 있습니다.",
    },
    {
      id: 8,
      imageUrl: mysql,
      description:
        "Oracle처럼 Project를 할 때, MySQL을 사용하여 데이터를 불러오고 저장할 수 있습니다.",
    },
    {
      id: 9,
      imageUrl: node,
      description:
        "리액트와 데이터를 주고 받기위해 Node Express로 데이터를 서버를 통해 전달할 수 있습니다.",
    },
    {
      id: 10,
      imageUrl: react,
      description:
        "리액트를 사용하여 상태관리나 여러 라이브러리를 사용하여 페이지를 제작할 수 있습니다.",
    },
    {
      id: 11,
      imageUrl: github,
      description:
        "Git을 활용한 소스코드 버전 관리  브런치를  분리 및 이용하여 형상관리를 할 수 있습니다.",
    },
    {
      id: 12,
      imageUrl: bootstrap,
      description:
        "부트스트랩을 사용하여 구상하는데 시간을 효율적으로 단축할 수 있습니다. ",
    },
    {
      id: 13,
      imageUrl: Typescript,
      description:
        "아직 미숙하지만 타입스크립트를 사용하여 간단한 페이지를 제작할 수 있습니다.",
    },
    {
      id: 14,
      imageUrl: adobe,
      description:
        "디자인하는 것을 좋아하여 간단한 이미지를 디자인하고 꾸밀 수 있습니다.",
    },
  ]);

  const [currentImage, setCurrentImage] = useState(null);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(null);
  };

  const result = images.map((data) => (
    <div
      className="skill-img"
      key={data.id}
      onMouseEnter={() => handleMouseEnter(data)}
      onMouseLeave={handleMouseLeave}
    >
      {currentImage === data && (
        <div className="img-text">
          <span>{data.description}</span>
          {/* <img src={data.imageUrl} alt={`Image ${data.id}`} /> */}
        </div>
      )}
      <img src={data.imageUrl} alt={`Image ${data.id}`} />
    </div>
  ));

  return (
    <div>
      <div className="koo"></div>
      <section id="skill-sec">
        <h2>Skills</h2>
        {result}

        <h4>그 외 기술스택</h4>
        <p>
          React-hooks, Styled componen, Express, MongoDB, netlify, Cloudtype,
          REST API, Axios, AJAX, MVC, Redux...
        </p>
      </section>
    </div>
  );
}

export default Skill;
