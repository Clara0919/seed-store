<template>
  <div class="wholePage sticky-footer">
    <div class="PageHeader">
      <pageheader @alreadylogout="rerender" :key="componentKey"></pageheader>
      <!-- :user="name" :loginStatus="loginStatus" -->
      <!--  -->
    </div>

    <div class="container-bg">
      <router-view @alreadylogin="rerender" />
      <!-- v-on="{ alreadylogin: rerender, alreadydelete: shopCartRender }"
        :key="shopCartKey" -->
    </div>

    <div class="PageFooter">
      <pagefooter class="sticky-bottom"></pagefooter>
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

.wholePage {
  min-height: 100vh;
}

.PageHeader {
  position: sticky;
  top: 0px;
  z-index: 999;
}

.container-bg {
  background-color: var(--main-color1);
  padding-bottom: 30px;
  min-height: 100%;
  flex: 1 0 auto;
}

.pagefooter {
  flex-shrink: 0;
}

.PageFooter {
  /* position: sticky;
  bottom: 0;
  left: 0; */
  width: 100%;
}

/* 把 footer 固定在畫面下方 */
.sticky-footer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-bottom {
  margin-top: auto;
  /* 利用flex特性，margin-top設auto後會自動計算上面有多少空間而將元素往下推移 */
}
</style>

<script>
import pageheader from "./components/PageHeader.vue";
import pagefooter from "./components/Pagefooter.vue";
export default {
  inheritAttrs: false,
  name: "App",
  components: {
    pageheader,
    pagefooter,
  },
  data() {
    return {
      name: "",
      loginStatus: "",
      componentKey: 0,
      shopCartKey: 0,
    };
  },

  methods: {
    rerender() {
      // console.log("hello");
      this.componentKey++;
      console.log(this.componentKey);
    },
  },
  mounted() {},
};
</script>
