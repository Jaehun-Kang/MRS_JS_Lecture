import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson13 = {
  name: "2-7 탭메뉴",
  idx: 13,
  content: (
    <div className="lesson-content">
      <h2>탭메뉴</h2>
      <h3>탭메뉴 만들기</h3>
      <Foldable title="탭메뉴 코드">
        <CodeBlock
          filename="2-8.html"
          language="html"
          code={`<div class="container mt-5">
  <ul class="list">
    <li class="tab-button">Products</li>
    <li class="tab-button orange">Information</li>
    <li class="tab-button">Shipping</li>
  </ul>
  <div class="tab-content">
    <p>상품설명입니다. Product</p>
  </div>
  <div class="tab-content show">
    <p>스펙설명입니다. Information</p>
  </div>
  <div class="tab-content">
    <p>배송정보입니다. Shipping</p>
  </div>
</div> `}
        />
        <CodeBlock
          filename="2-8.css"
          language="css"
          code={`ul.list {
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
        <p>&lt;li&gt;태그를 누르면 해당하는 &lt;div&gt;가 나타난다.</p>
      </Foldable>
      <h3>JavaScript 파일 모듈화</h3>
      <p>
        JavaScript 코드가 너무 길고 복잡할 경우 CSS처럼 .js 파일을 만들어 뺄 수
        있다.
      </p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<script src="filePath" defer></script>`}
      />
      <p>
        &lt;head&gt; 태그 안쪽에 위 코드를 넣어 불러올 수 있다.
        <br />
        defer는 HTML 문서를 모두 불러온 후 스크립트를 실행하도록 한다.
      </p>
      <h3>셀렉터</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelectorAll(".class")[num]
$(".class").eq(num) // .class 중 num번째 선택
`}
      />
      <p>이걸 사용하면 같은 클래스 중 원하는 요소를 선택할 수 있다.</p>
      <p>
        하지만 셀렉터 문법을 사용하면 HTML 파일을 읽고 찾아야 하기 때문에 HTML
        파일이 길고 복잡할 수록 오래 걸린다.
        <br />
        그렇기 때문에 셀렉터 문법을 많이 사용할 경우에는 요소를 변수에 저장하여
        사용하는 것이 좋다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var element = $(".class");
element.eq(num) // .class 중 num번째 선택
`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$(".class").length; // .class 개수
`}
      />
      <p>이것도 유용하니 알아두자.</p>
      <h3>For 반복문</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`for (let i = 0; i < num; i++) {
  // num번 반복 실행할 코드
}
`}
      />
      <p>var 대신 let을 사용하는 이유는 변수의 유효 범위에 있다.</p>
    </div>
  ),
};

export default Lesson13;
