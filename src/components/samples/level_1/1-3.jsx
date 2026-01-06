import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample3 = {
  name: "1-3",
  idx: 3,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>1-3</h2>
      <CodeBlock
        filename="1-3.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>동적 UI 2 / jQuery와 모달창</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./1-3.css" />
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>
  <body>
    <!-- 1-4 기본 코드 -->
    <!-- 최상단에 추가할 것! -->
    <div class="black-bg">
      <div class="white-bg">
        <h4>로그인하세요</h4>

        <!-- 1-5 기본 코드 -->
        <!-- 기존 닫기 버튼도 폼 안으로 옮김 -->
        <form action="success.html">
          <div class="my-3">
            <input type="text" class="form-control" />
          </div>
          <div class="my-3">
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">전송</button>
          <button type="button" class="btn btn-danger" id="close">닫기</button>
        </form>

        <button class="btn btn-danger" id="close">닫기</button>
      </div>
    </div>

    <!-- 1-3 기본 코드 -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">Navbar</span>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <ul class="list-group" id="test1">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>

    <script>
      // Step1(1-3) : 클래스 추가
      document
        .getElementsByClassName("navbar-toggler")[0]
        .addEventListener("click", function () {
          document
            .getElementsByClassName("list-group")[0]
            .classList.add("show");
        });

      // Step2(1-3) : 클래스 토글
      // .remove()는 if문과 변수를 배우면 직접 만들 수 있어서 지금은 다루지 않음
      document
        .getElementsByClassName("navbar-toggler")[0]
        .addEventListener("click", function () {
          document
            .getElementsByClassName("list-group")[0]
            .classList.toggle("show");
        });

      // Step3(1-3) : querySelector
      // 숙제 : Step2의 코드를 querySelector로 전부 바꾸기
      document
        .querySelector(".navbar-toggler")
        .addEventListener("click", function () {
          document.querySelectorAll(".list-group")[0].classList.toggle("show");
        });
    </script>

    <!-- Step4(1-3) : querySelector 연습 -->
    <p class="text">텍스트</p>
    <p class="text">텍스트</p>
    <p class="text">텍스트</p>
    <button id="test-btn">버튼</button>

    <script>
      document.querySelector(".text").innerHTML = "text";
      document.querySelectorAll(".text")[0].innerHTML = "text";
      document.querySelectorAll(".text")[1].innerHTML = "text";
      $(".text").html("text");
      $(".text").css("color", "red");
      $(".text").addClass("show");
      $(".text").removeClass("show");
      $(".text").toggleClass("show");
      $("#test-btn").on("click", function () {
        $(".text").slideUp(); //hide, fadeOut, slideUp
      });
    </script>

    <!-- Step1(1-4) : jQuery로 모달창 토글 -->
    <button id="login-btn">로그인</button>

    <script>
      $("#login-btn").on("click", function () {
        $(".black-bg").toggle();
      });
      $("#close").on("click", function () {
        $(".black-bg").toggle();
      });
    </script>

    <!-- Step2(1-4) : UI 애니메이션 만들기 -->
    <button id="login-btn">로그인</button>

    <script>
      $("#login-btn").on("click", function () {
        $(".black-bg").addClass("show-modal");
      });
      $("#close").on("click", function () {
        $(".black-bg").removeClass("show-modal");
      });
    </script>

    <script>
      // Step1(1-5) : if/else 예시
      // 무엇이 출력될까?
      if (1 == 3) {
        console.log("1");
      } else if (3 == 3) {
        console.log("2");
      } else if (4 == 4) {
        console.log("3");
      }
    </script>

    <script>
      $("form").on("submit", function (e) {
        // Step2(1-5) : if/else 아이디 공백 체크
        // input에 있는 값 확인하는 법 검색시켜보기!
        // 숙제 : 첫 input이 공백이면 '아이디를 입력하세요' alert 출력
        if (document.getElementById("email").value == "") {
          alert("아이디를 입력하세요");
          e.preventDefault();
        }
        // Step3(1-5) : if/else 아이디 비밀번호 공백 체크
        // 숙제 : 두번째 input이 공백이면 '비밀번호를 입력하세요' alert 출력
        else if (document.getElementById("password").value == "") {
          alert("비밀번호를 입력하세요");
          e.preventDefault();
        }
        // Step4(1-5) : if/else 비밀번호 글자수 체크
        // 글자 수 확인하는 법 검색시켜보기!
        // 숙제 : 두번째 input이 6글자 미만이면 '비밀번호는 6글자 이상 입력하세요' alert 출력
        else if (document.getElementById("password").value.length < 6) {
          alert("비밀번호는 6글자 이상 입력하세요");
          e.preventDefault();
        }
      });
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="success.html"
        language="html"
        code={`전송 완료!

`}
      />
      <CodeBlock
        filename="1-3.css"
        language="css"
        code={`/* 1-3 */
.list-group {
  display: none;
}

.show {
  display: block;
}

/* 1-4 */
.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  padding: 30px;

  /* Step1(1-4) : jQuery로 모달창 토글 */
  /* display: none; */

  /* Step2(1-4) : UI 애니메이션 만들기 */
  /* visibility: hidden;
  opacity: 0;
  transition: all 1s; */
}
.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}

/* Step2(1-4) : UI 애니메이션 만들기 */
/* .show-modal {
  visibility: visible;
  opacity: 1;
} */
`}
      />
    </div>
  ),
};

export default Sample3;
