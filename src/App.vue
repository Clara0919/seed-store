<template>
  <div class="wholePage">
    <div class="PageHeader">
      <pageheader :key="componentKey"></pageheader>
      <!-- :user="name" :loginStatus="loginStatus" -->
      <!--  -->
    </div>

    <div class="container-bg"><router-view @alreadylogin="rerender" /></div>

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
      // renderComponent: true,
      componentKey: 0,
    };
  },
  // watch: {
  //   name(val, oldVal) {},
  // },

  methods: {
    rerender() {
      // console.log("hello");
      this.componentKey++;
      console.log(this.componentKey);
    },
    // forceRerender() {
    //   // Remove my-component from the DOM
    //   this.renderComponent = false;

    //   this.$nextTick(() => {
    //     // Add the component back in
    //     this.renderComponent = true;
    //   });
    // },
    //接收 nav 傳來已登入的訊息後，觸發這個function
  },
  mounted() {},
};
</script>
