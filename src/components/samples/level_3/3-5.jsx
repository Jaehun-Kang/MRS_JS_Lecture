import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample22 = {
  name: "3-5",
  idx: 22,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-5</h2>
      <CodeBlock
        filename="3-5.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select 3</title>
    <!-- Bootstrap CSS -->
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
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 3-5 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
        <option>바지</option>
      </select>
      <select hidden class="form-select mt-2"></select>
    </form>

    <script>
      // Step1 : forEach 소개
      var numbers = [1, 2, 3, 4, 5];

      for (let i = 0; i < numbers.length; i++) {
        $("body").append(\`<h4>\${numbers[i]}</h4>\`);
      }

      numbers.forEach(function (a, i) {
        $("body").append(\`<h4>value:\${a}, index:\${i}</h4>\`);
      });

      // Step2 : For...in 소개
      var profile = {
        name: "강제헌",
        birth: "2001-07-16",
        school: "상명대학교",
      };

      for (var key in profile) {
        $("body").append(\`<h4>\${key}: \${profile[key]}</h4>\`);
      }

      var second = $(".form-select").eq(1);
      // Step3 : 셔츠, 바지 데이터 배열로 변환
      var shirts = [90, 95, 100, 105, 110];
      var pants = [28, 30, 32, 34];

      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html("");
            // Step4 : forEach 사용
            // 숙제 : 스스로 해보기
            shirts.forEach(function (a) {
              second.append(\`<option>\${a}</option>\`);
            });
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html("");
            // Step4 : forEach 사용
            // 숙제 : 스스로 해보기
            pants.forEach(function (a) {
              second.append(\`<option>\${a}</option>\`);
            });
          } else {
            second.prop("hidden", true);
          }
        });

      // Step5 : forEach 화살표 함수 사용
      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html("");
            shirts.forEach((a) => {
              second.append(\`<option>\${a}</option>\`);
            });
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html("");
            pants.forEach((a) => {
              second.append(\`<option>\${a}</option>\`);
            });
          } else {
            second.prop("hidden", true);
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

export default Sample22;
