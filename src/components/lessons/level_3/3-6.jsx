import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson22 = {
  name: "3-6 Array / For 실습",
  idx: 22,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Array / For 실습</h2>
      <Foldable title="퀴즈">
        <CodeBlock
          filename="1. 출석부"
          language="javascript"
          code={`const rollBook = ["제헌", "영민", "현민", "채이", "수빈", "지현", "현서", "은별", "지윤", "시현"];
var attendance = []; // 온 사람들 이름 넣기

// 출석부에 있는 이름을 전부 체크해서
// 있을 경우 "이름: 네!" 출력
// 없는 경우 "이름: ..." 출력
`}
        />
        <CodeBlock
          filename="2. 구구단"
          language="javascript"
          code={`// 2단부터 9단까지 곱셈 결과 부분만 출력하는 구구단 계산기`}
        />
        <CodeBlock
          filename="3. 평균 점수 변화 계산기"
          language="javascript"
          code={`function average(scores, newScore) {
  // scores에는 이전 점수들의 배열, newScore에는 새로 받은 점수를 넣으면
  // 이전 점수들의 평균과 새 점수를 비교하여
  // 오른 경우 "평균보다 00점 올랐습니다."를 반환
  // 내린 경우 "평균보다 00점 내렸습니다."를 반환
  // 같을 경우 "평균 점수와 같습니다."를 반환
}

average([10, 20, 30, 40, 50], 40); // "평균보다 10점 올랐습니다."
average([40, 40, 40], 20); // "평균보다 20점 내렸습니다."
average([40, 40, 40], 40); // "평균 점수와 같습니다."
`}
        />
      </Foldable>
    </div>
  ),
};

export default Lesson22;
