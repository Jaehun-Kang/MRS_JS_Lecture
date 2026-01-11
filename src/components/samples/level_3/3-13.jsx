import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample30 = {
  name: "3-13",
  idx: 30,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-13</h2>
      <CodeBlock
        filename="3-13.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>마우스 슬라이드</title>
    <link rel="stylesheet" href="../level_3/3-13.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 3-13 기본 코드 -->
    <div style="overflow: hidden">
      <div class="slide-container">
        <div class="slide-box">
          <img src="../../assets/car1.png" draggable="false" />
        </div>
        <div class="slide-box">
          <img src="../../assets/car2.png" draggable="false" />
        </div>
        <div class="slide-box">
          <img src="../../assets/car3.png" draggable="false" />
        </div>
      </div>
    </div>

    <script>
      // Step1 : mousedown 이벤트
      var startX = 0;
      var mousedown = false;

      $(".slide-box")
        .eq(0)
        .on("mousedown", function (e) {
          console.log("mousedown X: " + e.clientX);
          startX = e.clientX;

          mousedown = true;
        });

      // Step2 : mouseup 이벤트
      $(".slide-box")
        .eq(0)
        .on("mouseup", function (e) {
          console.log("mouseup X: " + e.clientX);
          mousedown = false;

          // Step3 : 이동 거리 계산(100px 이상이면 슬라이드)
          // 숙제 : 스스로 해보기
          if (e.clientX - startX < -100) {
            $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(-100vw)");
          } else {
            $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(0vw)");
          }
          
          setTimeout(() => {
            $(".slide-container").css("transition", "none");
          }, 500);
        });

      // Step4 : mousemove 이벤트
      $(".slide-box")
        .eq(0)
        .on("mousemove", function (e) {
          if (mousedown) {
            console.log("mousemove X: " + e.clientX);
            console.log("움직인 X거리: " + (e.clientX - startX));

            // 숙제 : 스스로 해보기
            $(".slide-container").css(
              "transform",
              \`translateX(\${e.clientX - startX}px)\`
            );
          }
        });

      // Step5 : 터치 이벤트
      $(".slide-box")
        .eq(0)
        .on("touchstart", function (e) {
          console.log("touchstart X: " + e.touches[0].clientX);
          startX = e.touches[0].clientX;

          mousedown = true;
        });

      $(".slide-box")
        .eq(0)
        .on("touchend", function (e) {
          mousedown = false;
          if (e.changedTouches[0].clientX - startX < -100) {
            $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(-100vw)");
          } else {
            $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(0vw)");
          }
          setTimeout(() => {
            $(".slide-container").css("transition", "none");
          }, 500);
        });

      $(".slide-box")
        .eq(0)
        .on("touchmove", function (e) {
          console.log("touchmove X: " + e.touches[0].clientX);
          console.log("움직인 X거리: " + (e.touches[0].clientX - startX));

          if (mousedown) {
            $(".slide-container").css(
              "transform",
              \`translateX(\${e.touches[0].clientX - startX}px)\`
            );
          }
        });

      // Hammer.js 라이브러리를 사용하는 방법도 있음
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="3-13.css"
        language="css"
        code={`/* 3-13 */
.slide-container {
  width: 300vw;
}

.slide-box {
  width: 100vw;
  float: left;
}

.slide-box img {
  width: 100%;
}
`}
      />
    </div>
  ),
};

export default Sample30;
