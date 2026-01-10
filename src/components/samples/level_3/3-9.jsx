import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample26 = {
  name: "3-9",
  idx: 26,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-9</h2>
      <CodeBlock
        filename="3-9.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM / load</title>
  </head>
  <body>
    <h2>DOM이란?</h2>
    <h3>Document Object Model</h3>
    <div style="color: red">빨간 텍스트</div>
    <code>&lt;div style="color : red"&gt;빨간 텍스트&lt;/div&gt;</code>
    <pre>
var document = {
  div1 : {
    style : {color : 'red'}
    innerHTML : '안녕하세요'
  }
}
</pre
    >
    <script>
      document.querySelector("div").innerHTML = "새로운 텍스트";
    </script>
    <h2>load 이벤트 리스너</h2>
    <pre>
셀렉터로찾은이미지.addEventListener('load', function(){
  //이미지 로드되면 실행할 코드 
})</pre
    >
    <p>
      외부 자바스크립트에 있을 경우 이미지가 .js보다 먼저 로드되면 발생 체크
      못함
    </p>
    <pre>
$(window).on('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 
});

window.addEventListener('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드
})</pre
    >
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample26;
