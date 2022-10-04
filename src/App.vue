<template>
  <div class="PageHeader">
    <PageHeader></PageHeader>
  </div>
  <div class="container-bg"><router-view /></div>

  <pagefooter></pagefooter>
</template>

<style>
:root {
  --main-color1: #fdfcf9;
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
  padding-bottom: 30px;
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
      username: "",
    };
  },
  mounted() {},
};
</script>
