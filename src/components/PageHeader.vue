<template>
  <div class="header-promotion">
    <p>
      <i class="fa-solid fa-cake-candles"></i> 9/19 生日慶，輸入折扣碼<b
        >「Happy Birthday」</b
      >享88折
    </p>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid nav-box">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="logo">
          <img class="logo" src="../assets/logo.png" alt="" />
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link active" aria-current="page"
                >首頁</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/selected-category"
              ><a class="nav-link">蔬菜</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/selected-category"
              ><a class="nav-link">水果</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/selected-category">
              <a class="nav-link">花卉</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/selected-category"
              ><a class="nav-link">香草</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/selected-category">
              <a class="nav-link">園藝工具</a></router-link
            >
          </li>
        </ul>
      </div>
      <!-- 搜尋欄 -->
      <div class="navbar-function">
        <div class="search">
          <input type="search" placeholder="請輸入作物名稱" />
          <button type="button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <!-- 購物車 -->
        <span class="navbar-text">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <!--未登入情況下 登入｜註冊 -->
        <span class="navbar-text">
          <!--  v-if="LoginStatus === false" -->
          <router-link to="/login">登入</router-link>
          <span>|</span>
          <router-link to="/signup">註冊</router-link>
        </span>
        <!--登入情況下 username｜登出 -->
        <span class="navbar-text">
          <!-- v-if="LoginStatus === true" -->
          <router-link to="/login">username</router-link>
          <span>|</span>
          <router-link to="/signup">登出</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      // username: "",
    };
  },
  methods: {},
  mounted() {
    // this.axios.get("/loginInfo").then((res) => {
    //   console.log(session);
    // });
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  /* outline: solid 1px red; */
}

.header-promotion {
  background-color: var(--main-color2);
  height: 35px;
}
.header-promotion p {
  color: var(--main-color3);
  text-align: center;
  line-height: 35px;
  font-weight: 400;
}

.logo {
  width: 180px;
  margin-right: 30px;
  margin-top: -3px;
}

nav {
  box-shadow: 0px 10px 31px -17px rgba(178, 178, 178, 0.58);
  -webkit-box-shadow: 0px 10px 31px -17px rgba(178, 178, 178, 0.58);
  -moz-box-shadow: 0px 10px 31px -17px rgba(178, 178, 178, 0.58);
  background-color: white;
}

.nav-item {
  padding: 10px;
}

.navbar-collapse {
  padding-left: 10px;
}

.navbar-function {
  padding-right: 10px;
}

.search input {
  margin-left: 30px;
  border-radius: 20px;
  border: solid 2px var(--main-color2);
  padding: 10px;
  width: 250px;
}

.search button {
  border-radius: 50%;
  border: 0;
  height: 30px;
  width: 30px;
  position: relative;
  right: 40px;
}

.navbar-function .navbar-text i {
  margin: 0 15px;
  color: var(--main-color3) !important;
}

.navbar-function {
  display: flex;
  justify-content: flex-end;
}
</style>