import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample2 = {
  name: "1-2",
  idx: 2,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>1-2</h2>
      <CodeBlock
        filename="1-2.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>동적 UI 1</title>
    <link rel="stylesheet" href="./1-2.css" />
  </head>
  <body>
    <!-- 기본 코드 -->
    <div class="alert-box">알림창</div>

    <!-- Step1 : onclick -->
    <!-- 숙제 : 닫기 버튼 만들기 -->
    <div class="alert-box" id="alert">
      알림창
      <button
        onclick="document.getElementById('alert').style.display = 'none';"
      >
        닫기
      </button>
    </div>
    <button onclick="document.getElementById('alert').style.display = 'block';">
      열기
    </button>

    <!-- Step2 : 함수 -->
    <!-- 숙제 : closeAlert 함수 만들기 -->
    <div class="alert-box" id="alert">
      알림창
      <button onclick="closeAlert()">닫기</button>
    </div>
    <button onclick="openAlert()">열기</button>

    <script>
      function openAlert() {
        document.getElementById("alert").style.display = "block";
      }
      function closeAlert() {
        document.getElementById("alert").style.display = "none";
      }
    </script>

    <!-- Step3 : 파라미터 -->
    <div class="alert-box" id="alert">
      알림창
      <button onclick="toggleAlert('none')">닫기</button>
    </div>
    <button onclick="toggleAlert('block')">열기</button>

    <script>
      function toggleAlert(display) {
        document.getElementById("alert").style.display = display;
      }
    </script>

    <!-- Step3.1 : 파라미터 예시 -->
    <script>
      function plus() {
        2 + 1;
      }

      function plus2() {
        2 + 2;
      }

      function plus3() {
        2 + 3;
      }

      function plusN(n) {
        return 2 + n;
      }
    </script>

    <!-- Step4 : 파라미터 응용 -->
    <div class="alert-box" id="alert">
      <p id="alert-text">알림창</p>
      <button onclick="toggleAlert('none')">닫기</button>
    </div>
    <button onclick="openAlert('block', '아이디 입력하세요')">아이디</button>
    <button onclick="openAlert('block', '비밀번호 입력하세요')">
      비밀번호
    </button>

    <script>
      function openAlert(display, content) {
        document.getElementById("alert").style.display = display;
        document.getElementById("alert-text").innerHTML = content;
      }
    </script>

    <!-- Step5 : 이벤트리스너와 콜백함수 -->
    <div class="alert-box" id="alert">
      <p id="alert-text">알림창</p>
      <button id="close">닫기</button>
    </div>
    <button onclick="openAlert('block', '아이디 입력하세요')">아이디</button>
    <button onclick="openAlert('block', '비밀번호 입력하세요')">
      비밀번호
    </button>

    <script>
      document.getElementById("close").addEventListener("click", function () {
        document.getElementById("alert").style.display = "none";
      });

      function openAlert(display, content) {
        document.getElementById("alert").style.display = display;
        document.getElementById("alert-text").innerHTML = content;
      }
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="1-2.css"
        language="css"
        code={`/* 1-2 */
.alert-box {
  background-color: skyblue;
  padding: 20px;
  color: white;
  border-radius: 5px;
  display: none;
}
`}
      />
    </div>
  ),
};

export default Sample2;
