import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample9 = {
  name: "2-3",
  idx: 9,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-3</h2>
      <CodeBlock
        filename="2-3.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Regex</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>
    <!-- 2-3 실습 -->
    <!-- Step1 : 콘솔 창 사용해서 실습 -->
    <p>'abc'.includes('a')</p>
    <p>/a/.test('abcde')</p>
    <p>/[a-z]/.test('abcde')</p>
    <p>/[A-Z]/.test('abcdeA')</p>
    <p>/[a-zA-Z]/.test('abcdeA')</p>
    <p>/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test('한글')</p>
    <p>/[0-9]/.test('1')</p>
    <p>/\S/.test('아무문자')</p>
    <p>/^a/.test('asdf')</p>
    <p>/a$/.test('fdsa')</p>
    <p>/a|b/.test('a or b')</p>
    <p>/\S+@\S+\.\S+/.test('aaa@bbb.ccc')</p>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample9;
