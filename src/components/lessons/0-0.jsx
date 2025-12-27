import "../../../styles/lesson.css";
import CodeBlock from "../CodeBlock";
import Foldable from "../Foldable";

const Lesson0 = {
  name: "0. 프리셋", // 0 전체 잡고 변경, 제목은 프리셋 전체 잡고 변경
  idx: 0,
  content: (
    <div className="lesson-content">
      <h2>프리셋</h2>
      <p>내용</p>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
      <Attachment
        title="첨부파일 (assets 폴더에 넣기)"
        items={[{ alt: "filename", src: file }]}
      />
    </div>
  ),
};

export default Lesson0;
