import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample17 = {
  name: "2-11",
  idx: 17,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-11</h2>
      <CodeBlock
        filename="2-11.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>라이브러리</title>
  </head>
  <body>
    <h1>Swiper</h1>
    <h4>슬라이더 라이브러리</h4>
    <a href="https://swiperjs.com/demos">
      <p>https://swiperjs.com/demos</p>
    </a>

    <h1>Chart.js</h1>
    <p>차트 라이브러리</p>
    <a href="https://www.chartjs.org/docs/latest/charts/area.html">
      <p>https://www.chartjs.org/docs/latest/charts/area.html</p>
    </a>

    <h1>AOS</h1>
    <p>스크롤 애니메이션 라이브러리</p>
    <a href="https://michalsnik.github.io/aos/">
      <p>https://michalsnik.github.io/aos/</p>
    </a>

    <h1>EmailJS</h1>
    <p>이메일 전송 라이브러리</p>
    <a href="https://www.emailjs.com/docs/introduction/how-does-emailjs-work/">
      <p>https://www.emailjs.com/docs/introduction/how-does-emailjs-work/</p>
    </a>

    <h1>Lodash</h1>
    <p>
      유틸리티 라이브러리
      <br />
      (array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들을 제공)
    </p>
    <a href="https://lodash.com/docs/4.17.15">
      <p>https://lodash.com/docs/4.17.15</p>
    </a>

    <h1>React / Vue</h1>
    <p>프론트엔드 프레임워크</p>
    <a href="https://react.dev/">
      <p>https://react.dev/</p>
    </a>

    <h1>Fullpage.js</h1>
    <p>풀페이지 스크롤 라이브러리</p>
    <a href="https://alvarotrigo.com/fullPage/">
      <p>https://alvarotrigo.com/fullPage/</p>
    </a>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample17;
