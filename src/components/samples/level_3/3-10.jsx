import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample27 = {
  name: "3-10",
  idx: 27,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-10</h2>
      <CodeBlock
        filename="3-10.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Local Storage</title>
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
    <!-- 3-10 기본 코드 -->
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th id="grade">학년</th>
            <th id="title">강의명</th>
            <th id="professor">교수명</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <div class="container">
      <a target="_blank" href="./3-10-1.html">
        <button class="btn btn-danger">장바구니 보기</button>
      </a>
    </div>

    <script>
      var lectures = [];

      $.when(
        $.get("https://jaehun-kang.github.io/MRS_JS_Lecture/lectures.json"),
        $.get("https://jaehun-kang.github.io/MRS_JS_Lecture/more1.json"),
        $.get("https://jaehun-kang.github.io/MRS_JS_Lecture/more2.json")
      ).done(function (grade2, grade3, grade4) {
        lectures = [...grade2[0], ...grade3[0], ...grade4[0]];
        displayTable();
      });

      function displayTable() {
        var tableContent = "";
        lectures.forEach(function (lecture) {
          tableContent += \`<tr>
            <td>\${lecture.grade}</td>
            <td>\${lecture.title}</td>
            <td>\${lecture.professor}</td>
            <td>
              <button class="cart">장바구니 추가</button>
            </td>
          </tr>\`;
        });
        $("tbody").html(tableContent);
      }

      // Step1 : localStorage 기초 연습
      localStorage.setItem("이름", "강제헌");
      localStorage.getItem("이름");
      localStorage.removeItem("이름");
      localStorage.clear();

      // Step2 : 배열 저장 연습
      localStorage.setItem("num", [1, 2, 3]); // '1,2,3'

      var array = [1, 2, 3];
      var newArray = JSON.stringify(array);
      localStorage.setItem("num", newArray); // '[1,2,3]'

      // Step3 : 배열 꺼내기 연습
      var get = localStorage.getItem("num");
      console.log(get[0]);
      console.log(JSON.parse(get)[0]);

      // Step4 : siblings() 연습
      // 데이터 로드 후 실행되도록 지연
      setTimeout(function () {
        var cartItem = [];
        $(".cart").on("click", function (e) {
          console.log($(e.currentTarget).parent().siblings().eq(1).text());
          console.log($(e.target).siblings("h5").text());

          // Step5 : 장바구니 기능 구현(배열)
          var title = $(e.currentTarget).parent().siblings().eq(1).text();

          // Step6 : 중복 강의 추가 방지
          // 숙제 : 스스로 해보기
          if (cartItem.includes(title)) {
            return;
          }

          // Step5 : 장바구니 기능 구현(배열)
          if (localStorage.getItem("cart") == null) {
            cartItem.push(title);
          } else {
            cartItem = JSON.parse(localStorage.cart);
            cartItem.push(title);
          }
          localStorage.setItem("cart", JSON.stringify(cartItem));

          console.log(localStorage.cart); // 확인용
        });
      }, 100);
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="3-10-1.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>장바구니</title>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <h3>장바구니</h3>
    <ul class="list"></ul>

    <script>
      var cartList = JSON.parse(localStorage.getItem("cart"));
      console.log(cartList);
      cartList.forEach((i) => {
        $(".list").append(\`<li>\${i}</li>\`);
      });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample27;
