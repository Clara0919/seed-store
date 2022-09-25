<template>
  <div class="container-fluid login-page">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="extraService">
            <div class="group">
              <input type="checkbox" id="remember" />
              <label for="remember">記住我</label>
            </div>
            <p>忘記密碼？</p>
          </div>
          <button>登入</button>
          <div class="signUp">
            <p>尚未註冊？點擊加入新會員</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.login-page {
  height: 70vh;
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