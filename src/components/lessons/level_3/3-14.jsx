import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson29 = {
  name: "3-14 Switch 문법",
  idx: 29,
  content: (
    <div className="lesson-content">
      <h2>Switch 문법</h2>
      <h3>심리테스트 만들기</h3>
      <Foldable title="심리테스트 코드">
        <CodeBlock
          filename="3-14.html"
          language="html"
          code={`<div id="quiz">
  <h4>무인도에 들고 갈 한 가지는?</h4>
  <button>핸드폰</button>
  <button>칼</button>
  <button>씨앗</button>
  <button>침낭</button>
</div>

<script>
  var phone = "당신은 즐거움을 최우선으로 생각합니다. 심심할 걱정은 없겠네요!";
  var knife = "당신은 효율성을 중시합니다. 적절한 도구 하나면 충분하겠네요!";
  var seed = "당신은 지속성을 최우선으로 생각합니다. 굶을 걱정은 없겠네요!";
  var bedding = "당신은 정서적 안정을 최우선으로 생각합니다. 추울 걱정은 없겠네요!";
</script>
`}
        />
        <p>답안 중 하나를 선택하면 alert로 결과가 나온다.</p>
      </Foldable>
      <h3>Switch 조건문</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`switch (variable) {
  case value1 :
    // variable 값이 value1과 같을 때 실행할 코드
    break
  case value2 :
    // variable 값이 value2과 같을 때 실행할 코드
    break
  default :
    // case 값과 일치하는 것이 없을 때 실행할 코드
}`}
      />
      <p>아래 If/Else 문과 같은 기능을 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`if (variable === value1) {
  // variable 값이 value1과 같을 때 실행할 코드
} else if (variable === value2) {
  // variable 값이 value2과 같을 때 실행할 코드
} else {
  // case 값과 일치하는 것이 없을 때 실행할 코드
}`}
      />
      <p>
        If/Else 문과 비슷하지만, 값에 따른 조건분기를 만들고 싶을 때 여러 경우를
        간결하게 처리할 수 있다.
      </p>
    </div>
  ),
};

export default Lesson29;
