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
    <div class="view">
      <router-view />
    </div>
    <div class="index-footer" v-if="menudata">
      <div
        class="bottom"
        v-for="(item,index) in menudata"
        :key="index"
        @click="toDetail(item.path,item.type)"
        :style="{'color':item.showColor ? '#409EFF':''}"
      >{{item.label}}</div>
    </div>
    <div v-show="showMenu" class="menu-list">
      <div class="left-show" v-show="leftUs">
        <i class="el-icon-close fix" @click="leftUs = !leftUs"></i>
        <div class="title">--{{usdata.title}}--</div>
        <div class="us-content" v-html="usdata.content"></div>
      </div>
      <div class="right-menus">
        <el-button type="text" class="menu-btn" @click="toUs('关于我们','0')">关于我们</el-button>
        <el-button type="text" class="menu-btn" @click="toUs('联系我们','1')">联系我们</el-button>
        <el-button v-if="isLogin == false" type="text" class="menu-btn" @click="toLogin()">立即登录</el-button>
        <el-button
          v-show="isLogin"
          type="text"
          class="menu-btn"
          @click="toDetail('/indexPersonal','person')"
        >个人中心</el-button>
        <el-button v-show="isLogin" type="text" class="menu-btn" @click="outLogin()">退出登录</el-button>
        <el-button type="text" class="menu-btn" @click="showMenu = !showMenu">关闭菜单</el-button>
      </div>
      <div class="bottom-black" @click="showMenu = !showMenu"></div>
    </div>
  </div>
</template>
<script>
const menus = [
  {
    path: "/indexMain",
    label: "首页",
    showColor: true,
    type: "0"
  },
  {
    path: "/indexComment",
    label: "评价",
    showColor: false,
    type: "0"
  },
  {
    path: "/indexPersonal",
    label: "我的",
    showColor: false,
    type: "mine"
  }
];
export default {
  inject: ["reload"],
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      relogin: this.relogin
    };
  },
  data() {
    return {
      leftUs: false,
      isLogin: false,
      showMenu: false,
      showBack: false,
      usdata: {
        title: "",
        content: ""
      },
      menudata: [...menus]
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
      if (this.$route.path === "/indexMain") {
        return;
      }
      this.$router.go(-1);
    },
    showRight() {
      this.showMenu = !this.showMenu;
    },
    toUs(title, type) {
      this.leftUs = true;
      this.usdata.title = title;
      if (type == "0") {
        this.usdata.content = "空调租赁公司";
      } else {
        this.usdata.content = "<div>phone: 13900000000</div><div>email: 1688856@qq.com</div>";
      }
    },
    toIndex(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push(path);
    },
    toDetail(path, type) {
      if (this.checkPath(path)) {
        return;
      }
      if (type === "person") {
        this.checkLogin(path);
        this.showRight();
      } else if (type === "mine") {
        this.checkLogin(path);
      } else if (type === "0") {
        this.$router.push(path);
      } else if (path) {
        this.showRight();
        this.$router.push(path);
      } else {
        return;
      }
    },
    checkLogin(path) {
      if (
        !sessionStorage.getItem("isLogin") ||
        sessionStorage.getItem("isLogin") === "false"
      ) {
        this.$message.error("未登录，请先登录！");
        this.$router.push("/loginMain");
        return;
      }
      this.$router.push(path);
    },
    checkPath(path) {
      this.menudata.forEach(e => {
        e.showColor = false;
      });
      this.menudata.forEach(e => {
        if (path === e.path) {
          e.showColor = !e.showColor;
        }
      });
      if (this.$route.path === path) {
        return true;
      }
    },
    toLogin() {
      this.showRight();
      this.$router.push("/loginMain");
    },
    outLogin() {
      this.showRight();
      sessionStorage.setItem("isLogin", false);
      this.$session.clear();
      this.reload();
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
    .left-show {
      position: absolute;
      z-index: 10000;
      left: 0;
      width: 70%;
      height: 100%;
      background: #fff;
      border-right: 1px solid #e2cfcf;
      .title {
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
      }
      .fix {
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 30px;
      }
      .us-content {
        padding: 10px;
      }
    }
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