import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson25 = {
  name: "3-10 LocalStorage",
  idx: 25,
  content: (
    <div className="lesson-content">
      <h2>LocalStorage</h2>
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
`}
      />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="filename" language="language" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson25;
