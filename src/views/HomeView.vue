<template>
  <div class="container-fluid">
    <!-- 伸縮卡片區塊 -->
    <div class="container-fluid">
      <div class="row justify-content-center p-0">
        <div class="col-11 flex-card">
          <div class="panel active panel1">
            <!-- <h3>Explore the World</h3> -->
          </div>
          <div class="panel panel2">
            <!-- <h3>Wild Forest</h3> -->
          </div>
          <div class="panel panel3">
            <!-- <h3>Sunny Beach</h3> -->
          </div>
          <div class="panel panel4">
            <!-- <h3>City on Winter</h3> -->
          </div>
          <div class="panel panel5">
            <!-- <h3>Mountains - Clouds</h3> -->
          </div>
        </div>
      </div>
    </div>

    <!-- 自己種區塊 -->
    <div class="container-fluid why-box">
      <!-- 標語在 md 尺寸以上的螢幕不顯示 -->
      <div class="row justify-content-center d-md-none">
        <div class="col-6">
          <img
            src="../assets/pic/sm-為什麼選擇了養多肉.svg"
            class="my-5 img-fluid"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- 示意圖 -->
        <div class="col-lg-4 col-md-4 col-sm-10 img-box"></div>

        <!-- 標語在 md 尺寸以上的螢幕才顯示 -->
        <div class="col-2 d-none d-md-block section-image-block title-lg">
          <img src="../assets/pic/lg-為什麼選擇了養多肉.svg" width="88" />
        </div>
        <!-- 內文 -->
        <div class="col-lg-4 col-md-4 col-sm-10 writing-md-vertical">
          <p>
            多肉植物又被稱作肉質植物，種類多樣，主要生長於沙漠及海岸乾旱地區。多肉植物的根、莖特別肥大，葉片退化，以利於儲存大量的水分。仙人掌亦可算是一種多肉植物，而相較於仙人掌科，其他的多肉植物並無「刺座」的組織。
          </p>
        </div>
      </div>
    </div>

    <!-- 新手友善植栽 -->
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11">
          <h1 class="sub-title"># 新手友善植栽</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 slick">
          <slickBeginner></slickBeginner>
        </div>
      </div>
    </div>

    <!-- 夏日繽紛花卉 -->
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11">
          <h1 class="sub-title"># 夏日繽紛花卉</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 slick">
          <slickFlower></slickFlower>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="coupon">
          <div class="coupon-info">
            <h3>新會員首購，享最高5折優惠</h3>
            <button>馬上領取 <i class="fa-solid fa-arrow-pointer"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  /* outline: solid 1px red; */
  color: var(--main-color3);
  text-decoration: none;
}

.container-fluid {
  padding: 0px;
}

.row {
  margin: 0px !important;
}

/* 伸縮卡片 */
.flex-card {
  display: flex;
  margin-top: 50px;
}
.panel1 {
  background-image: url(../assets/banner/banner-1.png);
}
.panel2 {
  background-image: url(../assets/banner/banner-1.png);
}
.panel3 {
  background-image: url(../assets/banner/banner-1.png);
}
.panel4 {
  background-image: url(../assets/banner/banner-1.png);
}
.panel5 {
  background-image: url(../assets/banner/banner-1.png);
}
.panel {
  /* background-size: auto 100%; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 68vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  /* 因為想要h3是absolute */
  transition: flex 0.7s ease-in;
  /* add a transition on flex property */
  /* 0.7 sec duration */
}
.panel:first-child {
  margin-left: 0px;
}
.panel:last-child {
  margin-right: 0px;
}
.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0px;
  opacity: 0;
}
.panel.active {
  flex: 7;
}
.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
  /* 如果沒有這一行的話，一點開標題就會出現，在背景展開的過程中，標題會從兩行變一行，加上這行後opacity會延遲0.4秒並用0.3秒的時間ease in */
}
@media (max-width: 480px) {
  .container {
    width: 100vh;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}

/* 為什麼要自種區塊 */
.why-box {
  background-color: var(--main-color2);
  margin-top: 100px;
}

@media (min-width: 768px) {
  .writing-md-vertical {
    writing-mode: vertical-lr;
  }
}

.img-box {
  margin: -15px 0px;
  background-image: url("../assets/pic/grow-by-yourself.png");
  max-width: 100%;
  background-size: cover;
  min-height: 350px;
  background-position: center center;
}

.why-box p {
  line-height: 2.2;
  font-size: 18px;
  padding: 35px 0px;
  margin: 0px;
}

.why-box .title-lg {
  margin: -15px 0px;
  padding-left: 40px;
}

/* 自己種區塊的圖片、標題、內文限制高度，否則畫面寬度縮小時，圖片、文字會變細長 */
.img-box {
  max-height: 410px;
  /* 加上上下各-15的margin */
}
.title-lg,
.why-box p {
  max-height: 380px;
}

/* 小標 */
.sub-title {
  font-size: 30px;
  color: var(--main-color3);
  margin: 100px 0 10px 0;
  /* background-color: rgba(245, 207, 56, 0.3);
  width: fit-content;
  padding: 10px 15px;
  border-radius: 6px; */
}

/* slick  */
.slick {
  margin-top: 30px;
}

/* 商品卡片 */
.product-card {
  padding: 0px;
  background-color: white;
  border: 0.5px solid var(--main-color4);
  border-radius: 10px;
}
.product-card:hover {
  box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -10px;
}
.card-img {
  background-image: url("https://images.unsplash.com/photo-1581264542935-745d77881a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  width: 100%;
  height: 200px;
  background-position: center center;
  border-radius: 10px 10px 0 0;
}
.card-info {
  padding: 5px 15px 30px 15px;
  border-radius: 0 0 10px 10px;
}
.card-info h3 {
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 400;
}
.card-info .price b {
  font-size: 20px;
  color: var(--main-color3);
}
.card-info button {
  border: 2px solid var(--main-color4);
  background: none;
  border-radius: 5px;
  font-size: 18px;
  color: var(--main-color4);
  width: 100%;
  padding: 8px 12px;
  max-width: 100%;
  word-wrap: none;
}

.card-info button:hover {
  background-color: var(--main-color4);
  color: white;
}

.card-info .tag {
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 15px;
}

/* 新會員優惠 */
.coupon {
  background: url("https://images.unsplash.com/photo-1590951013207-872290c9f5f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80");
  background-size: cover;
  background-position: center center;
  height: 400px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 100px 0 50px;
  background-clip: content-box;
  /* 讓背景不要 overflow 到左右 12px 的 padding 上 */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.coupon-info {
  background-color: rgba(255, 255, 255, 0.4);
  color: var(--main-color3);
  padding: 80px 130px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
}
.coupon h3 {
  max-width: 100%;
  line-height: 80px;
}
.coupon button {
  padding: 10px 20px;
  max-width: 100%;
  border-radius: 3px;
  border: 0;
  background-color: var(--main-color4);
  color: white;
}
</style>

<script>
// @ is an alias to /src
import slickBeginner from "../components/slickBeginner.vue";
import slickFlower from "../components/slickFlower.vue";
export default {
  name: "HomeView",

  data() {
    return {
      products: [],
    };
  },

  mounted() {
    let panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActionClasses();
        panel.classList.add("active");
      });
    });

    function removeActionClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }

    this.axios.get("/products").then((res) => {
      this.products = res.data.data;
      //存進localStorage
      localStorage.setItem("products", JSON.stringify(this.products));
      //JSON.stringify 把物件或值轉成 json 格式
    });
  },
  components: { slickBeginner, slickFlower },
};
</script>
