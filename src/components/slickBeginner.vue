<template>
  <div class="slick-wrap"><div class="responsive row beginner"></div></div>
</template>
<script>
export default {
  data() {
    return {
      beginners: [],
    };
  },
  mounted() {
    //api

    fetch("http://localhost:3000/forbeginner")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const beginnerData = data.data;
        console.log(beginnerData);
        beginnerData.forEach((element) => {
          const { title, price, category, img1 } = element;
          $(".slick-wrap .beginner").append(
            `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="product-card mx-3">
          <div
            class="card-img" style="background-image:url(${img1})"
          ></div>
          <div class="card-info">
            <p class="tag"># ${category}</p>
            <h3>${title}</h3>
            <p class="price">
              <b>NT$ ${price}</b>
            </p>
            <button><i class="fa-solid fa-cart-plus"></i> 加入購物車</button>
          </div>
        </div>
      </div>
    `
          );
          console.log(element);
        });
      })
      .then(() => {
        $(document).ready(function () {
          $(".slick-wrap .beginner")
            .not(".slick-initialized") //避免重複執行.responsive 造成 “add” is not a function 問題
            .slick({
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
              ],
            });
        });
      });
  },
};
</script>
<style scoped>
</style>

