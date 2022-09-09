<template >
  <!-- 麵包屑 -->
  <div class="container-fluid">
    <div class="row d-flex justify-content-around pt-4">
      <div class="col-11">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
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
        <h3># 蔬菜</h3>
      </div>
      <div class="col-11">
        <div class="row gy-4">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="tag">蔬菜</p>
                <h3>辣椒</h3>
                <p class="price"><b>NT$ 255</b></p>
                <button>加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.banner {
  background-image: url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80");
  width: 100%;
  height: 350px;
  background-position: center center;
  border-radius: 10px;
}

.banner-blur {
  width: 100%;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

/* 商品卡片 */
.product-card {
  padding: 0px;
  background-color: white;
  border: 1px solid var(--main-color4);
  border-radius: 10px;
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
  border: 0;
  border-radius: 5px;
  background-color: var(--main-color4);
  font-size: 18px;
  color: white;
  padding: 8px 12px;
  max-width: 100%;
  word-wrap: none;
}

.card-info .tag {
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 15px;
}
</style>