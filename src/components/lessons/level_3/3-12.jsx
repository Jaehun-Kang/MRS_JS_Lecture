import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson27 = {
  name: "3-12 스크롤 애니메이션",
  idx: 27,
  content: (
    <div className="lesson-content">
      <h2>스크롤 애니메이션</h2>
      <h3>스크롤 애니메이션 만들기</h3>
      <Foldable title="스크롤 애니메이션 코드">
        <CodeBlock
          filename="3-12.html"
          language="html"
          code={`<div class="card-bg">
  <div class="card-box">
    <img src="../../assets/car1.png"/>
  </div>
  <div class="card-box">
    <img src="../../assets/car2.png"/>
  </div>
  <div class="card-box">
    <img src="../../assets/car3.png"/>
  </div>
</div>
`}
        />
        <CodeBlock
          filename="3-12.css"
          language="css"
          code={`.card-bg {
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
        <p>스크롤바를 내리면 이미지가 서서히 작아지며 사라진다.</p>
      </Foldable>
      <h3>스크롤 애니메이션</h3>
      <p>어떤 애니메이션이든 시작 부분과 끝 부분을 만들고 연결해주면 된다.</p>
      <CodeBlock
        filename="Javascript"
        language="javascript"
        code={`$(window).scroll(function () {
  var scrollH = $(window).scrollTop(); // 현재 스크롤된 높이 값
});
`}
      />
      <p>스크롤 애니메이션은 계산을 조금 해야한다.</p>
      <CodeBlock
        filename="Javascript"
        language="javascript"
        code={`value1 = a * scrollY1 + b; // 애니메이션 시작 위치값
value2 = a * scrollY2 + b; // 애니메이션 끝 위치값
`}
      />
      <p>
        value 부분에는 opacity, scale 등 원하는 CSS 속성값(숫자)을 넣고,
        애니메이션을 시작할 스크롤 위치와 끝나는 스크롤 위치를 지정해주면 된다.
      </p>
      <CodeBlock
        filename="Javascript"
        language="javascript"
        code={`$(window).scroll(function () {
  var property = a * $(window).scrollTop() + b; // 위에서 구한 a, b 값 사용
  $("element").css("property", property); // property 부분에 원하는 CSS 속성 넣기
});
`}
      />
    </div>
  ),
};

export default Lesson27;
