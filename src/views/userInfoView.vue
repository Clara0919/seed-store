<template>
  <div>
    <p></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  mounted() {
    this.axios.get("/userInfo").then(() => {
      this.userName = sessionStorage.getItem("userName");
    });
  },
};
</script>
<style lang="">
</style>