<template>
  <div class="container-fluid">
    <div class="row order">
      <div class="col-lg-7 col-sm-8">
        <h3 class="message">{{ name }} 你好！你的訂單已成功送出</h3>
      </div>

      <div class="col-lg-7 col-sm-8">
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
  computed: {},
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      console.log(res);
      this.name = res.data.userName;
    });

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
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  text-align: center;
  margin: 150px 0 100px 0;
  background-color: rgba(252, 227, 30, 0.3);
  line-height: 50px;
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