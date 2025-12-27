import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson21 = {
  name: "3-6 Array / For 실습",
  idx: 21,
  content: (
    <div className="lesson-content">
      <h2>Array / For 실습</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson21;
