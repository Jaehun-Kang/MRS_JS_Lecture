import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson2 = {
  name: "1-2 동적 UI 1",
  idx: 2,
  content: (
    <div className="lesson-content">
      <h2>동적 UI 1</h2>
      <h3>알림창 만들기</h3>
      <Foldable title="알림창 코드">
        <CodeBlock
          filename="1-2.html"
          language="html"
          code={`<div class="alert-box">알림창</div>`}
        />
        <CodeBlock
          filename="1-2.css"
          language="css"
          code={`.alert-box {
  background-color: skyblue;
  padding: 20px;
  color: white;
  border-radius: 5px;
  display: none;
}
`}
        />
        <p>
          열기 버튼을 누르면 알림창이 나타나고, 닫기 버튼을 누르면 사라진다.
        </p>
      </Foldable>
      <h3>onclick</h3>
      <p>onclick 속성을 사용하여 버튼 클릭 시 실행할 코드를 작성할 수 있다.</p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<button onclick="code to run">button</button>`}
      />
      <h3>함수</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function fName() {
  // 실행할 코드
}
`}
      />
      <p>
        함수는 긴 코드를 한 단어로 축약하거나 특정 기능을 다음에도 사용하기 위해
        사용한다.
        <br />
        함수 이름은 영어 소문자로 시작하고, camelCase를 사용하는 것이 관습이다.
      </p>
      <h3>파라미터</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function fName(parameter) {
  // parameter를 사용하는 코드
}
`}
      />
      <p>
        파라미터를 사용하면 함수 외부의 값을 함수 내부로 전달하여 사용할 수
        있다.
        <br />
        파라미터는 자유롭게 작명할 수 있으며, 쉼표를 사용하여 2개 이상 사용
        가능하다.
      </p>
      <h3>.addEventListener()</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`element.addEventListener("event", function () {
  // 이벤트 발생 시 실행할 코드
})
`}
      />
      <p>
        특정 element에 이벤트 리스너를 등록하여 이벤트를 감지한다.
        <br />
        이벤트는 사용자가 웹페이지에 접속해서 하는 모든 행동을 의미한다.
        <br />
        click, mouseover, scroll, keydown 등이 있고, 이외에도 수십가지가 있다.
      </p>
      <p>
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/Events"
        >
          이벤트 목록
        </a>
      </p>
      <h3>콜백함수</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function () {}`}
      />
      <p>
        이름이 없는 함수로, 코드를 순차적으로 실행할 때 사용. 별도로 호출하지
        않아도 이벤트가 발생하면 자동으로 실행된다.
      </p>
    </div>
  ),
};

export default Lesson2;
