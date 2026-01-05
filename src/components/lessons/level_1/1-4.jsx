import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson4 = {
  name: "1-4 jQuery와 모달창",
  idx: 4,
  content: (
    <div className="lesson-content">
      <h2>jQuery와 모달창</h2>
      <h3>모달창 만들기</h3>
      <Foldable title="모달창 코드">
        <CodeBlock
          filename="1-3.html"
          language="html"
          code={`<div class="black-bg">
  <div class="white-bg">
    <h4>로그인하세요</h4>
    <button class="btn btn-danger" id="close">닫기</button>
  </div>
</div>`}
        />
        <CodeBlock
          filename="1-3.css"
          language="css"
          code={`.black-bg {
  width : 100%;
  height : 100%;
  position : fixed;
  background : rgba(0,0,0,0.5);
  z-index : 5;
  padding: 30px;
}

.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
} `}
        />
        <p>버튼을 누르면 모달창이 나타나거나 사라진다.</p>
      </Foldable>
      <h3>jQuery</h3>
      <p>
        jQuery는 JavaScript 라이브러리로, DOM 조작과 이벤트 처리를 간편하게
        해준다.
      </p>
      <Foldable title="Bootstrap / jQuery 라이브러리 모음">
        <CodeBlock
          filename="CDN"
          language="html"
          code={`<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
<!-- jQuery -->
<script
  src="https://code.jquery.com/jquery-3.7.1.min.js";
  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
`}
        />
      </Foldable>
      <CodeBlock
        filename="JavaScript"
        language="js"
        code={`document.querySelector(".class").innerHTML = "new text";
$(".class").html("new text"); // 동일한 기능
`}
      />
      <p>
        이렇게 좀 더 간결한 코드로 쓸 수 있다.
        <br />
        하지만 jQuery 셀렉터로 선택한 요소는 일반 DOM 메서드를 사용할 수 없고
        jQuery 함수를 사용해야 한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="js"
        code={`$(".class").text("new text"); // 텍스트만 변경(문자열로 반환)

$(".class").css("style", "value"); // 스타일 변경

$(".class").addClass("class"); // 클래스 추가

$(".class").removeClass("class"); // 클래스 제거

$(".class").toggleClass("class"); // 클래스 토글

$("#id").on("click", function () { // 이벤트 리스너 등록
  $(".class").slideUp(); // hide, fadeOut, slideUp / show, fadeIn, slideDown / fadeToggle 등
});`}
      />
      <p>외울 필요까진 없고, 검색했을 때 알아볼 수 있으면 된다.</p>

      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("#id").on("click", function () {
  $(".class").toggle(); // 클릭 시 display 토글
});`}
      />
      <h3>UI 애니메이션 만들기 순서</h3>
      <p>
        1. 시작 스타일 만들기 (CSS)
        <br />
        2. 종료 스타일 만들기 (CSS)
        <br />
        3. 애니메이션 시작 시점 구현 (JavaScript)
        <br />
        4. transition 속성 추가 (CSS)
      </p>
    </div>
  ),
};

export default Lesson4;
