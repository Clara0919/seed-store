<template>
  <div class="container-fluid">
    <div class="row">
      <h3>會員註冊資料</h3>
      <div class="col-lg-6 col-md-5 col-sm-4">
        <form method="POST" @submit.prevent="postSignup">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingName"
              v-model="userName"
              placeholder="clara"
            />
            <label for="floatingNam">用戶名稱</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingEmail"
              v-model="email"
              placeholder="name@gmail.com"
            />
            <label for="floatingEmail">帳號（電子信箱）</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              v-model="password"
              placeholder="12345"
            />
            <label for="floatingPassword">密碼（6位以上英數字)</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingDoubleCheck"
              placeholder="12345"
            />
            <label for="floatingDoubleCheck">密碼確認（請再次輸入密碼）</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="floatingBirthday"
              placeholder="1998/09/19"
              v-model="birthday"
            />
            <label for="floatingBirthday">生日</label>
          </div>
          <button>確認送出</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      birthday: "",
    };
  },
  methods: {
    postSignup() {
      this.axios
        .post("/signup", {
          userName: this.userName,
          email: this.email,
          password: this.password,
          birthday: this.birthday,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.container-fluid {
  height: 90vh;
}
.row {
  display: flex;
  justify-content: center;
}
h3 {
  text-align: center;
  margin-top: 50px;
}
form {
  margin-top: 50px;
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
