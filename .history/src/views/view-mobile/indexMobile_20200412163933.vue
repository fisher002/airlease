<template>
  <div class="mobile-box">
    <div class="index-head">
      <img width="200" src="../../../static/img/logo.png" />
      <div @click="showRight()" style="font-size:18px"><i class="el-icon-menu"></i></div>
    </div>
    <router-view />
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