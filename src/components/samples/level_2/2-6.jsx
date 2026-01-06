import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample12 = {
  name: "2-6",
  idx: 12,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-6</h2>
      <CodeBlock
        filename="2-6.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Return</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>
    <!-- 2-5 실습 -->
    <script>
      // Step1 : return 예제 1
      function add() {
        return 1 + 3;
        console.log("return 아래의 코드는 실행되지 않습니다.");
      }

      var result_1 = add();
      console.log(result_1);

      // Step2 : return 예제 2
      console.log(50000 * 1.1);
      console.log(60000 * 1.1);
      console.log(80000 * 1.1);

      function multiply(a) {
        return a * 1.1;
      }

      var result_2 = multiply(50000);
      console.log(result_2);

      // Step3 : 반올림 예제
      function fixedMultiply(a) {
        var num = (a * 1.1).toFixed(2);
        return parseFloat(num);
      }

      var result_3 = fixedMultiply(55555);
      console.log(result_3);

      // 퀴즈1: 밀리초 변환기
      function minSecToMs(min, sec) {
        return min * 60000 + sec * 1000;
      }

      console.log(minSecToMs(1, 30)); // 90000
      console.log(toMs(2, 10)); // 130000

      // 퀴즈2: 할인 가격 계산기
      function salePrice(price, firstBuy) {
        price *= 0.9;

        if (firstBuy) {
          price -= 1.5;
        }

        price = parseFloat(price.toFixed(2));
        return price;
      }

      console.log(salePrice(70, false)); // 63
      console.log(salePrice(10, true)); // 7.5
      console.log(salePrice(10.3, true)); // 7.77
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample12;
