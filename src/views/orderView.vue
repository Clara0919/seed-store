<template>
  <div class="container-fluid">
    <div class="row order">
      <div class="col-lg-5 col-sm-8">
        <h3 class="message">{{ name }} 你好！你的訂單已成功送出</h3>
      </div>
      <div class="col-lg-8 col-sm-10 receipt">
        <h3>訂單明細</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">商品</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in order" :key="item.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.cartItem.quantity }}</td>
              <td>{{ item.cartItem.quantity * item.price }}</td>
            </tr>
            <tr>
              <td colspan="4">總金額：{{ amount }}</td>
            </tr>
          </tbody>
        </table>
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
      order: [],
    };
  },
  computed: {
    amount() {
      let total = 0;
      this.order.forEach((x) => {
        total += x.price * x.cartItem.quantity;
      });
      console.log(total);
      return total;
    },
  },
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      console.log(res);
      this.name = res.data.userName;
    });
    this.axios.get("/cart").then((res) => {
      console.log(res);
      this.order = res.data;
    });
  },
};
</script>
<style scoped>
* {
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
  margin: 30px 0 10px 0;
}

.table {
  margin-bottom: 60px;
  text-align: center;
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