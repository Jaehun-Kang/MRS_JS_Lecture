import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample8 = {
  name: "2-2",
  idx: 8,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-2</h2>
      <CodeBlock
        filename="2-2.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setTimeout / Interval</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
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
    <!-- 2-2 기본 코드 -->
    <div class="alert alert-danger">5초 이내 구매 시 사은품 증정!</div>

    <script>
      // Step1 : setTimeout 기본 사용법
      setTimeout(function () {
        console.log("타임아웃");
      }, 1000);

      // Step2 : setTimeout 적용
      setTimeout(function () {
        $(".alert").hide();
      }, 5000);

      // Step3 : setInterval 기본 사용법
      setInterval(function () {
        console.log("인터벌");
      }, 1000);

      // Step4 : 콜백함수 외부함수 사용
      setTimeout(f, 1000);

      function f() {
        console.log("안녕1");
      }
    </script>

    <!-- Step5 : 타이머 안내창 구현 -->
    <!-- 숙제 : 직접 구현해보도록 시키기 -->
    <div class="alert alert-danger">
      <!-- 힌트는 span 사용하기 -->
      <span id="second">5</span>초 이내 구매 시 사은품 증정!
    </div>

    <script>
      var timer = setInterval(countDown, 1000);
      second = 5;

      function countDown() {
        second--;
        console.log(second);

        if (second == 0) {
          $(".alert").hide();
          clearTimeout(timer);
        }

        $("#second").html(second);
      }
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample8;
