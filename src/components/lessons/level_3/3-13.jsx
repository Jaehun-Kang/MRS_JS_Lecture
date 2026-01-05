import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson29 = {
  name: "3-13 마우스 이벤트",
  idx: 29,
  content: (
    <div className="lesson-content">
      <h2>마우스 이벤트</h2>
      <h3>캐러셀 스와이프 만들기</h3>
      <Foldable title="캐러셀 스와이프 코드">
        <CodeBlock
          filename="3-13.html"
          language="html"
          code={`<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="../../assets/car1.png"/>
    </div>
    <div class="slide-box">
      <img src="../../assets/car2.png"/>
    </div>
    <div class="slide-box">
      <img src="../../assets/car3.png"/>
    </div>
  </div>
</div>
`}
        />
        <p>스와이프하면 다음 슬라이드로 넘어간다.</p>
      </Foldable>
      <h3>마우스 이벤트</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").on("mousedown", function () { 
// element 위에서 마우스 버튼을 누를 때 실행할 코드
});
$("element").on("mousemove", function () {
  // element 위에서 마우스를 움직일 때 실행할 코드
});
$("element").on("mouseup", function () {
  // element 위에서 마우스 버튼을 뗄 때 실행할 코드
});
`}
      />
      <p>마우스 클릭, 드래그 등 이벤트를 처리할 수 있다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").on("mousemove", function (e) {
  e.clientX; // 마우스의 x 좌표
  e.clientY; // 마우스의 y 좌표
});
`}
      />
      <p>이렇게 마우스의 좌표도 구할 수 있다.</p>
      <h3>터치 이벤트</h3>
      <p>터치 이벤트는 아래와 같이 처리할 수 있다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").on("touchstart", function () { 
// element 위에서 터치가 시작될 때 실행할 코드
});
$("element").on("touchmove", function () {
  // element 위에서 터치 중일 때 실행할 코드
});
$("element").on("touchend", function () {
  // element 위에서 터치가 끝날 때 실행할 코드
});
`}
      />
      <h3>포인터 이벤트</h3>
      <p>
        포인터 이벤트는 마우스, 터치, 스타일러스 등 다양한 입력 장치를 통합하여
        처리할 수 있다.
        <br />
        이를 통해 마우스, 터치 이벤트를 통합할 수 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").on("pointerdown", function () { 
// element 위에서 포인터 입력이 시작될 때 실행할 코드
});
$("element").on("pointermove", function () {
  // element 위에서 포인터 입력이 움직일 때 실행할 코드
});
$("element").on("pointerup", function () {
  // element 위에서 포인터 입력이 끝날 때 실행할 코드
});
`}
      />
      <p>
        하지만 이 방법은 개발자 도구 Device Toolbar에서 터치 이벤트를 똑같이
        구현하지 못하기 때문에 실제 터치 기기에서 테스트하는 것이 좋다.
      </p>
    </div>
  ),
};

export default Lesson29;
