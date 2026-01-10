import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample25 = {
  name: "3-8",
  idx: 25,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-8</h2>
      <CodeBlock
        filename="3-8.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta
      professor="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Array 관련 함수</title>
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
    <!-- 3-8 기본 코드 -->
    <div class="container">
      <button class="btn btn-danger" id="sort-professor">
        교수명 오름차순
      </button>
      <button class="btn btn-danger" id="reverse-title">강의명 내림차순</button>
      <button class="btn btn-danger" id="filter-2">2학년</button>
      <button class="btn btn-danger" id="filter-3">3학년</button>
      <button class="btn btn-danger" id="filter-4">4학년</button>
      <div class="row"></div>
    </div>

    <script>
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

      var lectures = [];
      $.get(
        "https://jaehun-kang.github.io/MRS_JS_Lecture/allLectures.json"
      ).then(function (data) {
        lectures.push(...data);
        makeCards(lectures);
      });

      var array = [7, 3, 5, 2, 40];
      // Step1 : sort() 연습
      // 문자순 정렬
      array.sort();
      console.log(array);

      // 오름차순 정렬
      array.sort(function (a, b) {
        return a - b; // 이 수가 양수면 a를 오른쪽, 음수면 b를 오른쪽
      });
      console.log(array);

      // 내림차순 정렬
      array.sort(function (a, b) {
        return b - a;
      });
      console.log(array);

      // Step2 : filter() 연습
      var newArray = array.filter(function (a) {
        return a < 4;
      });
      console.log(newArray);

      // Step3 : map() 연습
      newArray = array.map(function (a) {
        return a * 1000;
      });
      console.log(newArray);

      // Step4 : 문자 배열 정렬
      var array2 = ["a", "c", "b", "a"];
      // 문자순 정렬
      array2.sort();
      console.log(array2);

      // 문자역순 정렬
      array2.sort(function (a, b) {
        if (a > b) {
          return -1;
        } else if (a == b) {
          return 0;
        } else {
          return 1;
        }
      });
      // array2.reverse();
      console.log(array2);

      // Step5 : 강의 데이터로 sort() 연습
      $("#sort-professor").on("click", function () {
        lectures.sort(function (a, b) {
          if (a.professor < b.professor) {
            return -1;
          } else {
            return 1;
          }
        });
        $(".row").html("");
        makeCards(lectures);
      });

      // 숙제 : 스스로 해보기
      $("#reverse-title").on("click", function () {
        lectures.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          } else {
            return 1;
          }
        });
        $(".row").html("");
        makeCards(lectures);
      });

      // Step6 : 강의 데이터로 filter() 연습
      $("#filter-2").on("click", function () {
        var newLectures = lectures.filter(function (a) {
          return a.grade == 2;
        });
        $(".row").html("");
        makeCards(newLectures);
      });

      // 숙제 : 3학년, 4학년 버튼도 스스로 해보기
      $("#filter-3").on("click", function () {
        var newLectures = lectures.filter(function (a) {
          return a.grade == 3;
        });
        $(".row").html("");
        makeCards(newLectures);
      });
      $("#filter-4").on("click", function () {
        var newLectures = lectures.filter(function (a) {
          return a.grade == 4;
        });
        $(".row").html("");
        makeCards(newLectures);
      });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample25;
