import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample24 = {
  name: "3-7",
  idx: 24,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-7</h2>
      <CodeBlock
        filename="3-7.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajax</title>
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
    <!-- 3-7 기본 코드 -->
    <div class="container">
      <div class="row">
        <!-- <div class="card m-2 pt-2">
          <h5>대상학년 강의명</h5>
          <p>교수명 : ○○○</p>
        </div> -->
      </div>
      <button class="btn btn-danger" id="more">더보기</button>
    </div>

    <script>
      // Step1 : ajax 실습
      $.get("https://jaehun-kang.github.io/MRS_JS_Lecture/lectures.json")
        .done((data) => {
          console.log(data);
        })
        .fail((data) => {
          console.log(data);
        });

      // Step2 : 재사용 가능한 카드 함수 만들기
      function makeCards(obj) {
        obj.forEach((a) => {
          var newCard = \`
            <div class="card m-2 pt-2">
              <h5>\${a.grade} \${a.title}</h5>
              <p>교수명 : \${a.professor}</p>
            </div>
          \`;
          $(".row").append(newCard);
        });
      }

      // Step3 : 로드 시 카드 생성
      $.get("https://jaehun-kang.github.io/MRS_JS_Lecture/lectures.json").done(
        (data) => {
          makeCards(data);
        }
      );

      // Step4 : 더보기 버튼 클릭 시 추가 생성
      var count = 0;
      $("#more").on("click", function () {
        count++;
        $.get(
          \`https://jaehun-kang.github.io/MRS_JS_Lecture/more\${count}.json\`
        ).done(function (data) {
          makeCards(data);
        });
        if (count >= 2) {
          $("#more").hide();
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

export default Sample24;
