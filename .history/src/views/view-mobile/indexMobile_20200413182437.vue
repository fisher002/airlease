<template>
  <div class="mobile-box">
    <div class="index-head">
      <div v-show="showBack" @click="back()" class="menu-icon">
        <i class="el-icon-arrow-left"></i>
      </div>
      <img width="250" src="../../../static/img/logo.png" />
      <div @click="showRight()" class="menu-icon">
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <router-view />
    <div class="index-footer">
      <div class="bottom" @click="toIndex">首页</div>
      <div class="bottom">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reback: this.reback
    };
  },
  data() {
    return {
      showBack: false
    };
  },
  methods: {
    reback() {
      this.showBack = !this.showBack;
    },
    back() {
      this.reback();
      this.$router.go(-1);
    },
    showRight() {},
    toIndex() {
      this.reback();
      this.$router.push("/indexMain");
    }
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