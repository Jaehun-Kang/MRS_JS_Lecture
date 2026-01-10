import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample21 = {
  name: "3-4",
  idx: 21,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-4</h2>
      <CodeBlock filename="3-4.html" language="html" code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select 2</title>
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
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 3-4 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
        <option>바지</option>
      </select>
      <select hidden class="form-select mt-2"></select>
    </form>

    <div id="test">
      <h4>HTML 생성 예제</h4>
    </div>

    <script>
      // Step2 : 태그 생성 후 내부 내용 설정
      var a = document.createElement("p");
      a.innerHTML = "새로운 텍스트";
      document.querySelector("#test").appendChild(a);

      // Step3 : 태그와 내용 문자열을 함께 생성
      var template = "<p class = classname>새 텍스트</p>";
      document.querySelector("#test").insertAdjacentHTML("beforeend", template);
      $("#test").append(template);
    </script>
    <!-- Step4 : prop() 실습 -->
    <input type="checkbox" />
    <button>disabled</button>
    <input type="text" />

    <script>
      $("input").prop("checked", true);
      $("button").prop("disabled", true);
      $("input").prop("placeholder", "뭔가를 입력해주세요");

      // Step5 : 확장성 있는 폼 생성
      var second = $(".form-select").eq(1);
      var shirts = \`<option>90</option>
        <option>95</option>
        <option>100</option>
        <option>105</option>
        <option>110</option>\`;
      var pants = \`<option>28</option>
      <option>30</option>\`;

      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          // input 혹은 change 시 작동
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html(shirts);
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html(pants);
          } else {
            second.prop("hidden", true);
          }
        });
    </script>
  </body>
</html>
`} />
    </div>
  ),
};

export default Sample21;
