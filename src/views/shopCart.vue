<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-11">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cartItem in cart" :key="cartItem.id">
              <td class="img-box">
                <img :src="cartItem.img1" alt="" />
              </td>
              <td>{{ cartItem.title }}</td>
              <td>NT ${{ cartItem.price }}</td>
              <td>
                <div class="quantity input-group">
                  <button
                    class="btn btn-default"
                    @click="decrement(cartItem.id)"
                  >
                    -
                  </button>

                  <input
                    class="number"
                    type="number"
                    min="1.00"
                    :value="cartItem.quantity"
                  />

                  <button
                    class="btn btn-default"
                    @click="increment(cartItem.id)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>NT ${{ cartItem.price * cartItem.quantity }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"></td>
              <td colspan="1" class="total">總金額：</td>
              <td colspan="1" class="total">NT ${{ amount }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      quantity: 1,
      totalPrice: [],
    };
  },
  computed: {
    amount() {
      let money = 0;
      this.cart.forEach((x) => {
        money += x.price * x.quantity;
      });
      console.log(money);
      return money;
    },
  },

  methods: {
    increment(id) {
      // let flag = false;
      this.cart = this.cart.map((item) => {
        if (item.id == id) {
          item.quantity++;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    decrement(id) {
      this.cart = this.cart.map((item) => {
        if (item.id == id && item.quantity > 1) {
          item.quantity--;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },

  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(this.cart);
  },
};
</script>
<style>
/* * {
  outline: 2px red solid;
} */

.table {
  margin: 40px 0 30px 0;
  text-align: center;
  vertical-align: middle;
  table-layout: fixed;
  word-break: break-all;
  /* inline 元素才可用 */
}

.img-box {
  width: 150px;
  height: 150px;
}
.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: center;
  display: block;
  margin: auto;
}

/* 數量加減 */
.quantity {
  padding-top: 30px;
}
.number {
  text-align: center;
  max-width: 100px;
}

.input-group {
  padding: 10px 0;
  justify-content: center;
}

.total {
  /* text-align: end; */
  font-size: 18px;
  padding: 20px 0 !important;
}
</style>