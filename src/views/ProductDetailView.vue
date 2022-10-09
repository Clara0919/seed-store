<template>
  <!-- 麵包屑 -->
  <div class="container-fluid">
    <div class="row d-flex justify-content-around pt-4">
      <div class="col-10">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ category }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row d-flex justify-content-center gx-4">
      <div class="col-lg-5 col-md-5 col-sm-10 product-img">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="img1" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="img2" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="img3" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-10 product-intro">
        <h2>{{ title }}</h2>
        <p>產品類別：{{ category }}</p>
        <p>包裝數量：{{ seedAmount }}</p>
        <p class="price">NT $ {{ price }}</p>
        <hr />
        <ol>
          <li>全館單筆購物滿 NT $ 599 免運費。</li>
          <li>
            商品到貨享十天猶豫期之權益（猶豫期非試用期），辦理退貨商品必須是全新且包裝完整。
          </li>
          <li>
            收到商品請依正常程序儘速檢查商品，若商品發現瑕疵，可申請更換新品或退貨。
          </li>
          <li>此商品不可配送離島區域。</li>
        </ol>
        <div class="buy-product md-extend">
          <!-- 加減數量 -->

          <div class="quantity input-group">
            <button class="btn btn-default" @click="decrement()">-</button>

            <input class="number" type="number" min="0.00" :value="quantity" />

            <button class="btn btn-default" @click="increment()">+</button>
          </div>

          <!-- 加入購物車 -->
          <input
            class="btn add-cart"
            type="button"
            value="加入購物車"
            @click="addCart(id, quantity)"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-10 p-0">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="about-plant-tab"
              data-bs-toggle="tab"
              data-bs-target="#about-plant"
              type="button"
              role="tab"
              aria-controls="about-plant"
              aria-selected="true"
            >
              植栽特性
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="plant-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#plant-info"
              type="button"
              role="tab"
              aria-controls="plant-info"
              aria-selected="false"
            >
              種植資訊
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="about-plant"
            role="tabpanel"
            aria-labelledby="about-plant-tab"
          >
            <p class="plant-detail">
              {{ feature }}
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="plant-info"
            role="tabpanel"
            aria-labelledby="plant-info-tab"
          >
            <div class="intro-content">
              <span class="">播種期</span>
              <img src="../assets/icons/sprout.png" alt="" class="icons" />
              <p>{{ seedingTime }}</p>
            </div>

            <hr />
            <div class="intro-content">
              <span>開花期</span>
              <img src="../assets/icons/flower.png" alt="" class="icons" />
              <p class="intro-content">{{ bhSeason }}</p>
            </div>

            <hr />
            <div class="intro-content">
              <span>發芽適溫</span
              ><img
                src="../assets/icons/temperature.png"
                alt=""
                class="icons"
              />
              <p class="intro-content">{{ temperature }}</p>
            </div>

            <hr />
            <div class="intro-content">
              <span>發芽天數</span>
              <img src="../assets/icons/calendar.png" alt="" class="icons" />
              <p class="intro-content">{{ day }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDetailView",
  data() {
    return {
      quantity: 1,

      //商品資訊
      products: [],
      id: [],
      title: [],
      category: [],
      price: [],
      seedAmount: [],
      feature: [],
      seedingTime: [],
      bhSeason: [],
      temperature: [],
      day: [],
      img1: [],
      img2: [],
      img3: [],
    };
  },
  mounted() {
    // let vm = this;
    const productInfo = JSON.parse(localStorage.getItem("products"));
    // console.log(productInfo);
    productInfo.forEach((product) => {
      if (product.id == this.$route.params.productId) {
        this.id = product.id;
        console.log(this.id);
        this.title = product.title;
        this.category = product.category;
        this.price = product.price;
        this.seedAmount = product.seedAmount;
        this.feature = product.feature;
        this.seedingTime = product.seedingTime;
        this.bhSeason = product.bhSeason;
        this.temperature = product.temperature;
        this.day = product.day;
        this.img1 = product.img1;
        this.img2 = product.img2;
        this.img3 = product.img3;
      }
    });
  },
};
</script>
<style scoped>
.product-img {
  padding: 50px 20px;
}
.product-intro {
  padding: 50px 30px;
}

.product-intro ol {
  padding: 0 10px;
}

.product-intro .price {
  font-size: 30px;
  font-weight: 500;
}
.carousel-item {
  height: 500px;
}
.carousel-item img {
  object-fit: cover;
  position: center center;
  width: 100%;
  height: 100%;
}

/* 加減數量 */
.quantity {
  padding-top: 30px;
}
.number {
  text-align: center;
}

.input-group {
  padding: 10px 0;
}

.buy-product {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn-default {
  background: var(--main-color3);
  color: white;
}

.add-cart {
  border-radius: 4px;
  padding: 5px 20px;
  background: var(--main-color3);
  color: white;
  font-size: 15px;
  width: 400px;
}

@media (max-width: 1200px) {
  .md-extend {
    display: block;
    width: 100%;
  }
  .input-group {
    justify-content: center;
  }
  .add-cart {
    display: block;
    margin: auto;
  }
  .product-intro {
    padding: 50px 20px;
  }
}

/* 種植資訊、植栽特性 */
.nav-item button {
  background-color: var(--main-color1);
  border-bottom: solid 1px #dee2e6;
}
.nav-item .active {
  background-color: var(--main-color1);
}
.nav-link {
  color: var(--main-color3);
}

#plant-info,
#about-plant {
  padding: 0 30px;
  min-height: 300px;
}
.icons {
  max-width: 35px;
}
.intro-content {
  display: flex;
  align-items: center;
}
.intro-content span {
  font-size: 18px;
  text-align: center;
  margin-right: 10px;
}

.intro-content:first-child {
  margin-top: 20px;
}

hr {
  color: rgb(161, 160, 160);
  margin: 8px;
}

.intro-content p {
  font-size: 20px;
  padding: 10px 0;
  color: var(--main-color3);
  margin-bottom: 0;
  margin-left: 20px;
}

.plant-detail {
  font-size: 18px;
  line-height: 40px;
  margin-top: 30px;
}
</style>
