<template>
  <div class="wholePage">
    <div class="PageHeader">
      <PageHeader :user="name" :loginStatus="loginStatus"></PageHeader>
    </div>

    <div class="container-bg"><router-view /></div>

    <div class="PageFooter">
      <pagefooter></pagefooter>
    </div>
  </div>
</template>


<style>
:root {
  --main-color1: #fdfcf9;
  --main-color2: #ffeea9;
  --main-color3: #485d53;
  --main-color4: #f5cf38;
  --main-color5: #5d8974;
}

.PageHeader {
  position: sticky;
  top: 0px;
  z-index: 999;
}
.container-bg {
  background-color: var(--main-color1);
  padding-bottom: 30px;
}

.PageFooter {
  position: relative;
  bottom: 0px;
}
</style>

<script>
import PageHeader from "./components/PageHeader.vue";
import Pagefooter from "./components/Pagefooter.vue";
export default {
  name: "App",
  components: {
    PageHeader,
    Pagefooter,
  },
  data() {
    return {
      name: "",
      loginStatus: "",
    };
  },
  mounted() {
    this.axios.get("/getInfo").then((res) => {
      console.log(res);
      this.name = res.data.userName;
      this.loginStatus = res.data.isLogin;
    });
  },
};
</script>
