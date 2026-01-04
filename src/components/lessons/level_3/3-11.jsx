import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson26 = {
  name: "3-11 LocalStorage 응용",
  idx: 26,
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
  <a href="./3-11-1.html">
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
        <img src="product-\${a.id}.jpg" class="w-100" />
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
        <CodeBlock
          filename="3-11-1.html"
          language="html"
          code={`<h3>장바구니</h3>
<ul class="list"></ul>

<script>
  var cartList = JSON.parse(localStorage.getItem("cart"));
  console.log(cartList);
  cartList.forEach((i) => {
    var newCard = \`<li>\${i.name} \${i.count}개</li>\`;
    $(".list").append(newCard);
  });
</script>
`}
        />
        <p>같은 상품을 여러 개 추가하면 상품 개수가 증가한다.</p>
      </Foldable>
    </div>
  ),
};

export default Lesson26;
