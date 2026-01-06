import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample16 = {
  name: "2-10",
  idx: 16,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-10</h2>
      <CodeBlock
        filename="2-10.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>탭메뉴 응용</title>
    <link rel="stylesheet" href="./2-10.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script defer src="./2-10.js"></script>
  </head>
  <body>
    <!-- 2-9 기본 코드 -->
    <div class="container">
      <ul class="list">
        <!-- Step3 : dataset 활용 -->
        <li class="tab-button orange" data-id="0">Products</li>
        <li class="tab-button" data-id="1">Information</li>
        <li class="tab-button" data-id="2">Shipping</li>
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
        filename="2-10.css"
        language="css"
        code={`/* 2-9 */
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
        filename="2-10.js"
        language="javascript"
        code={`// 2-9 기본 코드
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

// Step1 : 함수로 분리
for (let i = 0; i < button.length; i++) {
  button.eq(i).on("click", function () {
    tabs(i);
  });
}

function tabs(i) {
  button.removeClass("orange");
  content.removeClass("show");
  button.eq(i).addClass("orange");
  content.eq(i).addClass("show");
}

// Step2 : 이벤트 위임
$(".list").click(function (e) {
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    tabs(0);
  }
  if (e.target == document.querySelectorAll(".tab-button")[1]) {
    tabs(1);
  }
  if (e.target == document.querySelectorAll(".tab-button")[2]) {
    tabs(2);
  }
});

// Step3 : dataset 활용
$(".list").click(function (e) {
  tabs(e.target.dataset.id);
});

// Step4 : jQuery dataset 활용
$(".list").click(function (e) {
  tabs($(e.target).data("id"));
});

// Step5 : Number 변환
$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  console.log(Number(e.target.dataset.id));
  tabs(Number(e.target.dataset.id));
});
`}
      />
    </div>
  ),
};

export default Sample16;
