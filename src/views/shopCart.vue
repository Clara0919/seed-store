<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-10 d-flex justify-content-center">
        <h2 class="title">購物車</h2>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-10" v-if="show">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
              <th scope="col">修改</th>
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
                <!-- <div class="quantity input-group">
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
                    :value="cartItem.cartItem.quantity"
                  />

                  <button
                    class="btn btn-default"
                    @click="increment(cartItem.id)"
                  >
                    +
                  </button>
                </div> -->
                {{ cartItem.cartItem.quantity }}
              </td>
              <td>NT ${{ cartItem.price * cartItem.cartItem.quantity }}</td>
              <td>
                <button class="deleteBtn" @click="deleteItem(cartItem.id)">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4"></td>
              <td colspan="1" class="total">總金額：</td>
              <td colspan="1" class="total">NT ${{ amount }}</td>
            </tr>
          </tfoot>
        </table>
        <form action="" class="d-flex justify-content-center">
          <router-link to="/order"
            ><button class="sendOrder" @click="createOrder">
              送出訂單
            </button></router-link
          >
        </form>
      </div>
      <div class="empty col-10" v-else>
        <p>購物車尚無商品</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // emits: ["alreadydelete"],
  data() {
    return {
      cart: [],
      quantity: 1,
      totalPrice: [],
      id: "",
      show: false,
    };
  },
  computed: {
    amount() {
      let money = 0;
      this.cart.forEach((x) => {
        money += x.price * x.cartItem.quantity;
      });
      console.log(money);
      return money;
    },
  },

  methods: {
    ////刪除商品
    deleteItem(id) {
      this.axios.post("/cart-delete-item", { productId: id }).then((res) => {
        console.log("刪除的品項", res);
        // this.axios.get("cart").then((getRes) => {
        //   console.log("getRes", getRes);
        window.location.reload(); //這個會重整畫面，導致後面的語法不會被執行
        //this.$router.go(0); 這個應該就留在原地沒動作
        // });
      });
    },

    ////送出訂單
    createOrder() {
      this.axios.post("/create-order", { id: this.id }).then((res) => {
        console.log(res);
        alert("已送出訂單");
      });
    },
    // increment(id) {
    //   this.axios
    //     .post("/cart-add-item", { productId: id })
    //     .then(() => {
    //       console.log("imclata");
    // this.cart = this.cart.map((item) => {
    //   console.log(item);
    //   if (item.data.id == id) {
    //     item.data.cartItem.quantity++;
    //   }
    //   return item;
    // });
    // })
    // .catch((err) => {
    //   console.log("err" + err.message);
    // });
    // },
    //   decrement(id) {
    //     this.cart = this.cart.map((item) => {
    //       if (item.id == id && item.quantity > 1) {
    //         item.quantity--;
    //       }
    //       return item;
    //     });
    //     localStorage.setItem("cart", JSON.stringify(this.cart));
    //   },
  },

  mounted() {
    this.axios.get("/cart").then((res) => {
      console.log(res);
      this.cart = res.data;
      if (this.cart.length <= 0) {
        //如果購物車無東西 顯示購物車目前無商品
        this.show = false;
      } else {
        this.show = true;
      }
    });

    // this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(this.cart);
  },
};
</script>
<style scoped>
/* * {
  outline: 2px red solid;
} */

.title {
  margin-top: 40px;
}

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

.sendOrder {
  background-color: var(--main-color1);
  border-radius: 10px;
  padding: 12px 25px;
  border: 1.5px solid var(--main-color3);
  color: var(--main-color3);
  margin: 30px 0;
}

.sendOrder:hover {
  background-color: var(--main-color4);
  color: white;
  border: none;
}

.deleteBtn {
  border: 2px solid var(--main-color4);
  background: none;
  border-radius: 5px;
  font-size: 15px;
  color: var(--main-color4);
  max-width: 100%;
  padding: 5px 8px;
}

.empty {
  text-align: center;
  margin-top: 100px;
}
</style>