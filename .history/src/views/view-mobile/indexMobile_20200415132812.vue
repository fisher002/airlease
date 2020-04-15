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
    <div class="view">
      <router-view />
    </div>
    <div class="index-footer">
      <div class="bottom" @click="toIndex('/indexMain')">首页</div>
      <div class="bottom" @click="toDetail('/indexPersonal','mine')">我的</div>
    </div>
    <div v-if="showMenu == true" class="menu-list">
      <div class="right-menus" :style="{'right':showMenu ? '0' : '-30%'}">
        <el-button type="text" class="menu-btn" @click="toDetail()">关于我们</el-button>
        <el-button type="text" class="menu-btn" @click="toDetail()">联系我们</el-button>
        <el-button v-if="isLogin == false" type="text" class="menu-btn" @click="toLogin()">立即登录</el-button>
        <el-button
          v-if="isLogin == true"
          type="text"
          class="menu-btn"
          @click="toDetail('/indexPersonal','person')"
        >个人中心</el-button>
        <el-button type="text" class="menu-btn" @click="showMenu = !showMenu">关闭菜单</el-button>
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
      reback: this.reback,
      relogin: this.relogin
    };
  },
  data() {
    return {
      isLogin: false,
      showMenu: false,
      showBack: false
    };
  },
  created() {
    this.relogin();
  },
  methods: {
    reback() {
      this.showBack = !this.showBack;
    },
    relogin() {
      if (sessionStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
      }
    },
    back() {
      if (this.$route.path === "/indexMobile") {
        console.log('已经是首页，无法回退')
        return;
      }
      this.$router.go(-1);
    },
    showRight() {
      this.showMenu = !this.showMenu;
    },
    toIndex(path) {
      if (this.$route.path === path) {
        console.log("路由相同");
        return;
      }
      this.reback();
      this.$router.push(path);
    },
    toDetail(path, type) {
      if (
        !sessionStorage.getItem("isLogin") ||
        sessionStorage.getItem("isLogin") === "false"
      ) {
        this.$message.error("未登录，请先登录！");
        this.reback();
        this.$router.push("/loginMain");
        return;
      }
      if (this.$route.path === path) {
        console.log("路由相同");
        return;
      }
      if (path && type === "person") {
        this.reback();
        this.showRight();
        this.$router.push(path);
      } else if (path && type === "mine") {
        this.reback();
        this.$router.push(path);
      } else if (path) {
        this.reback();
        this.showRight();
        this.$router.push(path);
      } else {
        return;
      }
    },
    toLogin() {
      this.reback();
      this.showMenu = !this.showMenu;
      this.$router.push("/loginMain");
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
    height: 8%;
    justify-content: space-between;
    .menu-icon {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }
  .view {
    width: 100%;
    height: 84%;
    position: fixed;
    bottom: 8%;
    overflow-y: scroll;
  }
  .index-footer {
    width: 100%;
    height: 8%;
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
      right: 0;
      background: #ffffff;
      width: 30%;
      height: 100%;
      .menu-btn {
        width: 100%;
        height: 50px;
        margin-left: 0 !important;
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