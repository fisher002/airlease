<template>
  <div class="main-box">
    <div class="main-box-body">
      <img width="350" height="250" src="../../../static/img/timg.jpg" />
      <div class="body-footer"></div>
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
    width: 350px;
    height: 350px;
    border-radius: 10px;
    background: gainsboro;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    .body-footer {
      width: 100%;
      height: 100px;
    }
  }
}
</style>