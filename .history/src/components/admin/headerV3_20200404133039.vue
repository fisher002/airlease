<template>
  <div class="header_box">
    <div class="header_head">
      <div class="header_head_left">
        <img src="../../../static/img/logo.png" />
      </div>
      <div class="header_head_right">
        <div v-if="userdata" class="header_head_right_box">
          <img
            width="50"
            height="50"
            :src="userdata.headPicture != null ? userdata.headPicture : '../../../static/img/shehui.jpg'"
          />
          <div class="box_msg">
            <el-dropdown trigger="hover" @command="myOperation">
              <span class="el-dropdown-link font-size">{{userdata.adminName}} | 欢迎您</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="outLogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="header_menu">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item v-for="(item,index) in menus" :key="index" :index="item.path">{{item.label}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import menu from "../json/adminMenu";
export default {
  inject: ["reload"],
  data() {
    return {
      userdata: "",
      menus: [...menu],
      activeIndex2: "/listadmin"
    };
  },
  created() {
    if (
      this.$session.get("admin") != undefined &&
      this.$session.get("admin") != null
    ) {
      this.userdata = this.$session.get("admin");
    }
  },
  methods: {
    myOperation(res) {
      switch (res) {
        case "outLogin":
          this.$session.clear();
          sessionStorage.setItem("isLogin", false);
          sessionStorage.setItem("isAdmin", false);
          this.reload();
          this.$router.go(-1);
          break;
        default:
          console.log("error");
          break;
      }
    },
    handleSelect(key, keyPath) {
      this.$router.push({ path: keyPath[0] });
    }
  }
};
</script>
<style lang="scss" scoped>
.header_box {
  min-height: 85px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: #e0d5d5 1px solid;
  .header_head {
    min-height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header_head_left {
      width: 48%;
      display: flex;
      img {
        margin-left: 200px;
      }
    }
    .header_head_right {
      width: 48%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .header_head_right_box {
        cursor: pointer;
        width: 28%;
        height: 50px;
        border-radius: 25px;
        border: rgb(238, 232, 198) solid 1px;
        margin-right: 45px;
        background: #e6f7f7;
        display: flex;
        img {
          border-radius: 50%;
        }
        .box_msg {
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          .font-size {
            font-size: 16px;
          }
        }
      }
    }
  }
  .header_menu {
    min-height: 40px;
    width: 100%;
    justify-content: center;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>