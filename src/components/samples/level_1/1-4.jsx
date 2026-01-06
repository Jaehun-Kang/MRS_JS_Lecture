import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample4 = {
  name: "1-4",
  idx: 4,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>1-4</h2>
      <CodeBlock
        filename="1-4.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>if/else function 퀴즈</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>

    <!-- 퀴즈는 혼자서 해보고 답안을 봐주세요 -->
    <script>
      // 퀴즈 1 : 구구단 3단 게임
      // gameTimes3(6); // 짝
      // gameTimes3(12); // 짝
      // gameTimes3(11); // 패스

      function gameTimes3(num) {
        if (num % 3 == 0) {
          console.log("짝");
        } else {
          console.log("패스");
        }
      }

      // 퀴즈 2 : 변형 구구단 3단 게임
      // gameTimes3v2(6); // 짝
      // gameTimes3v2(9); // 짝짝
      // gameTimes3v2(11); // 패스

      function gameTimes3v2(num) {
        if (num % 9 == 0) {
          console.log("짝짝");
        } else if (num % 3 == 0) {
          console.log("짝");
        } else {
          console.log("패스");
        }
      }

      // 퀴즈 3 : 일의 자리 369 게임
      // game369(14); // 패스
      // game369(23); // 짝
      // game369(36); // 짝

      function game369(num) {
        var lastNum = num % 10;

        if (lastNum == 3 || lastNum == 6 || lastNum == 9) {
          console.log("짝");
        } else {
          console.log("패스");
        }
      }

      // 퀴즈 4 : 패논패 여부
      // pnp(70, 70); // 합격
      // pnp(30, 100); // 불합격
      // pnp(50, 50); // 불합격
      // pnp(110, 70); // 합격

      function pnp(mid, final) {
        if (mid < 40 || final < 40 || mid + final < 120) {
          console.log("불합격");
        } else {
          console.log("합격");
        }
      }

      // 퀴즈 5 : 패논패 여부(100점 만점)
      // clampPnp(70, 70); // 합격
      // clampPnp(30, 100); // 불합격
      // clampPnp(50, 50); // 불합격
      // clampPnp(110, 70); // 경고창

      function clampPnp(mid, final) {
        if (mid < 40 || final < 40 || mid + final < 120) {
          console.log("불합격");
        } else if (mid < 0 || mid > 100 || final < 0 || final > 100) {
          alert("0~100의 숫자를 입력해주세요");
        } else {
          console.log("합격");
        }
      }
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample4;
