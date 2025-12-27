import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson23 = {
  name: "3-8 Array 관련 함수",
  idx: 23,
  content: (
    <div className="lesson-content">
      <h2>Array 관련 함수</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson23;
