<template>
  <div class="mobile-box">
    <div class="index-head">
      <div @click="back()" class="menu-icon">
        <i class="el-icon-arrow-left"></i>
      </div>
      <img width="250" src="../../../static/img/logo.png" />
      <div @click="showRight()" class="menu-icon">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <router-view />
    <div class="index-footer">
      <div class="bottom">首页</div>
      <div class="bottom">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
    //   this.$router.go(-1);
    },
    showRight() {}
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
    .menu-icon {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }
  .index-footer {
    width: 98.5%;
    height: 50px;
    position: fixed;
    display: flex;
    bottom: 0;
    font-size: 20px;
    .bottom {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>