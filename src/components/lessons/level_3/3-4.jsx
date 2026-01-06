import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson20 = {
  name: "3-4 Select 2",
  idx: 20,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Select 2</h2>
      <h3>HTML 생성</h3>
      <p>
        만약 &lt;select&gt; 폼에서 새로운 옵션에 따라 다른 선택 폼이 나타나도록
        하려면 어떻게 해야 할까?
        <br />
        자바스크립트를 사용하여 동적으로 HTML 요소를 생성하고 삽입하면 확장성이
        좋아진다.
        <br />
        크게 두 가지 방법이 있다.
      </p>
      <p>1. 태그 생성 후 내부 내용 설정</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var newElement = document.createElement("tagName"); // 새로운 HTML 요소 생성
newElement.innerHTML = "text"; // 요소의 내용 설정
parentElement.appendChild(newElement); // 부모 요소에 자식 요소로 삽입
`}
      />
      <p>2. 태그와 내용 문자열을 함께 생성</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var newElement = \`<tagName>text</tagName>\`; // 새로운 HTML 요소 생성
parentElement.insertAdjacentHTML("beforeend", newElement); // 부모 요소 마지막에 자식 요소로 삽입
$("parentElement").append(newElement); // jQuery를 사용하여 부모 요소 마지막에 자식 요소로 삽입
`}
      />
      <h3>.prop()</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").prop("propertyName", value) // element의 propertyName 속성을 value 값으로 변경
`}
      />
      <p>
        .prop()을 사용하면 체크박스의 체크 상태, 버튼의 비활성화, 인풋의 값 등
        요소의 상태를 확인하거나 변경할 수 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("input").prop("checked", true); // checkbox를 체크된 상태로 설정
$("button").prop("disabled", true); // button을 비활성화
$("input").prop("value"); // input의 값
`}
      />
    </div>
  ),
};

export default Lesson20;
