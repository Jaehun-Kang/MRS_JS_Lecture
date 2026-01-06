import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";
import logo from "../../../assets/logo.svg";

const Lesson12 = {
  name: "2-6 스크롤 이벤트",
  idx: 12,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>스크롤 이벤트</h2>
      <h3>navbar 만들기</h3>
      <Foldable title="navbar 코드">
        <CodeBlock
          filename="2-7.html"
          language="html"
          code={`<nav class="navbar">
  <div class="logo">
    <img class="logo_img" src="../../assets/logo.svg" />
    <span class="logo_text">마법연구회</span>
  </div>
</nav>
<h3 style="margin-top: 90px">약관</h3>
<div class="lorem" style="height: 200px; overflow-y: scroll">
  lorem750
</div>
<button disabled class="agree-button">약관에 동의합니다</button>
`}
        />
        <CodeBlock
          filename="2-7.css"
          language="css"
          code={`@font-face {
  font-family: "PyeongChangPeace-Light";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2")
    format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 5000px;
}

.navbar {
  position: fixed;
  background-color: rgb(240, 240, 240);
  padding: 10px;
  width: 100%;
  top: 0;
  z-index: 5;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo_img {
  height: 64px;
  width: auto;
}

.logo_text {
  font-family: "PyeongChangPeace-Light", sans-serif;
  font-size: 28px;
  line-height: 100%;
}
`}
        />
        <p>100px 이상 스크롤 시 로고 사이즈가 줄어든다.</p>
        <Attachment
          title="첨부파일 (assets 폴더에 넣기)"
          items={[{ alt: "logo.svg", src: logo }]}
        />
      </Foldable>
      <h3>스크롤 이벤트 리스너</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`window.addEventListener("scroll", function () {
  // 스크롤 시 실행할 코드
});
`}
      />
      <p>
        window는 전체 브라우저 창을 의미한다. document는 HTML 문서 전체를
        의미하지만 스크롤 이벤트는 관습적으로 window에 주로 사용한다.
      </p>
      <h3>스크롤 위치 확인</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`window.scrollX // 수평 스크롤 위치
window.scrollY // 수직 스크롤 위치
`}
      />
      <p>페이지를 얼마나 스크롤했는지 확인할 때 사용한다.</p>
      <h3>스크롤 위치 지정</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`window.scrollTo(x, y) // (x, y) 좌표로 스크롤 이동
window.scrollBy(x, y) // 현재 위치에서 (x, y) 만큼 스크롤 이동
`}
      />
      <p>
        스크롤 위치를 지정하거나 현재 위치에서 상대적으로 이동할 때 사용한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$(window).scrollTop(); // 수직 스크롤 위치
$(window).scrollTop(y); // y 위치로 수직 스크롤 이동
`}
      />
      <p>
        jQuery를 사용하면 scrollTop() 메서드만 사용하여 수직 스크롤 위치 확인과
        이동을 할 수 있다.
      </p>
      <h3>실제 높이</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector(".class").scrollTop; // 요소의 실제 스크롤 위치
document.querySelector(".class").scrollHeight; // 요소의 실제 높이
document.querySelector(".class").clientHeight; // 요소의 화면에 보이는 높이
`}
      />
      <h3>스크롤 이벤트 주의할 점</h3>
      <p>
        1. 스크롤 내린 양은 정수 단위로 나오지 않고, OS마다 부장확할 수 있기
        때문에 10px정도 여유를 두는 것이 좋다.
        <br />
        2. 스크롤 이벤트 리스너 안의 코드는 1초에 60번 이상 실행되므로 스크롤바
        1개마다 1개만 부착하여 성능 저하를 방지하는 것이 좋다.
      </p>
    </div>
  ),
};

export default Lesson12;
