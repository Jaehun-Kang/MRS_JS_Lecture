import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson8 = {
  name: "2-2 setTimeout/Interval",
  idx: 8,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>setTimeout/Interval</h2>
      <h3>안내창 만들기</h3>
      <Foldable title="안내창 코드">
        <CodeBlock
          filename="2-2.html"
          language="html"
          code={`<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>`}
        />
        <p>5초 후 안내창이 사라진다.</p>
      </Foldable>
      <h3>setTimeout</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);
`}
      />
      <p>타이머를 삭제하고 싶으면 아래처럼 변수를 사용해야 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var timer = setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);

clearTimeout(timer); // 타이머 삭제
`}
      />
      <h3>setInterval</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setInterval(function () {
  // num 밀리초마다 실행할 코드
}, num);
`}
      />
      <p>타이머를 삭제하고 싶으면 아래처럼 변수를 사용해야 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var timer = setInterval(function () {
  // num 밀리초마다 실행할 코드
}, num);

clearInterval(timer); // 타이머 삭제
`}
      />
      <h3>JavaScript 문법 vs 브라우저 기능</h3>
      <p>아래는 자바스크립트 프로그래밍 문법이다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name;
let name;
const name;
if () {}
function () {}
`}
      />
      <p>아래는 웹 브라우저에서 제공하는 브라우저 기능 사용법이다.</p>
      <CodeBlock
        filename="browser APIs"
        language="javascript"
        code={`document.querySelector()
alert()
setTimeout()
addEventListener()
`}
      />
      <p>
        그래서 기본적으로 웹 브라우저 기능을 가지고 코드를 작성하고, 편의를 위해
        자바스크립트 문법을 사용하는 것이라 보면 된다.
      </p>
      <h3>콜백함수 Tip</h3>
      <p>
        addEventListener(), setTimeout()과 같이 콜백함수를 인자로 받는 함수들에
        콜백함수 대신 외부 함수를 넣을 수도 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);
`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setTimeout(onTimeout, num);

function onTimeout() { 
  // num 밀리초 후 실행할 코드
}
`}
      />
      <p>
        예를 들어, setTimeout()가 많이 필요한 경우 콜백함수 대신 외부 함수를
        사용하는 것이 코드 가독성에 도움이 된다.
      </p>
    </div>
  ),
};

export default Lesson8;
