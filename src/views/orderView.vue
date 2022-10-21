<template>
  <div class="container-fluid">
    <div class="row order">
      <div class="col-lg-9 col-sm-11">
        <h3>{{ name }} 你好！你的訂單已成功送出</h3>
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
.order {
  display: flex;
  justify-content: center;
}
h3:first-child {
  text-align: center;
  margin-top: 60px;
}

.receipt {
  background: white;
}

.receipt h3,
th {
  color: var(--main-color3);
}

.receipt h3 {
  margin: 70px 0 10px 0;
}

button {
  display: block;
  margin: auto;
}
</style>