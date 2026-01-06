import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson9 = {
  name: "2-3 Regex",
  idx: 9,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>Regex</h2>
      <h3>.includes()</h3>
      <p>문자열에 특정 텍스트가 포함되어 있는지 확인할 때 사용한다.</p>
      <CodeBlock
        filename="Javascript"
        language="javascript"
        code={`"text".includes("text to find")`}
      />
      <p>
        찾을 텍스트가 앞의 문자열에 포함되어 있는지 확인하고 true/false를
        반환한다.
      </p>
      <p>
        포함 여부만 확인할 수 있어 사용이 제한적이다. <br />
        예를 들면 한글이 포함되어 있는지나, 이메일 형식에 맞는 문자열인지 확인이
        어렵다.
      </p>
      <h3>정규 표현식이란?</h3>
      <p>
        정규 표현식은 문자열에서 특정 패턴을 찾을 때 조건으로 사용하는 문법이다.
      </p>
      <CodeBlock filename="Javascript" language="javascript" code={`/regex/`} />
      <p>
        이를 사용하면 여러 글자의 조합을 검사할 수 있기 때문에 문자열에서 특정
        패턴을 검사할 수 있다.
      </p>
      <h3>.test()</h3>
      <p>정규 표현식 조건에 맞는 패턴이 포함되어 있는지 확인할 때 사용한다.</p>
      <CodeBlock
        filename="Javascript"
        language="javascript"
        code={`/regex/.test("text")`}
      />
      <p>
        문자열에 정규 표현식 조건에 맞는 패턴이 포함되어 있는지 확인하고
        true/false를 반환한다.
      </p>
      <h3>정규 표현식 문법</h3>
      <p>아래는 자주 사용하는 정규 표현식 문법이다.</p>
      <table className="var-table">
        <thead>
          <tr>
            <th>분류</th>
            <th>정규식</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>한 글자</td>
            <td>/a/</td>
            <td>'a'라는 글자가 포함되어 있는지</td>
          </tr>
          <tr>
            <td rowSpan="5">범위 지정</td>
            <td>/[a-z]/</td>
            <td>아무 영어 소문자 하나</td>
          </tr>
          <tr>
            <td>/[A-Z]/</td>
            <td>아무 영어 대문자 하나</td>
          </tr>
          <tr>
            <td>/[a-zA-Z]/</td>
            <td>아무 영어 하나</td>
          </tr>
          <tr>
            <td>/[ㄱ-ㅎㅏ-ㅣ가-힣]/</td>
            <td>아무 한글 하나</td>
          </tr>
          <tr>
            <td>/[0-9]/</td>
            <td>아무 숫자 하나</td>
          </tr>
          <tr>
            <td>모든 문자</td>
            <td>{"\\S"}</td>
            <td>아무 문자 하나</td>
          </tr>
          <tr>
            <td rowSpan="2">시작과 끝</td>
            <td>/^a/</td>
            <td>문자열이 'a'로 시작하는지</td>
          </tr>
          <tr>
            <td>/a$/</td>
            <td>문자열이 'a'로 끝나는지</td>
          </tr>
          <tr>
            <td>또는</td>
            <td>/a|b/</td>
            <td>문자열에 'a' 또는 'b' 포함</td>
          </tr>
          <tr>
            <td rowSpan="2">반복</td>
            <td>/a+/</td>
            <td>문자열에 'a'가 하나 이상 연속</td>
          </tr>
          <tr>
            <td>{"\\S+a"}</td>
            <td>하나 이상 연속 문자 뒤에 'a'</td>
          </tr>
        </tbody>
      </table>
      <h3>이메일 정규식</h3>
      <table className="var-table">
        <tbody>
          <tr>
            <td>이메일</td>
            <td>{"\\S+@\\S+\\.\\S+"}</td>
            <td>이메일 형식에 맞는지 검사</td>
          </tr>
        </tbody>
      </table>
      <p>
        마침표는 정규식에서 특별한 의미를 가지기 때문에, 문자 그대로의 마침표를
        찾으려면 앞에 백슬래시를 붙여야 한다.
      </p>
    </div>
  ),
};

export default Lesson9;
