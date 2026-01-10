import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample23 = {
  name: "3-6",
  idx: 23,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-6</h2>
      <CodeBlock
        filename="3-6.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / For 실습</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>

    <script>
      // Q1: 출석부
      const rollBook = [
        "제헌",
        "영민",
        "현민",
        "채이",
        "지현",
        "현서",
        "수빈",
        "은별",
        "지윤",
        "시현",
      ];
      var attendance = ["제헌"];

      rollBook.forEach((name) => {
        if (attendance.includes(name)) {
          console.log(name + ": 네!");
        } else {
          console.log(name + ": ...");
        }
      });

      // Q2: 구구단
      for (var dan = 2; dan <= 9; dan++) {
        for (var x = 1; x <= 9; x++) {
          console.log(dan * x);
        }
      }

      // Q3: 평균 점수 변화 계산기
      function average(scores, newScore) {
        var sum = 0;
        scores.forEach((eachScore) => {
          sum += eachScore;
        });
        var average = sum / scores.length;
        var change = newScore - average;
        if (change > 0) {
          console.log(\`평균보다 \${change}점 올랐습니다.\`);
        } else if (change < 0) {
          console.log(\`평균보다 \${Math.abs(change)}점 내렸습니다.\`);
        } else {
          console.log("평균 점수와 같습니다.");
        }
      }

      average([10, 20, 30, 40, 50], 40);
      average([40, 40, 40], 20);
      average([40, 40, 40], 40);
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample23;
