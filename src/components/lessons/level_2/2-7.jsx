import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson12 = {
  name: "2-7 탭메뉴",
  idx: 12,
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
  content: '';
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
      
    </div>
  ),
};

export default Lesson12;
