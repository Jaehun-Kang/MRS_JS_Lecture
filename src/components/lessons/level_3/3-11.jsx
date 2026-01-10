import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";
import product1 from "../../../assets/product-0.jpg";
import product2 from "../../../assets/product-1.jpg";

const Lesson27 = {
  name: "3-11 LocalStorage 응용",
  idx: 27,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>LocalStorage 응용</h2>
      <h3>플리마켓 장바구니 만들기</h3>
      <Foldable title="플리마켓 장바구니 코드">
        <CodeBlock
          filename="3-11.html"
          language="html"
          code={`<div class="container">
  <div class="row"></div>
</div>

<div class="container">
  <a target="_blank" href="./3-11-1.html">
    <button class="btn btn-danger">장바구니 보기</button>
  </a>
</div>

<script>
  var products = [
    { id: 0, price: 12000, title: "CtrlS 키캡 버튼" },
    { id: 1, price: 4000, title: "p5.js 포토부스" },
  ];

  function makeCards(obj) {
    obj.forEach((a) => {
      var newCard = \`<div class="col-sm-4">
        <img src="../../assets/product-\${a.id}.jpg" class="w-100" />
        <h5>\${a.title}</h5>
        <p>가격 : \${a.price}</p>
        <button class="cart">장바구니 추가</button>
      </div>\`;
      $(".row").append(newCard);
    });
  }

  makeCards(products);
</script>
`}
        />
        <Attachment
          title="첨부파일 (assets 폴더에 넣기)"
          items={[
            { alt: "product-0.jpg", src: product1 },
            { alt: "product-1.jpg", src: product2 },
          ]}
        />
        <p>같은 상품을 여러 개 추가하면 상품 개수가 증가한다.</p>
      </Foldable>
    </div>
  ),
};

export default Lesson27;
