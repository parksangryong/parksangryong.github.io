import "../css/About.css";
import myimg from "../images/my.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about-sec">
      <img src={myimg} alt="내사진" />
      <div className="about-txt">
        <h2>Introduction</h2>
        <p>
          안녕하세요! 개발자 박상룡의 포트폴리오 페이지입니다. 하루하루 성장하기
          위해 공부하고 있는 것이 제 장점이며,{" "}
          <span className="und">성장이 멈추지 않는 개발자</span>가 되는 것이
          저의 목표입니다.
        </p>
        <br />
        <h2>Contact</h2>

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
    </section>
  );
}

export default About;
