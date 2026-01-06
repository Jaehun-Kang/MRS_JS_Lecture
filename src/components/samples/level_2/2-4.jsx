import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample10 = {
  name: "2-4",
  idx: 10,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-4</h2>
      <CodeBlock
        filename="2-4.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Regex 응용</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../level_1/1-3.css" />
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
    <!-- 2-3 기본 코드 -->
    <div class="black-bg" style="display: block">
      <div class="white-bg">
        <h4>로그인하세요</h4>
        <form action="success.html">
          <div class="my-3">
            <!-- Step1 : id를 email로 변경 -->
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
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <button id="login-btn">로그인</button>

    <script>
      $("#login-btn").on("click", function () {
        $(".black-bg").toggle();
      });
      $("#close").on("click", function () {
        $(".black-bg").toggle();
      });

      $("form").on("submit", function (e) {
        // Step1 : id를 email로 변경
        var emailInput = document.getElementById("email").value;
        var pwInput = document.getElementById("password").value;

        if (emailInput == "") {
          alert("이메일을 입력하세요");
          e.preventDefault();
        } else if (document.getElementById("password").value == "") {
          alert("비밀번호를 입력하세요");
          e.preventDefault();
        } else if (document.getElementById("password").value.length < 6) {
          alert("비밀번호는 6글자 이상 입력하세요");
          e.preventDefault();
        }

        // Step2 : 이메일 형식 검사
        if (/\S+@\S+\.\S+/.test(emailInput) == false) {
          alert("유효한 이메일 형식이 아닙니다.");
          e.preventDefault();
        }
        // Step3 : 비밀번호 대문자 포함 여부 검사
        // 숙제 : 스스로 구현해보기
        if (/[A-Z]/.test(pwInput) == false) {
          alert("비밀번호는 대문자를 포함해야 합니다.");
          e.preventDefault();
        }
      });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample10;
