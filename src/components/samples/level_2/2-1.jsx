import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample7 = {
  name: "2-1",
  idx: 7,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-1</h2>
      <CodeBlock
        filename="2-1.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>연산 응용</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>

    <!-- 퀴즈는 혼자서 해보고 답안을 봐주세요 -->
    <script>
      // 퀴즈 1 : 나이와 출생년도
      // 숫자는 달라도 됩니다.
      let age = 25;
      const birth = 2001;

      // 퀴즈 2 : 변수 출력은?
      var lastName = "박";
      var id = 0;

      function showName() {
        var lastName = "김";
        var id = 1;
        console.log(lastName);
      }

      showName(); // 김
      console.log(id); // 0

      // 퀴즈 3 : 이자율 계산기
      // deposit = 60000 이면 86400 출력
      // deposit = 10000 이면 13225 출력
      var deposit = 60000;
      var futureValue = 0;

      if (deposit < 50000) {
        futureValue = deposit * 1.15 * 1.15;
      } else {
        futureValue = deposit * 1.2 * 1.2;
      }

      console.log(futureValue);

      // 아래처럼 해도 정답입니다.
      var deposit = 60000;
      var futureValue = 0;

      if (deposit < 50000) {
        futureValue = deposit * 1.15 ** 2;
      } else {
        futureValue = deposit * 1.2 ** 2;
      }

      console.log(futureValue);

      // 퀴즈 4 : 커피 리필 계산기
      // first = 360 이면 760 출력
      var first = 360;
      var refill = 2 / 3;
      var total;

      total = first + first * refill + first * refill * refill;

      console.log(total);

      // 퀴즈 4-1 : 커피 무한리필 계산기
      // first = 360 이면 1080 출력
      var first = 360;
      var refill = 2 / 3;
      var total;

      total = first / (1 - refill);

      console.log(total);
    </script>

    <!-- 퀴즈 5 : 온라인 퀴즈 UI -->
    <p>1~5 중 내가 생각한 숫자 하나는? 기회는 3번 줄게</p>
    <input type="text" id="answer" />
    <button id="send-answer">이건가?</button>

    <script>
      var answer = 1; // 정답은 자신이 원하는 숫자로 해도 됩니다.
      var count = 0;

      document
        .querySelector("#send-answer")
        .addEventListener("click", function () {
          count++;
          var userAnswer = document.querySelector("#answer").value;

          if (userAnswer == answer) {
            alert("정답!");
          } else if (count >= 3 && userAnswer != answer) {
            alert("땡!");
          }
        });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample7;
