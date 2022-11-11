<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-10"><h2>會員中心</h2></div>
      <div class="col-lg-6 col-md-6 col-sm-10 p-0">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              會員資訊
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              訂單查詢
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              class="tab-pane fade show active"
              role="tabpanel"
              id="member-info"
              aria-labelledby="member-info-tab"
            >
              <p>姓名： {{ name }}</p>
              <p>信箱：{{ email }}</p>
              <p>生日：{{ birthday }}</p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="receipt">
              <template v-for="order in orders" :key="order.id">
                <div class="order-box">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" colspan="4">商品</th>
                        <th scope="col" colspan="1">數量</th>
                        <th scope="col" colspan="1">小計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in order.products" :key="product.id">
                        <td colspan="4">{{ product.title }}</td>
                        <td colspan="1">{{ product.orderItem.quantity }}</td>
                        <td colspan="1">
                          NT$ {{ product.orderItem.quantity * product.price }}
                        </td>
                      </tr>

                      <tr>
                        <td colspan="4"></td>
                        <td class="total" colspan="2">
                          總金額：NT$ {{ order.amount }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      //   id: "",
      birthday: "",
      orders: [],
    };
  },
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      this.name = res.data.userName;
      this.email = res.data.email;
      this.birthday = res.data.birthday;
    });
    this.axios.get("/order").then((res) => {
      console.log(res);
      this.orders = res.data;
      console.log("member 頁所有訂單", this.orders);
    });
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  margin: 40px 0;
}

p {
  font-size: 18px;
  font-weight: 300;
}
.nav-link {
  /* 標籤 */
  color: black;
}

.nav-link:hover {
  /* 標籤 */
  color: var(--main-color3);
}

#member-info p {
  margin: 30px 10px;
}

th,
td {
  /* color: var(--main-color3); */
  text-align: left;
}

/* .receipt h3 {
  text-align: center;
  margin: 30px 0 40px 0;
} */

.order-box {
  padding: 30px 10px 10px 10px;
  background-color: var(--main-color1);
}
.table {
  margin-bottom: 60px;
  text-align: center;
  table-layout: fixed;
  background-color: white;
  width: 100%;
  /* -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
  margin-bottom: 20px; */
}
/* .total {
  text-align: right;
} */
</style>
