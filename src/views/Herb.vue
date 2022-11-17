<template >
  <!-- 麵包屑 -->
  <div class="container-fluid">
    <div class="row d-flex justify-content-around pt-4">
      <div class="col-11">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link class="link" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">香草</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <!-- banner -->
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="banner"><div class="banner-blur"></div></div>
      </div>
    </div>
  </div>

  <div class="container-fluid" style="min-height: 70vh">
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-11 py-3">
        <h3># 香草</h3>
      </div>
      <div class="col-11">
        <div class="row gy-4 gx-5">
          <template v-for="product in products" :key="product.id">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 herb">
              <div class="product-card">
                <div
                  class="card-img"
                  v-bind:style="{ backgroundImage: `url(${product.img1})` }"
                ></div>
                <div class="card-info">
                  <router-link class="link" :to="`/product/${product.id}`">
                    <p class="tag"># {{ product.category }}</p>
                    <h3>{{ product.title }}</h3>
                    <p class="price">
                      <b>NT$ {{ product.price }}</b>
                    </p>
                  </router-link>
                  <button @click="addCart(product.id)">
                    <i class="fa-solid fa-cart-plus"></i> 加入購物車
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    //加入購物車

    addCart(id) {
      this.axios
        .post("/cart-add-item", { productId: id, quantity: 1 })
        .then((response) => {
          console.log(response);
        });

      alert("已加入購物車");
    },
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("products")).filter(
      //JSON.parse 把 json 轉換為物件或值
      (item) => {
        return item.category === "香草";
      }
    );
  },
};
</script>
  <style scoped>
.banner {
  background-image: url("../assets/banner/香草banner.jpg");
  width: 100%;
  height: 350px;
  background-position: center center;
  border-radius: 10px;
  background-size: 100%;
  background-repeat: none;
}

@media (max-width: 580px) {
  .banner {
    display: none;
  }
  .herb {
    padding: 0 5px;
  }
}

/* 商品卡片 */

.link {
  text-decoration: none;
  color: black;
}
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
  background-size: cover;
  background-position: bottom 35%;
  border-radius: 10px 10px 0 0;
}
.card-info {
  padding: 5px 25px 30px 25px;
  border-radius: 0 0 10px 10px;
}
.card-info h3 {
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 25px;
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
</style>