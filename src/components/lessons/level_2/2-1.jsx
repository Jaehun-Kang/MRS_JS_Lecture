import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson6 = {
  name: "2-1 연산 응용",
  idx: 6,
  content: (
    <div className="lesson-content">
      <h2>연산 응용</h2>
      <h3>축약형 연산자</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`num = num + 1; // 덧셈
num += 1;
num++;

num = num - 1; // 뺄셈
num -= 1;
num--;

num = num * 2; // 곱셈
num *= 2;

num = num * num; // 제곱
num = num ** 2;
num **= 2;

num = num / 2; // 나눗셈
num /= 2;

num = num % 2; // 나머지
num %= 2;
`}
      />
      <p>축약형 연산자를 사용하면 연산과 할당을 동시에 할 수 있다.</p>
      <Foldable title="퀴즈">
        <CodeBlock
          filename="1. 나이와 출생년도"
          language="javascript"
          code={`// 나이와 출생년도를 저장하는 변수를 각각 생성하라.
// 나이는 재할당 가능, 출생년도는 불가능하게 생성해야 한다.
`}
        />
        <CodeBlock
          filename="2. 변수 출력은?"
          language="javascript"
          code={`var lastName = '박';
var id = 0;

function showName(){
  var lastName = '김';
  var id = 1;
  console.log(lastName);
}

showName(); // 무엇이 출력될까?
console.log(id); // 무엇이 출력될까?
`}
        />
        <CodeBlock
          filename="3. 이자율 계산기"
          language="javascript"
          code={`var deposit = 60000;
var futureValue = 0;

// 첫 예금액이 50000원 미만이면 이자율이 연 15%, 이상이면 연 20%이다.
// 2년 후의 예금액을 출력하는 계산기를 만들어보자.

console.log(futureValue);
`}
        />
        <CodeBlock
          filename="4. 커피 리필 계산기"
          language="javascript"
          code={`var first = 360;
// 가장 최근에 받은 커피 양의 2/3씩 총 2번 리필 가능하다.
// 마실 수 있는 최대 커피 양을 출력하는 계산기를 만들어보자.
`}
        />
        <CodeBlock
          filename="5. 커피 무한리필 계산기"
          language="javascript"
          code={`var first = 360;
// 가장 최근에 받은 커피 양의 2/3씩 무한 리필 가능하다.
// 마실 수 있는 최대 커피 양을 출력하는 계산기를 만들어보자.
// 무한등비수열의 합 공식: S = a / (1 - r)
// a: 첫 번째 항, r: 공비
`}
        />
        <CodeBlock
          filename="6. 온라인 퀴즈 UI"
          language="html"
          code={`<p>1~5 중 내가 생각한 숫자 하나는? 기회는 3번 줄게</p>
<input type="text" id="answer">
<button id="send-answer">이건가?</button>

<script>
  // 정답이면 alert("정답!"), 3번 찍어서 오답이면 alert("땡!")
</script>
`}
        />
      </Foldable>
    </div>
  ),
};

export default Lesson6;
