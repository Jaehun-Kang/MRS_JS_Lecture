import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample28 = {
  name: "3-11",
  idx: 28,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-11</h2>
      <CodeBlock
        filename="3-11.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Local Storage 2</title>
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
    <!-- 3-11 기본 코드 -->
    <div class="container">
      <div class="row"></div>
    </div>

    <div class="container">
      <a target="_blank" href="./3-11-1.html">
        <button class="btn btn-danger">장바구니 보기</button>
      </a>
    </div>

    <script>
      var products = [
        { id: 0, price: 12000, title: "CtrlS 키캡 버튼" },
        { id: 1, price: 4000, title: "p5.js 포토부스" },
      ];

      function makeCards(obj) {
        obj.forEach((a) => {
          var newCard = \`<div class="col-sm-4">
            <img src="../../assets/product-\${a.id}.jpg" class="w-100" />
            <h5>\${a.title}</h5>
            <p>가격 : \${a.price}</p>
            <button class="cart">장바구니 추가</button>
          </div>\`;
          $(".row").append(newCard);
        });
      }

      makeCards(products);

      $(".cart").on("click", function (e) {
        var title = $(e.target).siblings("h5").text();

        // Step1 : 장바구니 기능 구현(배열 속 객체)
        // 숙제 : 장바구니에 몇 개 담겼는지 개수도 함께 저장

        var cartItem = []; // 빈 배열 생성
        if (localStorage.getItem("cart") == null) {
          // 로컬스토리지에 cart가 없으면
          cartItem.push({ name: title, count: 1 }); // 객체 형태로 추가
        } else {
          // 로컬스토리지에 cart가 있으면
          cartItem = JSON.parse(localStorage.cart); // 기존 데이터 불러오기

          var found = cartItem.find((item) => item.name == title);

          if (found) {
            found.count++;
          } else {
            cartItem.push({ name: title, count: 1 });
          }
        }

        // Step2 : or 구문으로 축약
        var cartItem = JSON.parse(localStorage.getItem("cart")) || []; // 로컬스토리지에 cart가 있으면 기존 데이터 불러오고 없으면 빈 배열 생성

        var found = cartItem.find((obj) => obj.name == title);

        if (found) {
          found.count++;
        } else {
          cartItem.push({ name: title, count: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cartItem));
        console.log(localStorage.cart);
      });
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="3-11-1.html"
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
      var productList = JSON.parse(localStorage.getItem("cart"));
      console.log(productList);
      productList.forEach((i) => {
        var newproduct = \`<li>\${i.name} \${i.count}개</li>\`;
        $(".list").append(newproduct);
      });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample28;
