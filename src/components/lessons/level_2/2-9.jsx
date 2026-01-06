import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson15 = {
  name: "2-9 탭메뉴 응용",
  idx: 15,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>탭메뉴 응용</h2>
      <h3>탭메뉴 다시 만들기</h3>
      <Foldable title="탭메뉴 코드">
        <CodeBlock
          filename="2-10.html"
          language="html"
          code={`<div class="container">
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
`}
        />
        <CodeBlock
          filename="2-10.css"
          language="css"
          code={`.container {
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
          code={`var button = $(".tab-button");
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
        <p>
          2-8.html에서 만든 탭메뉴의 스크립트를 함수를 사용하여 같은 기능을
          하도록 한다.
        </p>
      </Foldable>
      <h3>함수 파라미터</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`fName(value1, value2);

function fName(param1, param2) {
  param1;
  param2;
}
`}
      />
      <p>함수의 괄호 안에 파라미터(인수)를 넣어 변수처럼 사용할 수 있다.</p>
      <h3>dataset 문법</h3>
      <p>HTML 요소에 사용자 정의 데이터를 저장할 수 있는 속성이다.</p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<div data-dataName="value"></div>`}
      />
      <p>이렇게 dataName에 value를 저장하고,</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector().dataset.dataName`}
      />
      <p>.dataset.dataName으로 이를 불러올 수 있다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").data('dataName', 'value'); // 데이터 저장
$("element").data('dataName') // 데이터 불러오기`}
      />
      <p>
        dataset 문법은 IE 11 이상 버전에서 지원되는데, jQuery의 data() 메서드는
        더 오래된 브라우저도 지원한다.
      </p>
    </div>
  ),
};

export default Lesson15;
