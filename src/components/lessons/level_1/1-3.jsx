import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson3 = {
  name: "1-3 동적 UI 2",
  idx: 3,
  content: (
    <div className="lesson-content">
      <h2>동적 UI 2</h2>
      <h3>상단 메뉴와 서브 메뉴 만들기</h3>
      <Foldable title="상단 메뉴와 서브 메뉴 코드">
        <CodeBlock
          filename="1-3.html"
          language="html"
          code={`<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<ul class="list-group" id="test1">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
`}
        />
        <CodeBlock
          filename="1-3.css"
          language="css"
          code={`.list-group {
  display: none;
}

.show {
  display: block;
}
`}
        />
        <p>토글 버튼을 누르면 서브 메뉴가 보이거나 숨겨진다.</p>
      </Foldable>
      <h3>Bootstrap 설치</h3>
      <p>Bootstrap 라이브러리를 사용하여 빠르게 스타일과 기능을 구현해보자.</p>
      <Foldable title="Bootstrap 라이브러리">
        <CodeBlock
          filename="CDN"
          language="html"
          code={`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
`}
        />
        <p>
          CDN 링크를 복사하여 &lt;head&gt; 태그 안에 붙여넣으면 된다.
          <br />
          별도의 CSS 파일을 사용할 경우 Bootstrap 링크 뒤에 넣어야 한다.
        </p>
      </Foldable>
      <h3>클래스 탈부착</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`element.classList.add("class"); // 클래스 추가
element.classList.remove("class"); // 클래스 제거
element.classList.toggle("class"); // 클래스 토글
`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector(".class").addEventListener("click", function () {
  document.querySelectorAll(".class")[0].classList.toggle("class");
});
`}
      />
      <p>
        클릭 이벤트 리스너에 클래스 토글을 넣어 서브메뉴를 보이거나 숨길 수
        있다.
        <br />
        클래스명이 있으면 제거하고, 없으면 추가한다.
      </p>
      <h3>querySelector</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector("#id") // 아이디 요소 선택
document.querySelector(".class") // 클래스 중 첫번째 요소 선택
document.querySelector(".class")[num] // 클래스 중 num번째 요소 선택
document.querySelectorAll(".class") // 클래스 모든 요소 선택
`}
      />
      <p>
        getElementById() 나 getElementsByClassName() 대신 사용할 수 있는
        셀렉터도 있다.
        <br />
        아이디나 클래스를 지정해주지 않아도 선택할 수 있어 편리하다.
      </p>
      <p>대신 아이디는 #, 클래스는 .을 붙여줘야 한다.</p>
    </div>
  ),
};

export default Lesson3;
