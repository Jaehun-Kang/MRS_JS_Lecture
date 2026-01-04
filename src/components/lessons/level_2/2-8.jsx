import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson13 = {
  name: "2-8 이벤트 버블링",
  idx: 13,
  content: (
    <div className="lesson-content">
      <h2>이벤트 버블링</h2>
      <h3>모달창 만들기</h3>
      <Foldable title="모달창 코드">
        <CodeBlock
          filename="2-9.html"
          language="html"
          code={`<div class="black-bg">
  <div class="white-bg">
    <h4>로그인하세요</h4>
    <form action="../level_1/success.html">
      <div class="my-3">
        <input type="text" class="form-control" id="email" />
      </div>
      <div class="my-3">
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">전송</button>
      <button type="button" class="btn btn-danger" id="close">닫기</button>
    </form>
  </div>
</div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
  </div>
</nav>

<button id="login-btn">로그인</button>
`}
        />
        <p>모달창 바탕 부분을 누르면 모달창이 사라진다.</p>
      </Foldable>
      <h3>이벤트 버블링</h3>
      <p>
        특정 요소에서 발생한 이벤트가 그의 모든 상위 요소로 전파되는 현상이다.
      </p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<div>
  <div>
    <button></button>
  </div>
</div>
`}
      />
      <p>
        버튼을 클릭하면 버튼의 상위 요소인 &lt;div&gt;에서도 클릭한 효과가
        적용된다.
      </p>
      <h3>이벤트용 셀렉터와 함수</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`element.addEventListener("event", function (e) {
  e.target; // 이벤트가 발생한 실제 요소 : element가 아닐 수 있음
  e.currentTarget; // 이벤트 리스너가 등록된 요소 : element
  this; // 이벤트 리스너가 등록된 요소 : element
  e.preventDefault(); // 기본 이벤트 동작 막기
  e.stopPropagation(); // 상위 요소로 이벤트 버블링 막기
});
`}
      />
      <h3>셀렉터 사용 시 주의점</h3>
      <p>
        1. 같은 요소라도 jQuery 셀렉터와 querySelector로 찾은 결과는 다르다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`console.log($("body")); // ce.fn.init {0: body, length: 1, prevObject: ce.fn.init {…}, context: document, selector: "body"}
console.log(document.querySelector("body")); // <body>...</body>

$("element") == document.querySelector("element"); // 항상 false
`}
      />
      <p>
        2. jQuery 셀렉터끼리 등호 비교는 불가능하다. 대신 is() 메서드를
        사용한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").addEventListener("event", function (e) {
  $(e.target) == $("element"); // 비교 불가능
  $(e.target).is($("element")); // 비교 가능
});
`}
      />
      <p>
        참고로 e.target는 자바스크립트 객체이고, $(e.target)은 jQuery 객체로
        변환한 것이다.
      </p>
    </div>
  ),
};

export default Lesson13;
