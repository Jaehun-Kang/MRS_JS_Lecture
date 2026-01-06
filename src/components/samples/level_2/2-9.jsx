import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample15 = {
  name: "2-9",
  idx: 15,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-9</h2>
      <CodeBlock
        filename="2-9.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이벤트 버블링</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./2-9.css" />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 2-8 기본 코드 -->
    <div class="black-bg">
      <div class="white-bg">
        <h4>로그인하세요</h4>
        <form action="../level_1/success.html">
          <div class="my-3">
            <input type="text" class="form-control" id="email" />
          </div>
          <div class="my-3">
            <input type="password" class="form-control" id="password" />
          </div>
          <button type="submit" class="btn btn-primary">전송</button>
          <button type="button" class="btn btn-danger" id="close">닫기</button>
        </form>
      </div>
    </div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">Navbar</span>
      </div>
    </nav>
    <button id="login-btn">로그인</button>

    <script>
      document
        .querySelector("#login-btn")
        .addEventListener("click", function () {
          $(".black-bg").toggle();
        });
      document.querySelector("#close").addEventListener("click", function () {
        $(".black-bg").toggle();
      });

      // Step1 : 검은 배경 클릭 시 닫기(버그 발생)
      $(".black-bg").on("click", function (e) {
        $(".black-bg").toggle();
      });

      // Step2 : 이벤트 함수
      document
        .querySelector(".black-bg")
        .addEventListener("click", function (e) {
          console.log(e.target); // 실제 클릭된 요소
          console.log(e.currentTarget); // 이벤트리스너가 달린 요소
          console.log(this); // 이벤트리스너가 달린 요소
          e.preventDefault(); // 기본동작 막기
          e.stopPropagation(); // 이벤트 전파 막기
        });

      // Step3 : 버그 해결
      document
        .querySelector(".black-bg")
        .addEventListener("click", function (e) {
          // document.querySelector(".black-bg") 대신 e.currentTarget 혹은 this 사용 가능
          if (e.target == document.querySelector(".black-bg")) {
            $(".black-bg").toggle();
          }
        });

      // Step4 : jQuery와 querySelector 차이
      console.log(document.querySelector(".black-bg"));
      console.log($(".black-bg"));

      // Step3 : jQuery 사용 버전
      $(".black-bg").on("click", function (e) {
        // $(".black-bg") 대신 $(e.currentTarget) 혹은 $(this) 사용 가능
        if ($(e.target).is($(".black-bg"))) {
          $(".black-bg").toggle();
        }
      });
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="2-9.css"
        language="css"
        code={`/* 2-8 */
.black-bg {
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  padding: 30px;
}
.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}
`}
      />
    </div>
  ),
};

export default Sample15;
