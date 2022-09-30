<template>
  <div class="container-fluid login-page">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>

        <form method="POST" class="login" @submit.prevent="postLogin()">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeHolder="name123@gmail.com"
              v-model="email"
            />
            <label for="floatingInput">帳號（電子信箱）</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeHolder="12345"
              v-model="password"
            />
            <label for="floatingPassword">密碼</label>
          </div>
          <div class="extraService">
            <div class="group">
              <input type="checkbox" id="remember" />
              <label for="remember">記住我</label>
            </div>
            <p>忘記密碼？</p>
          </div>
          <button type="submit">登入</button>
          <div class="signUp">
            <router-link to="/signup"
              ><p>尚未註冊？點擊加入新會員</p></router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    postLogin() {
      this.axios
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          //console.log(response.data.loginSuccess); 0
          if (response.data.loginSuccess === 0) {
            alert("登入成功");
            return this.$router.push("/");
          } else if (response.data.loginSuccess === 1) {
            alert("此帳號未註冊");
            return this.$router.push("/login");
          }
          alert("密碼錯誤");
          return this.$router.push("/login");
        })
        .catch((err) => {
          console.log("err" + err.message);
        });
    },
    redirect() {},
  },
  mounted() {},
};
</script>
<style scoped>
.login-page {
  height: 75vh;
}
.logo img {
  max-width: 100%;
  padding: 0 40px;
  margin: 50px 0;
}
.row {
  display: flex;
  justify-content: center;
}
.extraService {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  line-height: 15px;
  color: var(--main-color3);
}
.extraService input {
  margin-right: 10px;
}
.signUp {
  color: var(--main-color3);
  line-height: 15px;
  margin-top: 15px;
}

.signUp:hover {
  text-decoration: underline;
  font-style: italic;
}
button {
  border: 2px solid var(--main-color4);
  background: none;
  border-radius: 5px;
  font-size: 18px;
  color: var(--main-color4);
  width: 100%;
  padding: 8px 12px;
  margin-top: 15px;
}
button:hover {
  background-color: var(--main-color4);
  color: white;
}
</style>