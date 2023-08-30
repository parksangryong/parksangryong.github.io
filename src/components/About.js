import "../css/About.css";
import myimg1 from "../images/my.jpg";
import myimg2 from "../images/my2.jpg";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const [imgnum, setImgnum] = useState(true);
  const completionWord = "안녕하세요, 상룡의 포토폴리오 입니다.      ";

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

  const changeImg = () => {
    setImgnum(!imgnum);
  };

  return (
    <section id="about-sec">
      <div className="hello">
        <h1>
          배움을 즐기는 개발자!
          <br />
          <span>{blogTitle}</span>
        </h1>
      </div>

      {imgnum ? (
        <img src={myimg1} alt="내사진" onClick={changeImg} />
      ) : (
        <img src={myimg2} alt="내사진" onClick={changeImg} />
      )}

      <div className="about-txt">
        <h2>Introduction &nbsp;</h2>
        <p>
          안녕하세요! 개발자 박상룡의 포트폴리오 페이지입니다. 하루하루 성장하기
          위해 공부하고 있는 것이 제 장점이며,{" "}
          <span className="und">성장이 멈추지 않는 개발자</span>가 되는 것이
          저의 목표입니다.
        </p>
        <br />

        <h2>Contact &nbsp;</h2>

        <p>
          <FontAwesomeIcon icon={faEnvelope} />: &nbsp; ppsr3478@naver.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />: &nbsp; 010-5011-6089
        </p>
        <p>
          <FontAwesomeIcon icon={faChalkboard} /> : &nbsp;
          <a href="https://studymirr.tistory.com/" target="_blank">
            https://studymirr.tistory.com/
          </a>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faShareNodes} /> : &nbsp;
          <a
            href="https://github.com/parksangryong?tab=repositories"
            target="_blank"
          >
            https://github.com/parksangryong?tab=repositories
          </a>
        </p>
      </div>

      <div className="about-adu">
        <div className="adu">
          <h2>Education</h2>
          <div className="adu-txt">
            <p>
              <span className="adus">
                <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 대구대학교
                정보통신공학과(ICT융합부) / 재활공학과
              </span>

              <span className="dates">2015.03.02 ~ 2022.02.18</span>
            </p>
            <p>
              <span className="adus">
                <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 임베디드시스템
                융합 프레임워크 기반 자바 웹 개발자 양성과정
              </span>

              <span className="dates">2022.08.02 ~ 2022.12.07</span>
            </p>
            <p>
              <span className="adus">
                <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 코리아IT
                아카데미 프론트엔드 개발자 양성과정
              </span>

              <span className="dates">2023.04.22 ~ 2023.07.16</span>
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Have Certificate</h2>

          <div className="card-txt">
            <span className="first-p">정보통신기사</span>
            <span>정보처리기사</span>
            <span>사무자동화 산업기사</span>
            <span>보조공학사</span>
            <span className="first-p">GTQ-P</span>
            <span>GTQ-I</span>
            <span>컴퓨터활용능력 1급</span>
            <span>워드프로세스</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
