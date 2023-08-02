import "../css/Projects.css";
import todolocal from "../images/Todo-local.png";
import todoserver from "../images/Todo-server.png";
import imgslide from "../images/ImageSlide.png";
import movies from "../images/Movie Search.png";
import board from "../images/Board.png";
import catdog from "../images/animal.png";
import monster from "../images/monster.png";
import country from "../images/Country Game.png";
import book1 from "../images/book.png";
import book2 from "../images/book2.png";
import coffee from "../images/Coffee-clone.png";
import doors from "../images/Doors.png";

function Projects() {
  return (
    <section id="pro-sec">
      <h2>프로젝트</h2>
      <ul className="project">
        <li>
          <img src={book1} alt="책 장터1" />
          <img src={book2} alt="책 장터2" />
          <a href="https://zippy-jelly-95471f.netlify.app/" target="_blank">
            Book-App
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={movies} alt="영화" />
          <a
            href="https://main--glistening-pudding-c6f3cf.netlify.app/"
            target="_blank"
          >
            MovieSearch
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={board} alt="게시판" />
          <a
            href="https://main--voluble-moonbeam-7d6bbb.netlify.app/"
            target="_blank"
          >
            Board
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={country} alt="국가퀴즈" />
          <a
            href="https://main--rainbow-horse-728fd8.netlify.app/"
            target="_blank"
          >
            Country
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>

        <li>
          <img src={monster} alt="몬스터즈" />
          <a
            href="https://main--resonant-tarsier-766ae0.netlify.app/"
            target="_blank"
          >
            Digimon & Poketmon
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={catdog} alt="강아지와 고양이" />
          <a
            href="https://main--splendid-melba-7fa330.netlify.app/"
            target="_blank"
          >
            Cat & Dog
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={todolocal} alt="투두리스트-로컬" />
          <a
            href="https://main--dainty-vacherin-fa0351.netlify.app/"
            target="_blank"
          >
            TodoList - Local
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={todoserver} alt="투두리스트-서버" />
          <a
            href="https://main--sparkling-faloodeh-178189.netlify.app/"
            target="_blank"
          >
            TodoList - Server
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={imgslide} alt="이미지슬라이드" />
          <a
            href="https://main--wondrous-malabi-42224d.netlify.app/"
            target="_blank"
          >
            ImgSlide
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>

        <li>
          <img src={coffee} alt="커피-클론" />
          <a
            href="https://papaya-dieffenbachia-5368af.netlify.app/"
            target="_blank"
          >
            RandingPage - coffee
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <img src={doors} alt="문" />
          <a
            href="https://hilarious-treacle-c41cbe.netlify.app/"
            target="_blank"
          >
            RandingPage - doors
          </a>
          <ul>
            <li>제작시기 : </li>
            <li>사용기술 : </li>
            <li>주요기능 : </li>
            <li>
              <a href="#">WebSite</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
