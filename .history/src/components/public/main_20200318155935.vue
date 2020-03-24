<template>
  <div class="main-box">
    <div class="main-box-body">
      <img src="../../../static/img/timg.jpg" />
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .main-box-body {
    width: 20%;
    height: 150px;
    border-radius: 10px;
    background: gainsboro;
  }
}
</style>