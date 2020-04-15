<template>
  <div>welcome</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // pc 移动端判断
    if (this.isMobile()) {
      this.$router.push("/indexMobile");
    } else {
      if (this.$route.path === "/index") {
        return;
      }
      this.$router.push("/index");
    }
  },
  methods: {
    // pc 移动端判断
    isMobile() {
      let flag = navigator.userAgent.match(
        // match方法可在字符串内检索指定的值
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>