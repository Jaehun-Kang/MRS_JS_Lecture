import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson1 = {
  name: "1-1 자바스크립트 기초",
  idx: 1,
  content: (
    <div className="lesson-content">
      <h2>자바스크립트 기초</h2>
      <h3>JavaScript</h3>
      <p>
        JavaScript는 HTML 파일 안에 포함되어 HTML 조작과 변경을 담당하는 언어다.
        <br />
        이를 통해 다음과 같은 작업을 할 수 있다.
      </p>
      <p>
        - 웹페이지 UI 제작
        <br />
        - 사용자 입력 데이터 검사
        <br />- 서버로 데이터 요청
      </p>
      <h3>&lt;script&gt;</h3>
      <CodeBlock filename="HTML" language="html" code={`<script></script>`} />
      <p>
        JavaScript 코드는 &lt;script&gt; 태그 안에 작성한다.
        <br />
        &lt;script&gt; 태그는 &lt;body&gt;의 마지막에 위치시켜야 잘 작동한다.
      </p>
      <h3>HTML 요소 선택하기</h3>
      <p>
        JavaScript에서 HTML 요소를 조작하려면 먼저 해당 요소를 선택해야 한다.
      </p>
      <br />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementById("id")`}
      />
      <p>ID로 요소 선택</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementsByTagName("tag")`}
      />
      <p>태그명으로 요소 선택</p>

      <h3>HTML 요소 조작하기</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementById("id").innerHTML
document.getElementsByClassName("class")[0].style
document.getElementsByTagName("tag")[0].style
`}
      />
    </div>
  ),
};

export default Lesson1;
