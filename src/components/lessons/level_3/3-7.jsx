import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson22 = {
  name: "3-7 Ajax",
  idx: 22,
  content: (
    <div className="lesson-content">
      <h2>Ajax</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson22;
