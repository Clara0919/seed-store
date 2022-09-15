<template>
  <div
    class="responsive row"
    data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
  >
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
      <div class="product-card mx-3">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="tag">蔬菜</p>
          <h3>辣椒</h3>
          <p></p>
          <p class="price"><b>NT$ 255</b></p>
          <button>加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    $(document).ready(function () {
      $(".responsive").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
    });
  },
};
</script>
<style scoped>


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
  background-position: center center;
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
