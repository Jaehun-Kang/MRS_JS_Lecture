import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample14 = {
  name: "2-8",
  idx: 14,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-8</h2>
      <CodeBlock
        filename="2-8.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>For 반복문</title>
    <link rel="stylesheet" href="./2-8.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <!-- Step1 : JavaScript 파일 모듈화 -->
    <script defer src="./2-8.js"></script>
  </head>
  <body>
    <!-- 2-7 기본 코드 -->
    <div class="container">
      <ul class="list">
        <li class="tab-button orange">Products</li>
        <li class="tab-button">Information</li>
        <li class="tab-button">Shipping</li>
      </ul>
      <div class="tab-content show">
        <p>상품설명입니다. Product</p>
      </div>
      <div class="tab-content">
        <p>스펙설명입니다. Information</p>
      </div>
      <div class="tab-content">
        <p>배송정보입니다. Shipping</p>
      </div>
    </div>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="2-8.css"
        language="css"
        code={`/* 2-7 */
.container {
  margin-top: 20px;
}

ul.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc;
}

ul.list::after {
  content: "";
  display: block;
  clear: both;
}

.tab-button {
  display: block;
  padding: 10px 20px 10px 20px;
  float: left;
  margin-right: -1px;
  margin-bottom: -1px;
  color: grey;
  text-decoration: none;
  cursor: pointer;
}

.orange {
  border-top: 2px solid orange;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid white;
  border-left: 1px solid #ccc;
  color: black;
  margin-top: -2px;
}

.tab-content {
  display: none;
  padding: 10px;
}

.show {
  display: block;
}
`}
      />
      <CodeBlock
        filename="2-8.js"
        language="javascript"
        code={`// 2-7
// Step2 : 첫번째 버튼 기능 구현
$(".tab-button")
  .eq(0)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-button").eq(0).addClass("orange");
    $(".tab-content").eq(0).addClass("show");
  });

// Step3 : 두번째, 세번째 버튼 기능 구현
$(".tab-button")
  .eq(1)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-button").eq(1).addClass("orange");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-button").eq(2).addClass("orange");
    $(".tab-content").eq(2).addClass("show");
  });

// Step4 : 셀렉터 변수화
var button = $(".tab-button");
var content = $(".tab-content");

button.eq(0).on("click", function () {
  button.removeClass("orange");
  content.removeClass("show");
  button.eq(0).addClass("orange");
  content.eq(0).addClass("show");
});

// Step5 : For 반복문 실습
for (var i = 0; i < 5; i++) {
  console.log("for1");
}
for (var i = 3; i < 6; i++) {
  console.log("for2");
}
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// Step6 : For 반복문 사용하여 기능 구현
var button = $(".tab-button");
var content = $(".tab-content");

// 1. 한 줄씩 해석
// 2. var 때문에 i는 for문 밖에 생성
for (var i = 0; i < 3; i++) {
  // 3. 안쪽 코드 반복실행
  button.eq(i).on("click", function () {
    // 4. 이벤트리스너 안쪽 코드는 바로 실행 X
    button.removeClass("orange");
    content.removeClass("show");
    button.eq(i).addClass("orange");
    content.eq(i).addClass("show");
  });
}
// 5. 반복문 종료 후 i는 3
// 6. 버튼 클릭 시 i는 3인데 네 번째 요소가 없어 클래스 삭제만 작동

// Step6 : For 반복문 let 사용
var button = $(".tab-button");
var content = $(".tab-content");

for (let i = 0; i < 3; i++) {
  button.eq(i).on("click", function () {
    button.removeClass("orange");
    content.removeClass("show");
    button.eq(i).addClass("orange");
    content.eq(i).addClass("show");
  });
}

// Step7 : 확장성 있는 코드
var button = $(".tab-button");
var content = $(".tab-content");

for (let i = 0; i < button.length; i++) {
  button.eq(i).on("click", function () {
    button.removeClass("orange");
    content.removeClass("show");
    button.eq(i).addClass("orange");
    content.eq(i).addClass("show");
  });
}
`}
      />
    </div>
  ),
};

export default Sample14;
