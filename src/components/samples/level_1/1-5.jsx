import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample5 = {
  name: "1-5",
  idx: 5,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>1-5</h2>
      <CodeBlock
        filename="1-5.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>변수</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./1-3.css" />
    <link rel="stylesheet" href="./1-5.css" />
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
  <!-- Step2 : 다크 클래스 추가 -->
  <body class="dark">
    <!-- 1-6 기본 코드 -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">Navbar</span>
        <span class="badge bg-dark ms-auto mx-3">Dark 🔄</span>
      </div>
    </nav>

    <script>
      // Step1 : 변수 선언
      var count = 0;

      // Step3 : 변수 할당과 변수 증가에 따른 텍스트 토글
      $(".badge").on("click", function () {
        count++;
        if (count % 2 == 0) {
          $(".badge").text("Dark 🔄");
          // Step4 : 클래스 토글
          $("body").toggleClass("dark");
        } else {
          $(".badge").text("Light 🔄");
          // Step4 : 클래스 토글
          $("body").toggleClass("dark");
        }
      });
    </script>

    <!-- Step5 : 변수 범위와 종류 설명 -->
    <script>
      var name1 = "value1"; // 전역 변수

      function fName() {
        var name2 = "value2"; // 지역 변수

        console.log(name1); //가능
        console.log(name2); //가능
      }

      console.log(name1); //가능
      console.log(name2); //불가능

      let myAge = 25;
      myAge = 26; // 가능
      let myAge; // 오류 발생
      const birth = 2001;
      birth = 2006; // 오류 발생
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="1-5.css"
        language="css"
        code={`/* 1-6 */
/* Step2 : 다크 클래스 추가 */
.dark {
  background-color: black;
  color: white;
}
`}
      />
    </div>
  ),
};

export default Sample5;
