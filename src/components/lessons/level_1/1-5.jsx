import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson5 = {
  name: "1-5 if/else function 응용",
  idx: 5,
  level: 1,
  content: (
    <div className="lesson-content">
      <h2>if/else function 응용</h2>
      <div>
        <h3>&lt;form&gt; 만들기</h3>
        <Foldable title="폼 코드">
          <CodeBlock
            filename="1-3.html"
            language="html"
            code={`<form action="success.html">
  <div class="my-3">
    <input type="text" class="form-control">
  </div>
  <div class="my-3">
    <input type="password" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">전송</button>
  <button type="button" class="btn btn-danger" id="close">닫기</button>
</form>
`}
          />
          <p>전송 버튼을 누르면 폼 전송이 되며 success.html로 이동한다.</p>
        </Foldable>
        <h3>if else 조건문</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (boolean) {
  // 조건문이 참일 때 실행할 코드
}

if (boolean) {
  // 조건문이 참일 때 실행할 코드
} else {
  // 조건문이 거짓일 때 실행할 코드
};
`}
        />
        <p>조건문 자리에는 boolean(true 또는 false)이 들어가야 한다.</p>
        <h3>비교 연산자</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`==, === // 값이 같음, 타입도 같음
!=, !== // 같지 않음, 타입도 다름
>, <, >=, <= // 크기 비교
`}
        />
        <p>비교 연산자를 연쇄 사용하면 의도한 대로 값이 나오지 않는다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (1 < 1 < 1) {
  // 실행 됨
};
`}
        />
        <h3>Truthy와 Falsy</h3>
        <p>Truthy는 true로 인식하는 자료를 의미한다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`1 // 0이 아닌 모든 숫자
' ' // 비어있지 않은 문자열
[] // 빈 배열
{} // 빈 객체
`}
        />
        <p>Falsy는 false로 인식하는 자료를 의미한다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`0
'' // 빈 문자열
null // 값이 없음
undefined // 정의되지 않음
NaN // 숫자가 아님
`}
        />
        <h3>폼 검증 함수 만들기</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`$('form').on('submit', function(){
  // 폼 검증 코드 작성
});
`}
        />
        <p>submit 이벤트에 대해 코드를 작성하면 된다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`document.getElementById('id').value
$('#id').val() // 요소의 값
`}
        />
        <p>이렇게 하면 해당 요소의 값을 가져올 수 있다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`$('element').on('event', function(e){
  e.preventDefault() // 이벤트 동작 방지
};
`}
        />
        <p>
          이건 이벤트의 기본 동작을 막는 역할을 하는데, 이벤트 리스너에 사용하면
          이벤트를 막아준다.
          <br />
          특히 폼 제출, 링크 이동, 드래그 앤 드롭 등의 기능을 조작할 때
          유용하다.
        </p>
        <h3>else if</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (boolean1) {
  // 조건1이 참일 때 실행할 코드
} else if (boolean2) {
  // 조건2가 참일 때 실행할 코드
};
`}
        />
        <p>if 조건문 뒤에 원하는 만큼 추가할 수 있다.</p>
        <h3>input, change 이벤트</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`document.getElementById('id').addEventListener('input', function(){
  // input 이벤트 발생 시 실행할 코드
});
`}
        />
        <p>&lt;input&gt;에 입력된 값이 변경될 때 실행된다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`document.getElementById('id').addEventListener('change', function(){
  // change 이벤트 발생 시 실행할 코드
});
`}
        />
        <p>&lt;input&gt;에 입력된 값이 변경되고 포커스가 해제되면 실행된다.</p>
        <h3>and/or 연산자</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (boolean1 && boolean2){ // and 연산자
  // 두 조건문이 모두 참일 때 실행할 코드
};

if (boolean1 || boolean2){ // or 연산자
  // 두 조건문 중 하나라도 참일 때 실행할 코드
};
`}
        />
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (true && false && (true || false)) {
  // 실행 안됨
};
`}
        />
        <p>
          이런 식으로 and/or 연산자를 여러 개 사용한 경우 계산되는 순서를 잘
          이해해야 한다.
          <br />
          괄호 → AND 연산자 → OR 연산자 순으로 계산되니 유의하고 사용하자.
        </p>
        <Foldable title="퀴즈">
          <CodeBlock
            filename="1. 구구단 3단 게임"
            language="javascript"
            code={`function gameTimes3(num) {
  // num이 3의 배수면 "짝"을 반환
  // 포함하지 않으면 "패스"를 반환
}
`}
          />
          <CodeBlock
            filename="2. 변형 구구단 3단 게임"
            language="javascript"
            code={`function gameTimes3v2(num) {
  // num이 3의 배수면 "짝"을 반환
  // num이 9의 배수면 "짝짝"을 반환
  // 포함하지 않으면 "패스"를 반환
}
`}
          />
          <CodeBlock
            filename="3. 일의 자리 369 게임"
            language="javascript"
            code={`function game369(num) {
  // num의 일의 자리가 3, 6, 9 중 하나에 포함되면 "짝"을 반환
  // 포함하지 않으면 "패스"를 반환
}
`}
          />
          <CodeBlock
            filename="4. 패논패 여부"
            language="javascript"
            code={`function pnp(mid, final){
  // 두 시험 점수의 합이 120점 이상이면 "합격" 반환
  // 하지만 한 과목이라도 40점 미만이면 "불합격" 반환
}
`}
          />
          <CodeBlock
            filename="5. 패논패 여부(100점 만점)"
            language="javascript"
            code={`function clampPnp(mid, final){
  // 두 시험 점수의 합이 120점 이상이면 "합격" 반환
  // 하지만 한 과목이라도 40점 미만이면 "불합격" 반환
  // 중간 기말 점수는 각각 100점 만점
}
`}
          />
        </Foldable>
      </div>
    </div>
  ),
};

export default Lesson5;
