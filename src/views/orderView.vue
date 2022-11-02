<template>
  <div class="container-fluid">
    <div class="row order">
      <div class="col-lg-5 col-sm-8">
        <h3 class="message">{{ name }} 你好！你的訂單已成功送出</h3>
      </div>
      <div class="col-lg-8 col-sm-10 receipt">
        <h3>所有訂單明細</h3>
        <template v-for="order in orders" :key="order.id">
          <div class="order-box">
            <table class="table col-lg-8 col-md-9 col-sm-10">
              <thead>
                <tr>
                  <th scope="col" colspan="1">商品</th>
                  <th scope="col" colspan="1">數量</th>
                  <th scope="col" colspan="1">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in order.products" :key="product.id">
                  <td>{{ product.title }}</td>
                  <td>{{ product.orderItem.quantity }}</td>
                  <td>{{ product.orderItem.quantity * product.price }}</td>
                </tr>

                <tr>
                  <td colspan="3">總金額：{{ order.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
      <div class="col-lg-5 col-sm-10">
        <router-link to="/"><button>返回首頁</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      orders: [],
    };
  },
  computed: {
    // amount() {
    //   let total = 0;
    //   this.order.forEach((x) => {
    //     total = x.amount;
    //   });
    //   console.log(total);
    //   return total;
    // },
  },
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      console.log(res);
      this.name = res.data.userName;
    });
    // this.axios.get("/cart").then((res) => {
    //   console.log(res);
    //   this.order = res.data;
    // });

    this.axios.get("/order").then((res) => {
      console.log(res);
      this.orders = res.data;
      console.log("所有訂單", this.orders);
    });
  },
};
</script>
<style scoped>
* {
  /* outline: 1px solid red; */
  text-decoration: none;
}
.order {
  display: flex;
  justify-content: center;
}
.message {
  text-align: center;
  margin: 60px 0;
  background-color: rgba(252, 227, 30, 0.3);
  line-height: 50px;
}

.receipt h3,
th {
  color: var(--main-color3);
}

.receipt h3 {
  text-align: center;
  margin: 30px 0 40px 0;
}

.order-box {
  padding: 30px 10px 10px 10px;
  background-color: white;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
  margin-bottom: 20px;
}
.table {
  margin-bottom: 60px;
  text-align: center;
  table-layout: fixed;
}

button {
  display: block;
  margin: 30px auto;
  background-color: var(--main-color1);
  border-radius: 10px;
  padding: 12px 25px;
  border: 1.5px solid var(--main-color3);
  color: var(--main-color3);
}

button:hover {
  background-color: var(--main-color4);
  color: white;
  border: 1.5px solid var(--main-color4);
}
</style>