<template>
  <div class="container-bg">
    <div class="PageHeader"><PageHeader></PageHeader></div>
    <div class="main">
      <HomePage></HomePage>
    </div>
    <Pagefooter></Pagefooter>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import HomePage from "./components/HomePage.vue";
import Pagefooter from "./components/Pagefooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    HomePage,
    Pagefooter,
  },
};
</script>

<style>
:root {
  --main-color1: #fffbe9;
  --main-color2: #ffeea9;
  --main-color3: #32413a;
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
}
</style>
