import "../css/Projects.css";
import todolocal from "../images/Todo-local.png";
import todoserver from "../images/Todo-server.png";
import imgslide from "../images/imageslide.jpeg";
import movies from "../images/movie-main.jpeg";
import board from "../images/board-main.jpeg";
import cat from "../images/animal-cat.jpeg";
import country from "../images/country-home.jpeg";
import book1 from "../images/book-main.jpeg";
import monster from "../images/monster-main.jpeg";
import coffee from "../images/coffee.jpeg";
import doors from "../images/Doors.png";

// import notion1 from "../images/노션1-.png";

import Project from "./Project";

function Projects() {
  const initialImages = [
    {
      id: 1,
      imageUrl: book1,
      title: "도서 판매 사이트(Book-App)",
      dates: "2023/07월 말 쯤",
      skills: "React(Redux 등), NodeJs(Express), MySQL",
      desc: "책 등록 및 판매 CRUD 구현, 장바구니 기능, 추천 기능, 로그인 기능, 댓글 기능, 페이지네이션 구현",
      home: "https://zippy-jelly-95471f.netlify.app/",
      github: "https://github.com/parksangryong/book-app",
    },
    {
      id: 2,
      imageUrl: movies,
      title: "영화검색 사이트(MovieSearch)",
      dates: "2023/06월 말 쯤",
      skills: "React(QueryString 등), OpenAPI",
      desc: "영화 정보 불러오기 / 정렬 기능과 검색 기능, 페이지네이션 처리",
      home: "https://main--glistening-pudding-c6f3cf.netlify.app/",
      github: "https://github.com/parksangryong/MovieSearch",
    },
    {
      id: 3,
      imageUrl: board,
      title: "질문/답변 게시판(City of Posts)",
      dates: "2023/07월 초 쯤",
      skills: "React(Redux 등), NodeJs(Express), MySQL",
      desc: "게시판 CRUD 구현, 로그인 기능, 댓글 기능, 페이지네이션, 검색 기능, 소속 분리 구현",
      home: "https://main--voluble-moonbeam-7d6bbb.netlify.app/",
      github: "https://github.com/parksangryong/board-app",
    },
    {
      id: 4,
      imageUrl: country,
      title: "국기 맞추기 게임 (Country of Earth)",
      dates: "2023/07월 중순 쯤",
      skills: "React(QueryString, dayjs 등), OpenAPI",
      desc: "공공데이터포털에서 국가 정보를 가져와 데이터를 수정하며 목록 조회와 게임 기능, 점수판 기능 구현",
      home: "https://main--rainbow-horse-728fd8.netlify.app/",
      github: "https://github.com/parksangryong/country-app",
    },
    {
      id: 5,
      imageUrl: monster,
      title: "포켓몬 디지몬 도감(Monsters)",
      dates: "2023/07월 초중순 쯤",
      skills: "React(QueryString, dayjs 등), OpenAPI",
      desc: "디지몬 포켓몬 API를 가져와 목록 조회와 이로치 뽑기 기능, 진화 전후 이동 및 조회 구현",
      home: "https://main--resonant-tarsier-766ae0.netlify.app/",
      github: "https://github.com/parksangryong/monster-app",
    },
    {
      id: 6,
      imageUrl: cat,
      title: "강아지와 고양이 랜덤 사진(Dog & Cat)",
      dates: "2023/06월 중순쯤",
      skills: "React(QueryString 등), OpenAPI",
      desc: "고양이와 강아지의 사진을 랜덤으로 받아와 보여주기 기능 + 품종 검색과 사진 조회 기능",
      home: "https://main--splendid-melba-7fa330.netlify.app/",
      github: "https://github.com/parksangryong/animals-app",
    },

    {
      id: 7,
      imageUrl: todolocal,
      title: "투두리스트 - 로컬스토리지버전",
      dates: "2023/06월 초 쯤",
      skills: "React(dayjs 등)",
      desc: "로컬스토리지에 저장하는 투두리스트, 날짜를 불러와 저장 및 수정 삭제 체크 기능 / 종류별 조회 기능",
      home: "https://main--dainty-vacherin-fa0351.netlify.app/",
      github: "https://github.com/parksangryong/todolist-local ",
    },
    {
      id: 8,
      imageUrl: todoserver,
      title: "투두리스트 - DB 연결 버전",
      dates: "2023/06월 말 쯤",
      skills: "React(dayjs 등), MySQL, NodeJS(Express)",
      desc: "DB에 저장하는 투두리스트, 날짜를 불러와 저장 및 수정 삭제 체크 기능 / 종류별 조회 기능",
      home: "https://main--sparkling-faloodeh-178189.netlify.app/",
      github: "https://github.com/parksangryong/todolist-server",
    },
    {
      id: 9,
      imageUrl: imgslide,
      title: "간단 이미지슬라이드",
      dates: "2023/06",
      skills: "React(DragDrop, Slick)",
      desc: "이미지를 드래그 드랍하는 기능과 리스트 사진 조회 및 큰 화면 띄우기 / 삭제 버튼 기능",
      home: "https://main--wondrous-malabi-42224d.netlify.app/",
      github: "https://github.com/parksangryong/image-gallery",
    },
    {
      id: 10,
      imageUrl: coffee,
      title: "Coffee RandingPage",
      dates: "2023/04월 쯤",
      skills: "HTML + CSS + JS",
      desc: "기능사 준비하다가 책보며 만든 카페 페이지",
      home: "https://papaya-dieffenbachia-5368af.netlify.app/",
      github: "https://github.com/parksangryong/heropy_coffee",
    },
    {
      id: 11,
      imageUrl: doors,
      title: "HTML + CSS",
      dates: "2023/03월 쯤",
      skills: "react",
      desc: "기능사 준비하다가 책보며 만든 페이지",
      home: "https://hilarious-treacle-c41cbe.netlify.app/",
      github: "https://github.com/parksangryong/doors",
    },
    // {
    //   id: 12,
    //   imageUrl: notion1,
    //   title: "Movie(풀스택 과정 팀 프로젝트)",
    //   dates: "2022/12월 쯤",
    //   skills: "Java/Jsp/Spring/Oracle/Bootstrap/Notion",
    //   desc: "영화 사이트 였으나, 결과물 및 기록이 사라져, 노션에 남은 기록지 스크린샷...",
    //   home: "#",
    //   github: "#",
    // },
  ];

  const results = initialImages.map((image) => (
    <Project
      key={image.id}
      id={image.id}
      title={image.title}
      imageUrl={image.imageUrl}
      desc={image.desc}
      dates={image.dates}
      skills={image.skills}
      home={image.home}
      github={image.github}
    />
  ));

  return (
    <section id="pro-sec">
      <div className="ko"></div>
      <div className="proh">
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      </div>

      <ul className="project">{results}</ul>
    </section>
  );
}

export default Projects;
