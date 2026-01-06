import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson19 = {
  name: "3-3 Select",
  idx: 19,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Select</h2>
      <h3>상품 선택 폼 만들기</h3>
      <Foldable title="상품 선택 폼 코드">
        <CodeBlock
          filename="3-3.html"
          language="html"
          code={`<form class="container my-5 form-group">
    <p>상품선택</p>
    <select class="form-select mt-2">
      <option>모자</option>
      <option>셔츠</option>
    </select>
</form>`}
        />
        <p>
          셔츠를 선택하면 하단에 사이즈를 선택할 수 있는 &lt;select&gt; 박스가
          나타난다.
        </p>
      </Foldable>
      <h3>Select 태그</h3>
      <p>&lt;select&gt; 태그는 드롭다운 형식의 선택 폼을 만들 때 사용한다.</p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<select>
  <option></option>
  <option></option>
</select>
`}
      />
      <p>
        &lt;select&gt; 태그는 &lt;input&gt; 태그와 같이 input, change 이벤트가
        발생하고, .value 속성으로 선택된 값을 알 수 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector("select").value;
$("select").val(); // <select>에서 선택된 <option>의 값
`}
      />
      <h3>스크립트의 실행 시점</h3>
      <p>
        JavaScript는 페이지 로드 시점에 1회 실행되고 다시 실행되지 않는다.
        <br />
        이후에 실행 시점을 정해주고 싶은 코드에는 이벤트 리스너를 부착해야 한다.
      </p>
      <h3></h3>
    </div>
  ),
};

export default Lesson19;
