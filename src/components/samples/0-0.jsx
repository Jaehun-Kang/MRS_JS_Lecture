import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample0 = {
  name: "0-0", // 0 전체 잡고 변경, 제목은 프리셋 전체 잡고 변경
  idx: 0,
  level: 0,
  content: (
    <div className="lesson-content">
      <h2>0-0</h2>
      <CodeBlock filename="0-0.html" language="html" code={`code`} />
    </div>
  ),
};

export default Sample0;
