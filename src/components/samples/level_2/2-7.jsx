import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample13 = {
  name: "2-7",
  idx: 13,
  level: 2,
  content: (
    <div className="lesson-content">
      <h2>2-7</h2>
      <CodeBlock
        filename="2-7.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>스크롤 이벤트</title>
    <link rel="stylesheet" href="./2-7.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 2-6 기본 코드 -->
    <nav class="navbar">
      <div class="logo">
        <img class="logo_img" src="../../assets/logo.svg" />
        <span class="logo_text">마법연구회</span>
      </div>

      <!-- Step7 : 스크롤 진행바 -->
      <div class="scroll-progress"></div>
    </nav>
    <h3 style="margin-top: 90px">약관</h3>
    <div class="lorem" style="height: 200px; overflow-y: scroll">
      <!-- lorem750 -->
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corrupti
      quasi voluptatem ex ad. Illo reiciendis natus aliquid quas, animi saepe.
      Nisi autem voluptatem nihil omnis iste praesentium assumenda facere
      consectetur blanditiis nostrum dicta, incidunt veritatis earum quos,
      asperiores hic aspernatur ullam quae. Iusto obcaecati consectetur dolorum
      amet voluptates et. Molestias, praesentium culpa impedit aperiam expedita
      similique nesciunt dolorum! Atque ipsa, nam molestias dolorum quisquam eos
      quo iusto repellat unde vel quas! Labore nihil omnis illo cupiditate et
      iusto, consequuntur, harum aperiam assumenda explicabo dolor? Ducimus
      ullam vero dolorem veniam soluta, voluptate reiciendis dignissimos
      aspernatur ipsam quas veritatis non dicta repellendus? Odit nisi ducimus
      omnis voluptates, deleniti, vel odio placeat, magni consequuntur dolor
      ipsum voluptatum tempora dignissimos praesentium ab doloribus voluptatem
      expedita ipsa! Doloremque ratione ab quas ducimus blanditiis in eveniet
      quasi itaque deserunt impedit inventore, sit, aliquid nihil dolorem
      laborum ex quos a minus corporis, reprehenderit vel quod asperiores
      voluptatem minima? Deserunt est nostrum sapiente sed nemo, vitae similique
      accusamus quod, ea animi accusantium et eius voluptatum pariatur, officiis
      eaque ad excepturi. Fugiat nobis eaque debitis nesciunt incidunt nemo
      eligendi officia dolore impedit, corporis at velit distinctio. Maiores
      sunt quia cum officia explicabo rem rerum tenetur officiis sed ullam
      necessitatibus, eius alias at voluptate modi, laboriosam numquam quo,
      veniam magni praesentium mollitia? Ut tenetur quo temporibus repudiandae
      placeat voluptatum explicabo commodi, repellat perspiciatis perferendis
      libero ipsa exercitationem odio magni mollitia vitae esse natus
      praesentium quae? Ab reprehenderit pariatur, nihil velit, quibusdam veniam
      nam laudantium eligendi mollitia dolorem quisquam, facere maxime earum
      laborum. Architecto velit corporis dignissimos molestiae unde tempora a
      temporibus debitis eveniet, recusandae nihil modi, cupiditate, dolores
      quae commodi nobis voluptatum incidunt sed fuga explicabo quam ullam
      asperiores voluptatibus eos? Maiores suscipit tenetur nisi debitis unde
      vel ipsum obcaecati soluta? Quia reprehenderit optio eveniet ipsum omnis,
      quos tempora dolores veritatis mollitia accusamus facere quidem laudantium
      deleniti labore eum libero provident. Maxime nulla saepe corrupti deserunt
      in architecto beatae error nemo dolorum. Nam odit qui tempore deserunt
      sunt nisi tenetur soluta, enim, magnam dolorem beatae sint voluptates
      assumenda necessitatibus, fugit a eius voluptas iusto! Labore unde est
      vitae saepe eaque. Quis iste hic odit reprehenderit nobis voluptas,
      tempore consectetur eaque veniam cumque ducimus magnam? Quae, vero. Vitae
      omnis recusandae voluptatum qui sequi numquam magnam id repellat mollitia
      aliquid eaque nam laborum doloribus necessitatibus fugit ex nostrum rem
      consequuntur quasi illum unde nemo, magni vero modi. Ipsam ducimus
      necessitatibus est cupiditate nemo eos neque incidunt. Dicta dolorum
      molestias dolore, ducimus vitae dolores voluptate magnam nemo, et cumque
      incidunt quisquam, cupiditate tempora est libero eum mollitia possimus
      minima! Quae facilis recusandae tempora veniam sint magni ad rem, ipsum
      error maxime? Distinctio, sit, ullam architecto atque repellat expedita
      deleniti debitis optio officia eveniet ut esse similique! Expedita porro,
      molestias obcaecati temporibus, esse perspiciatis rem vero reprehenderit
      veniam corrupti modi! Est sunt at nisi architecto possimus dignissimos a
      nam ducimus doloremque, unde, porro praesentium eius minima quis
      repudiandae qui quos. Dolorem fuga voluptas omnis consectetur molestiae
      quisquam illo, eius reiciendis esse eligendi? Laboriosam quaerat odit
      sequi et modi in harum qui, labore aspernatur cumque, autem maxime
      quisquam minus earum sapiente fuga soluta? Sint ipsa eveniet dolores
      culpa, voluptatum porro quas architecto laudantium quidem consectetur non
      itaque modi cupiditate ducimus odit facere nulla nihil, quia possimus iste
      tenetur at autem! Magni cum, incidunt rerum quas ipsam, laboriosam esse
      quidem amet tempore dolore in saepe quod alias, quam aperiam eligendi
      tempora deserunt et sequi laudantium aspernatur numquam consequatur.
      Dolorum at, fugit ullam possimus dignissimos est quidem velit! Odio
      voluptates temporibus nostrum quasi, magnam deserunt ad dolor quod veniam
      inventore. Vero totam vitae, ex autem iusto corrupti, facilis facere
      cupiditate voluptatum quibusdam tenetur dolorum velit debitis. Quo beatae
      eius architecto provident enim alias! Id animi nulla culpa asperiores
      nobis? Veritatis, sint minus. Numquam, modi culpa qui beatae ad quisquam
      ducimus. Voluptatibus velit officia harum ullam illo dignissimos itaque,
      accusantium sint ipsam quidem optio odio ab dolore mollitia eos nam. Quos
      officiis quidem esse, iusto quibusdam corporis quo tempore facere
      provident sit laudantium temporibus necessitatibus illo quam harum iure
      aspernatur ut earum. Vero, cumque eos fugiat sint facere, consectetur
      ipsam, laudantium iure nemo ea harum. Hic numquam iusto aliquam error
      praesentium quae non, officia id nemo ex explicabo earum repellendus
      quidem et. Eius voluptates delectus tenetur asperiores ipsa sapiente
      expedita consequuntur nesciunt rem magni? Sint qui omnis facere cumque
      quos perferendis modi ad suscipit. Odit enim velit possimus sed optio
      quae, magnam beatae dolor harum, tempora sint totam iusto, laborum minima
      quasi necessitatibus impedit id! Perferendis, aperiam?
    </div>
    <button disabled class="agree-button">약관에 동의합니다</button>

    <script>
      // Step1 : 스크롤 이벤트리스너 연습
      window.addEventListener("scroll", function () {
        console.log("스크롤");
      });

      // Step2 : scrollY, scrollTo, scrollBy
      window.addEventListener("scroll", function () {
        console.log("scrollX: " + window.scrollX);
        console.log("scrollY: " + window.scrollY);
        // window.scrollTo(0, 100);
        // window.scrollBy(0, 1);
      });

      // Step3 : jQuery 버전
      $(window).on("scroll", function () {
        console.log("scrollTop(): " + $(window).scrollTop());
      });

      // Step4 : 로고 사이즈 조절
      // 숙제 : 스크롤 100px 내리면 로고 사이즈 작아지도록 하기
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
          $(".logo_img").css("height", "48px");
          $(".logo_text").css("fontSize", "21px");
        } else {
          $(".logo_img").css("height", "64px");
          $(".logo_text").css("fontSize", "28px");
        }
      });

      // Step5 : 약관 스크롤값 테스트
      $(".lorem").on("scroll", function () {
        console.log("scrollTop: " + document.querySelector(".lorem").scrollTop);
        console.log(
          "scrollHeight: " + document.querySelector(".lorem").scrollHeight
        );
        console.log(
          "clientHeight: " + document.querySelector(".lorem").clientHeight
        );
      });

      // Step6 : 약관 스크롤 기능 구현
      // 숙제 : 직접 해보기
      $(".lorem").on("scroll", function () {
        var scrollAmt =
          document.querySelector(".lorem").scrollTop +
          document.querySelector(".lorem").clientHeight;
        var scrollHeight = document.querySelector(".lorem").scrollHeight;
        console.log(scrollAmt, scrollHeight);

        if (scrollAmt + 10 >= scrollHeight) {
          document.querySelector(".agree-button").disabled = false;
        }
      });

      $(".agree-button").on("click", function () {
        $(".agree-button").toggleClass("agreed");
      });

      // Step7 : 스크롤 진행바
      $(window).on("scroll", function () {
        $(".scroll-progress").css(
          "width",
          ($(window).scrollTop() /
            (document.querySelector("html").scrollHeight -
              document.querySelector("html").clientHeight)) *
            100 +
            "%"
        );
      });
    </script>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="2-7.css"
        language="css"
        code={`/* 2-6 */
@font-face {
  font-family: "PyeongChangPeace-Light";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2")
    format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 5000px;
}

.navbar {
  position: fixed;
  background-color: rgb(240, 240, 240);
  padding: 10px;
  width: 100%;
  top: 0;
  z-index: 5;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo_img {
  height: 64px;
  width: auto;
  /* Step4 : 로고 사이즈 조절 */
  transition: height 300ms;
}

.logo_text {
  font-family: "PyeongChangPeace-Light", sans-serif;
  font-size: 28px;
  line-height: 100%;
  /* Step4 : 로고 사이즈 조절 */
  transition: font-size 300ms;
}

/* Step6 : 약관 스크롤 기능 구현 */
.agreed {
  background-color: rgb(26, 79, 255);
  color: white;
}

/* Step7 : 스크롤 진행바 */
.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  background-color: black;
  width: 0%;
  transition: width 150ms;
}
`}
      />
    </div>
  ),
};

export default Sample13;
