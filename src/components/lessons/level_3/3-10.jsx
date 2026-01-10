import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson26 = {
  name: "3-10 LocalStorage",
  idx: 26,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>LocalStorage</h2>
      <h3>장바구니 수강신청 만들기</h3>
      <Foldable title="장바구니 수강신청 코드">
        <CodeBlock
          filename="3-10.html"
          language="html"
          code={`<div class="container">
  <table class="table table-striped">
    <thead>
      <tr>
        <th id="grade">학년</th>
        <th id="title">강의명</th>
        <th id="professor">교수명</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<div class="container">
  <a target="_blank" href="./3-10-1.html">
    <button class="btn btn-danger">장바구니 보기</button>
  </a>
</div>

<script>
  var lectures = [];
  
  \$.when(
    \$.get("https://jaehun-kang.github.io/JS_Lecture/lectures.json"),
    \$.get("https://jaehun-kang.github.io/JS_Lecture/more1.json"),
    \$.get("https://jaehun-kang.github.io/JS_Lecture/more2.json")
  ).done(function (grade2, grade3, grade4) {
    lectures = [...grade2[0], ...grade3[0], ...grade4[0]];
    displayTable();
  });
  
  function displayTable() {
    var tableContent = '';
    lectures.forEach(function (lecture) {
      tableContent += \`<tr>
        <td>\${lecture.grade}</td>
        <td>\${lecture.title}</td>
        <td>\${lecture.professor}</td>
        <td>
          <button class="cart">장바구니 추가</button>
        </td>
      </tr>\`;
    });
    \$("tbody").html(tableContent);
  }
</script>`}
        />
        <p>
          장바구니 추가 버튼을 누르면 강의 제목을 LocalStorage에 저장하고, 장바구니 보기
          버튼을 누르면 장바구니 페이지를 보여준다.
          <br />
          이미 장바구니에 추가된 강의는 저장되지 않는다.
        </p>
      </Foldable>
      <h3>브라우저 저장공간</h3>
      <p>
        개발자 도구의 Application 텝에 들어가보면 여러 종류의 저장공간이 있다.
      </p>
      <p>
        - Local Storage / Session Storage
        <br />
        &#123; key : value &#125; 형태로 문자, 숫자 데이터 저장 가능
      </p>
      <p>
        - IndexedDB
        <br />
        크고 많은 구조화된 데이터 저장 가능
      </p>
      <p>
        - Cookies
        <br />
        유저 인증 정보 저장에 주로 사용
      </p>
      <p>
        - Cache Storage
        <br />
        HTML, CSS, JS, IMG 파일 저장 가능
      </p>
      <p>
        Local Storage / Session Storage는 문자, 숫자 데이터만 key : value 형태로
        저장이 가능하고, 5MB 용량 제한이 있다.
        <br />
        Local Storage는 브라우저를 닫아도 데이터가 유지되지만, Session Storage는
        브라우저를 닫으면 데이터가 삭제된다.
      </p>
      <h3>Local Storage</h3>

      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`localStorage.setItem("key", value) // 저장
localStorage.getItem("key") // 불러오기
localStorage.removeItem("key") // 삭제
localStorage.clear() // 전체 삭제
`}
      />
      <p>문자, 숫자만 저장할 수 있다.</p>
      <h3>배열과 객체 저장/불러오기</h3>
      <p>
        Array/Object를 그냥 저장하면 강제로 문자열로 변환하여 저장하는데, 자료가
        깨질 위험이 있다.
        <br />
        .stringify()를 사용하여 JSON으로 변환 후 저장하면 안전하게 저장할 수
        있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];
var newArr = JSON.stringify(arr); // 배열을 JSON 문자열로 변환

localStorage.setItem("key", newArr); // 변환한 문자열 localStorage에 저장
`}
      />
      <p>
        저장할 때 문자열로 변환하여 저장했으니 불러오면 문자열 상태이다.
        <br />
        .parse()를 사용하여 다시 배열/객체로 변환해주어야 한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var load = localStorage.getItem("key");
load = JSON.parse(load); // JSON 문자열을 다시 배열/객체로 변환
`}
      />
      <h3>.siblings()</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$("element").siblings(); // 모든 형제 요소 선택
$("element").siblings("tag"); // tag에 해당하는 형제 요소 모두 선택
$("element").siblings(".class"); // class에 해당하는 형제 요소 모두 선택
$("element").siblings("#id"); // id에 해당하는 형제 요소 선택
`}
      />
      <p>
        JavaScript로는 형제 요소를 찾기 위해 previousElementSibling,
        nextElementSibling을 사용하는데,
        <br />
        코드가 길어지기 때문에 jQuery의 .siblings() 메서드를 사용하면 편리하다.
      </p>
      <h3>LocalStorage 수정</h3>
      <p>
        LocalStorage 안에 있는 데이터를 직접 수정하는 문법은 없다.
        <br />
        수정하려면 데이터를 불러온 후 수정하고 다시 저장해야 한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`if (localStorage.getItem('key') != null ){ // key가 존재하는지 확인
  var pull = JSON.parse(localStorage.key); // key에 해당하는 데이터 불러오기
  pull.push(newValue); // 불러온 데이터 수정
  localStorage.setItem('key', JSON.stringify(pull)); // 수정한 데이터로 덮어쓰기
} else {
  localStorage.setItem('key', JSON.stringify([newValue])) // key가 없으면 새로 저장
}
`}
      />
    </div>
  ),
};

export default Lesson26;
