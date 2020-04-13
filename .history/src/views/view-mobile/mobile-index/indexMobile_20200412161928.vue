<template>
  <div class="mobile-box">
    <div class="index-head">
      <img src="../../../../static/img/logo.png" />
      <div><el-button icon="el-icon-menu"></el-button></div>
    </div>
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div class="index-body"></div>
    <div class="index-footer"></div>
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
.mobile-box {
  padding: 3px 3px;
  overflow: hidden;
  .index-head {
    display: flex;
    justify-content: space-between;
  }
}
</style>