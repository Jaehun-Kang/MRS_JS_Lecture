import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson28 = {
  name: "3-13 캐러셀 스와이프",
  idx: 28,
  content: (
    <div className="lesson-content">
      <h2>캐러셀 스와이프</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson28;
