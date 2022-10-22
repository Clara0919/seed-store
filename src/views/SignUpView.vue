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
              required
            />
            <label for="floatingNam">姓名</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingEmail"
              v-model="email"
              placeholder="name@gmail.com"
              :class="{ isInvalid: emailError }"
              required
            />
            <label for="floatingEmail">帳號（電子信箱）</label>
            <div class="invalidFeedback">
              {{ emailErrMsg }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              v-model="password"
              placeholder="12345"
              :class="{ isInvalid: passwordError }"
              required
            />
            <label for="floatingPassword">密碼（5位以上英數字)</label>
            <div class="invalidFeedback">
              {{ pwdErrMsg }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingDoubleCheck"
              v-model="confirmPwd"
              placeholder="12345"
              :class="{ isInvalid: confirmPwdError }"
              required
            />
            <div class="invalidFeedback">
              {{ confirmPwdErrorMsg }}
            </div>
            <label for="floatingDoubleCheck">密碼確認（請再次輸入密碼）</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="floatingBirthday"
              placeholder="1998/09/19"
              v-model="birthday"
              required
            />
            <label for="floatingBirthday">生日</label>
          </div>
          <button class="submit">確認送出</button>
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
      /////////////////
      email: "",
      emailError: false,
      emailErrMsg: "",
      /////////////////
      password: "",
      passwordError: false,
      pwdErrMsg: "",
      /////////////////
      confirmPwd: "",
      confirmPwdError: false,
      confirmPwdErrorMsg: "",
      /////////////////
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
          if (res.data.signUpSuccess === 0) {
            alert("註冊成功");
            this.$router.push("/login");
          } else if (res.data.signUpSuccess === 1) {
            alert("該信箱已註冊");
            this.$router.push("/login");
          }
        });
    },
    // doubleCheck() {
    //   if (this.password != this.confirmPwd) {
    //     const submit = document.getElementsByClassName("submit");
    //     submit.classList.add("disabled");
    //     alert("密碼不相符");
    //   } else {
    //     alert("hello");
    //   }
    // },
  },
  watch: {
    email: function () {
      //當email的值改變時
      const isEmail =
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (!isEmail.test(this.email)) {
        this.emailError = true;
        this.emailErrMsg = "請輸入正確 Email 格式";
      } else {
        this.emailError = false;
        this.emailErrMsg = "";
      }
    },
    //////////////////////////////////////////////////////////////////////
    password: function () {
      const noSign = /^[a-zA-Z0-9]+$/;
      if (!noSign.test(this.password)) {
        this.passwordError = true;
        this.pwdErrMsg = "請勿使用特殊符號";
      } else {
        if (this.password.length < 5) {
          this.passwordError = true;
          this.pwdErrMsg = "密碼需至少包含五個英、數字";
        } else {
          this.passwordError = false;
          this.pwdErrMsg = "";
        }
      }
    },
    ///////////////////////////////////////////////////////////////////////
    confirmPwd: function () {
      if (this.confirmPwd != this.password) {
        this.confirmPwdError = true;
        this.confirmPwdErrorMsg = "密碼不一致";
      } else {
        this.confirmPwdError = false;
        this.confirmPwdErrorMsg = "";
      }
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

.isInvalid {
  border: 1px solid rgba(255, 0, 0, 0.5);
  background-color: rgba(255, 0, 0, 0.1);
  /* -webkit-box-shadow: 0px 0px 15px -7px red;
  box-shadow: 0px 0px 15px -7px red; */
}

.invalidFeedback {
  color: red;
  font-size: 10px;
  line-height: 30px;
}
</style>
