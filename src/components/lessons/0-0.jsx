import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";
// import filename from "../../../assets/filename.jpg"; // assets 폴더 내 경로

const Lesson0 = {
  name: "0. 프리셋", // 0 전체 잡고 변경, 제목은 프리셋 전체 잡고 변경
  idx: 0,
  content: (
    <div className="lesson-content">
      <h2>프리셋</h2>
      <h3>소제목</h3>
      <Foldable title="폴더제목">
        <CodeBlock filename="filename" language="language" code={`code`} />
        <p>내용</p>
        <Attachment
          title="첨부파일 (assets 폴더에 넣기)"
          items={[{ alt: "filename", src: null }]} // filename처럼 임포트 후 null 부분에 변수명 넣기
        />
      </Foldable>
      <h3>소제목</h3>
      <CodeBlock filename="filename" language="language" code={`code`} />
      <p>내용</p>
    </div>
  ),
};

export default Lesson0;
