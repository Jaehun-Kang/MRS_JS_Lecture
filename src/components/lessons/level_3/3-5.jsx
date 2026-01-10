import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson21 = {
  name: "3-5 Select 3",
  idx: 21,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Select 3</h2>
      <h3>ForEach 반복문</h3>
      <p>배열 형식의 데이터를 사용하여 HTML 요소를 반복 생성해보자.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];

for (let i = 0; i < arr.length; i++) {
  $("parentElement").append(\`<tagName>\${arr[i]}</tagName>\`);
}
`}
      />
      <p>
        위처럼 For 반복문을 사용할 수 있지만, ForEach 반복문을 사용하면 더
        편리하게 사용할 수 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`arr.forEach(function (value, idx, array) { // 콜백함수의 첫번째 인수는 배열 안의 값, 두번째 인수는 인덱스, 세번째 인수는 배열 자체이다.
  // 반복 실행할 코드
}
`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];

arr.forEach(function (value) {
  $("parentElement").append(\`<tagName>\${value}</tagName>\`);
});
`}
      />
      <h3>For...In 반복문</h3>
      <p>데이터가 객체 형식이라면, For...In 반복문을 사용하면 된다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var obj = {key1: value1, key2: value2, key3: value3};

for (var key in obj) {
  $("parentElement").append(\`<tagName>\${obj[key]}</tagName>\`);
}
`}
      />
      <h3>화살표 함수</h3>
      <p>
        화살표 함수는 함수를 더 간결하게 작성할 수 있는 문법으로, 주로 콜백 함수
        대신 사용한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function fName() {} // 일반 함수
const fName = () => {} // 화살표 함수
`}
      />
      <p>
        막상 보면 더 길어보일지 모르지만, 화살표 함수는 생략 가능한 부분이 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`const fName = () => {}
const fName = param => {} // 매개변수가 하나일 때는 괄호 생략 가능
const fName = (param1, param2) => {} // 매개변수가 두 개 이상일 때는 괄호 생략 불가능
const fName = () => value // 함수 본문이 한 줄이고 return문만 있을 때는 중괄호와 return 생략 가능
`}
      />
      <p>
        하지만 일반 함수와 화살표 함수에서 this가 다르게 동작한다.
        <br />
        그러니 이벤트 리스너에서 화살표 함수를 사용한다면 this가 의도한 대로
        동작하지 않을 수 있다.
      </p>
    </div>
  ),
};

export default Lesson21;
