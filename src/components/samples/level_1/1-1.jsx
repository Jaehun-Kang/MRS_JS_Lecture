import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample1 = {
  name: "1-1",
  idx: 1,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>1-1</h2>
      <CodeBlock
        filename="1-1.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 기초</title>
  </head>
  <body>
    <h1 id="start">자바스크립트</h1>
    <h1 id="hi">강의입니다</h1>

    <script>
      document.getElementById("start").innerHTML = "자바스크립트 강의 스타트~";
      document.getElementById("hi").style.color = "red";
      document.getElementById("hi").innerHTML = "화이팅!";
      document.getElementsByTagName("h1")[0].style.fontSize = "60px";
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample1;
