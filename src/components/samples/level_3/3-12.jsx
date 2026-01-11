import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample29 = {
  name: "3-12",
  idx: 29,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-12</h2>
      <CodeBlock
        filename="3-12.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>스크롤 애니메이션</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./3-12.css" />
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 3-12 기본 코드 -->
    <div class="card-bg">
      <div class="card-box">
        <img src="../../assets/car1.png" />
      </div>
      <div class="card-box">
        <img src="../../assets/car2.png" />
      </div>
      <div class="card-box">
        <img src="../../assets/car3.png" />
      </div>
    </div>

    <script>
      $(window).scroll(function () {
        // Step1 : 스크롤 위치 파악
        var height = $(window).scrollTop();
        console.log(height);

        // Step2 : 첫 이미지 애니메이션
        var opacity = (-1 / 480) * height + 17 / 12; // start : 200px, end: 680px
        var scale = (-1 / 4800) * height + 25 / 24;

        if (opacity > 1) opacity = 1;
        if (scale > 1) scale = 1;

        $(".card-box").eq(0).css("opacity", opacity);
        $(".card-box").eq(0).css("transform", \`scale(\${scale})\`);

        // Step3 : 두 번째 이미지 애니메이션
        // 숙제 : 스스로 해보기
        var opacity2 = (-1 / 680) * height + 69 / 34; // start : 700px, end: 1380px
        var scale2 = (-1 / 6800) * height + 75 / 68;

        if (opacity2 > 1) opacity2 = 1;
        if (scale2 > 1) scale2 = 1;

        $(".card-box").eq(1).css("opacity", opacity2);
        $(".card-box").eq(1).css("transform", \`scale(\${scale2})\`);
      });
    </script>
  </body>
</html>

`}
      />
      <CodeBlock
        filename="3-12.css"
        language="css"
        code={`/* 3-12 */
.card-bg {
  height: 2000px;
  margin-top: 400px;
  margin-bottom: 1100px;
}

.card-box img {
  display: block;
  margin: auto;
  max-width: 60%;
  border-radius: 12px;
  overflow: hidden;
}

.card-box {
  position: sticky;
  top: 200px;
  margin-top: 100px;
}
`}
      />
    </div>
  ),
};

export default Sample29;
