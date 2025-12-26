import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";

const Lesson9 = {
  name: "2-4 캐러셀",
  idx: 9,
  content: (
    <div className="lesson-content">
      <h2>캐러셀</h2>
      <h3>캐러셀 만들기</h3>
      <Foldable title="캐러셀 코드">
        <CodeBlock
          filename="2-5.html"
          language="html"
          code={`<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="../../assets/car1.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car2.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car3.png">
    </div>
  </div>
  <button class="slide-left">&lt;</button>
  <button class="slide-1">1</button>
  <button class="slide-2">2</button>
  <button class="slide-3">3</button>
  <button class="slide-right">&gt;</button>
</div>
`}
        />
        <CodeBlock
          filename="2-5.css"
          language="css"
          code={`.slide-container {
  width: 300vw;
  transition: all 1s;
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
        <p>
          왼쪽, 1, 2, 3, 오른쪽 버튼을 누르면 애니메이션 효과와 함께 슬라이드가
          이동한다.
        </p>
        <Attachment
          title="첨부파일 (assets 폴더에 넣기)"
          items={[
            { alt: "car1.png", src: car1 },
            { alt: "car2.png", src: car2 },
            { alt: "car3.png", src: car3 },
          ]}
        />
      </Foldable>
      <h3>애니메이션 UI 만들기 순서</h3>
      <p>
        1. 애니메이션 시작 전 화면 HTML/CSS 구성
        <br />
        2. 애니메이션 종료 후 화면 HTML/CSS 구성
        <br />
        3. 애니메이션 시작 시점 JavaScript 구현
        <br />
        4. transition CSS 추가
      </p>
    </div>
  ),
};

export default Lesson9;
