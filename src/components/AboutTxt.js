import "../css/AboutTxt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

function AboutTxt() {
  return (
    <section id="txt-sec">
      <div className="ko"></div>
      <div className="adu">
        <h2>학력 / 교육이수</h2>
        <div className="adu-txt">
          <p>
            <span className="adus">
              <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 대구대학교
              정보통신공학과(ICT융합부) / 재활공학과 :
            </span>

            <span className="dates">2015.03.02 ~ 2022.02.18</span>
          </p>
          <p>
            <span className="adus">
              <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 임베디드 시스템
              융합 프레임워크 기반 자바 웹 개발자 양성과정 :
            </span>

            <span className="dates">2022.08.02 ~ 2022.12.07</span>
          </p>
          <p>
            <span className="adus">
              <FontAwesomeIcon icon={faUserGraduate} /> &nbsp; 코리아IT 아카데미
              프론트엔드 개발자 양성과정 :
            </span>

            <span className="dates">2023.04.22 ~ 2023.07.16</span>
          </p>
        </div>
      </div>

      <div className="card">
        <h2>자격증</h2>

        <p className="first-p">정보통신기사</p>
        <p>정보처리기사</p>
        <p>사무자동화 산업기사</p>
        <p>보조공학사</p>
        <p className="first-p">GTQ-P</p>
        <p>GTQ-I</p>
        <p>컴퓨터활용능력 1급</p>
        <p>워드프로세스</p>
      </div>
    </section>
  );
}

export default AboutTxt;
