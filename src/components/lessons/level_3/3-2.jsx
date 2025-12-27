import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson17 = {
  name: "3-2 Array/Object 응용",
  idx: 17,
  content: (
    <div className="lesson-content">
      <h2>Array/Object 응용</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson17;
