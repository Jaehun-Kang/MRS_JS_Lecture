import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";

const Lesson10 = {
  name: "2-4 캐러셀",
  idx: 10,
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
      <h3>문자열 속 변수</h3>
      <p>
        문자열 속에 특정 변수를 넣고 싶을 때 사용할 수 있는 두 가지 방법이 있다.
      </p>
      <p>1. + 연산자 사용</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name = value;
console.log("값은 " + name + "입니다."); // 값은 value입니다.
`}
      />
      <p>2. 백틱 사용</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name = value;
console.log(\`값은 \${name}입니다.\`); // 값은 value입니다.
`}
      />
    </div>
  ),
};

export default Lesson10;
