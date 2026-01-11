import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample31 = {
  name: "3-14",
  idx: 31,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-14</h2>
      <CodeBlock
        filename="3-14.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Switch</title>
  </head>
  <body>
    <!-- 3-14 기본 코드 -->
    <div id="quiz">
      <h4>무인도에 들고 갈 한 가지는?</h4>
      <button>핸드폰</button>
      <button>칼</button>
      <button>씨앗</button>
      <button>침낭</button>
    </div>

    <script>
      var phone =
        "당신은 즐거움을 최우선으로 생각합니다. 심심할 걱정은 없겠네요!";
      var knife =
        "당신은 효율성을 중시합니다. 적절한 도구 하나면 충분하겠네요!";
      var seed = "당신은 지속성을 최우선으로 생각합니다. 굶을 걱정은 없겠네요!";
      var bedding =
        "당신은 정서적 안정을 최우선으로 생각합니다. 추울 걱정은 없겠네요!";

      // Step1: switch 연습
      let num = 2 + 1;
      switch (num) {
        case 3:
          alert("값이 3입니다.");
          break;
        case 4:
          alert("값이 4입니다.");
          break;
        default:
          alert("값이 3, 4가 아닙니다.");
      }

      // Step2: 심리테스트 구현
      document.querySelector("#quiz").addEventListener("click", function (e) {
        alert(e.target.innerHTML);
        // 숙제 : 스스로 해보기
        switch (e.target.innerHTML) {
          case "핸드폰":
            alert(phone);
            break;
          case "칼":
            alert(knife);
            break;
          case "씨앗":
            alert(seed);
            break;
          case "침낭":
            alert(bedding);
            break;
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

export default Sample31;
