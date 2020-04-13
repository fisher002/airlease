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
    <div v-if="showMenu == true" class="menu-list">
      <div class="right-menus" :style="{'right':showMenu ? '0' : '-30%'}">
        <div class="menu-btn">关于我们</div>
        <div class="menu-btn">联系我们</div>
        <div class="menu-btn">退出登录</div>
        <div class="menu-btn" @click="showMenu = !showMenu">关闭菜单</div>
      </div>
      <div class="bottom-black" @click="showMenu = !showMenu"></div>
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
      showMenu: false,
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
    showRight() {
      this.showMenu = !this.showMenu;
    },
    toIndex() {
      this.reback();
      this.$router.push("/indexMain");
    }
  }
};
</script>
<style lang="scss" scoped>
.mobile-box {
  overflow: hidden;
  .index-head {
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    .menu-icon {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }
  .index-footer {
    width: 100%;
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
      background: #f5f0f0;
    }
  }
  .menu-list {
    z-index: 9990;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    .right-menus {
      position: absolute;
      z-index: 9999;
      background: #ffffff;
      width: 30%;
      height: 100%;
      transition: right 0.5s;
      .menu-btn {
        width: 100%;
        height: 50px;
        background: #efefef;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: #dccece 1px solid;
      }
    }
    .bottom-black {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 9993;
      background: black;
      opacity: 0.3;
    }
  }
}
</style>