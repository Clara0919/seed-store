pageHeader.vue
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
              <a class="nav-link" aria-current="page">首頁</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/vegetable"
              ><a class="nav-link">蔬菜</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/fruit"><a class="nav-link">水果</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/flower">
              <a class="nav-link">花卉</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/herb"><a class="nav-link">香草</a></router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/selected-category">
              <a class="nav-link">園藝工具</a></router-link
            >
          </li> -->
        </ul>
      </div>
      <!-- 搜尋欄 -->
      <div class="navbar-function">
        <div class="search">
          <input
            type="search"
            placeholder="請輸入作物名稱"
            v-model.trim="keyword"
            @click="searchAgain"
          />
          <ul class="result" :class="show ? '' : 'd-none'">
            <!-- @click="clickEvent -->
            <li v-for="item in filterWord" :key="item.id" @click="choose">
              <!--  :class="selectedIndex == i ? 'bg-light' : ''" -->
              <router-link class="link" :to="`/product/${item.id}`"
                >{{ item.title }}
              </router-link>
            </li>
          </ul>

          <button type="button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <!-- 購物車 -->
        <span class="navbar-text">
          <router-link to="/shopCart"
            ><i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </span>

        <!--登入情況下 username｜登出 -->
        <span class="navbar-text" v-if="loginStatus === true">
          <!--  -->
          <router-link :to="`/member/${id}`">{{ name }}</router-link>
          <span class="line">|</span>
          <button class="logout" @click="logout">登出</button>
        </span>
        <!--未登入情況下 登入｜註冊 -->
        <span class="navbar-text" v-else>
          <!--  v-if="LoginStatus === false" -->
          <router-link to="/login">登入</router-link>
          <span class="line">|</span>
          <router-link to="/signup">註冊</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  emits: ["alreadylogout"],
  // props: ["user", "loginStatus"],
  data() {
    return {
      name: "",
      loginStatus: "",
      id: "",
      // title: [],
      products: [],
      matchProducts: [],
      keyword: "",
      // 用show 來控制是否顯示選單
      show: true,
      // selectedIndex: 0,
    };
  },

  methods: {
    logout() {
      this.axios
        .get("/logout")
        .then((res) => {
          if (res.data.logoutSuccess === 0) {
            console.log("res測試", res.data.logoutSuccess);
            alert("登出成功");
            sessionStorage.removeItem("isLogin");
            this.loginStatus === false;
            this.$emit("alreadylogout");
            this.$router.push("/"); //跳轉完會再次跳回原頁 不知道為何
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    choose() {
      this.keyword = "";
      return (this.show = false);
    },
    searchAgain() {
      return (this.show = true);
    },
  },
  // computed: {
  //   fullPath() {
  //     return this.$route.fullPath;
  //   },
  // },
  // watch: {
  //   "$route.fullPath"() {
  //     this.init();
  //   },
  // },
  // methods: {
  // init() {
  //   const productInfo = JSON.parse(localStorage.getItem("products"));
  //   productInfo.forEach((product) => {
  //     if (product.id == this.$route.params.productId) {
  //       this.id = product.id;
  //       this.title = product.title;
  //       this.category = product.category;
  //       this.price = product.price;
  //       this.seedAmount = product.seedAmount;
  //       this.feature = product.feature;
  //       this.seedingTime = product.seedingTime;
  //       this.bhSeason = product.bhSeason;
  //       this.temperature = product.temperature;
  //       this.day = product.day;
  //       this.img1 = product.img1;
  //       this.img2 = product.img2;
  //       this.img3 = product.img3;
  //     }
  //   });
  // },
  // },
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      console.log(res);
      this.name = res.data.userName;
      this.id = res.data.id;
      this.loginStatus = res.data.isLogin;
    });
    this.axios.get("/products").then((res) => {
      this.products = res.data.data;
      // console.log(this.products);
      // this.title = res.data.data.map((item) => item.title);
      // console.log(this.title);
    });
    // this.init();
  },

  computed: {
    filterWord() {
      if (this.keyword.length <= 0) {
        return;
      } else {
        return this.products.filter((result) =>
          result.title.match(this.keyword)
        );
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
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
  margin: 0 30px 0 0px;
  color: var(--main-color3) !important;
}

.navbar-function {
  display: flex;
  justify-content: flex-end;
}

.line {
  margin: 0 10px;
}

.result {
  margin-left: 30px;
  width: 250px;
  /* outline: red solid 1px; */
  position: absolute;
  background-color: white;
  list-style-type: none;
  box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 8px 8px 21px -11px rgba(0, 0, 0, 0.2);
}

.result li {
  padding: 12px 5px;
}

.link {
  text-decoration: none;
  color: black;
}

button:focus {
  outline: none;
  box-shadow: none;
}

input:focus {
  outline: var(--main-color4) 2px solid;
  -webkit-box-shadow: 0px 0px 9px 5px rgba(245, 207, 56, 0.3);
  box-shadow: 0px 0px 4px 2px rgba(245, 207, 56, 0.3);
}

.logout {
  border: none;
  background: none;
}
</style>
