import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample11 = {
  name: "2-5",
  idx: 11,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-5</h2>
      <CodeBlock
        filename="2-5.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>캐러셀</title>
    <link rel="stylesheet" href="./2-5.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 2-4 기본 코드 -->
    <div style="overflow: hidden">
      <div class="slide-container">
        <div class="slide-box">
          <img src="../../assets/car1.png" />
        </div>
        <div class="slide-box">
          <img src="../../assets/car2.png" />
        </div>
        <div class="slide-box">
          <img src="../../assets/car3.png" />
        </div>
      </div>
      <button class="slide-left">&lt;</button>
      <button class="slide-1">1</button>
      <button class="slide-2">2</button>
      <button class="slide-3">3</button>
      <button class="slide-right">&gt;</button>
    </div>
    <!-- Step1은 CSS -->
    <script>
      // Step2 : 2번 버튼 클릭 시 슬라이드 이동
      var currentIndex = 0;

      $(".slide-2").on("click", function () {
        $(".slide-container").css("transform", "translateX(-100vw)");
        // Step7 : currentIndex 업데이트
        currentIndex = 1;
      });

      // Step3 : 1, 3번 버튼들도 동작하게 만들기
      $(".slide-1").on("click", function () {
        $(".slide-container").css("transform", "translateX(0vw)");
        // Step7 : currentIndex 업데이트
        currentIndex = 0;
      });
      $(".slide-3").on("click", function () {
        $(".slide-container").css("transform", "translateX(-200vw)");
        // Step7 : currentIndex 업데이트
        currentIndex = 2;
      });

      // Step4 : 오른쪽 버튼으로 슬라이드 이동
      var totalSlides = $(".slide-box").length;

      $(".slide-right").on("click", function () {
        if (currentIndex == 0) {
          $(".slide-container").css("transform", "translateX(-100vw)");
          currentIndex++;
        } else if (currentIndex == 1) {
          $(".slide-container").css("transform", "translateX(-200vw)");
          currentIndex++;
        }
      });

      // Step5 : 왼쪽 버튼으로 슬라이드 이동
      $(".slide-left").on("click", function () {
        if (currentIndex == 1) {
          $(".slide-container").css("transform", "translateX(0vw)");
          currentIndex--;
        } else if (currentIndex == 2) {
          $(".slide-container").css("transform", "translateX(-100vw)");
          currentIndex--;
        }
      });

      // Step6 : 문자열 속 변수 사용
      $(".slide-left").on("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          $(".slide-container").css(
            "transform",
            "translateX(" + -currentIndex * 100 + "vw)"
          );
        }
      });
      $(".slide-right").on("click", function () {
        if (currentIndex < totalSlides - 1) {
          currentIndex++;
          $(".slide-container").css(
            "transform",
            "translateX(" + -currentIndex * 100 + "vw)"
          );
        }
      });
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="2-5.css"
        language="css"
        code={`/* 2-4 */
.slide-container {
  width: 300vw;
  transition: all 1s;
  /* Step1 : 애니메이션 종료 후 화면 만들기 */
  /* transform: translateX(-100vw); */
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

export default Sample11;
