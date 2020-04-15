<template>
  <div class="header_box">
    <div class="header_head">
      <div class="header_head_left" @click="toIndex">
        <img src="../../../static/img/logo.png" />
      </div>
      <div class="header_head_right">
        <div v-if="showme == false" class="header_head_right_box" style="justify-content: center">
          <div class="box_msg">
            <el-dropdown trigger="click" @command="toLogin">
              <span class="el-dropdown-link font-size">暂未登录,点击登录</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="login">立即登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div v-if="showme == true && userdata" class="header_head_right_box">
          <img width="50" height="50" :src="userdata.headPicture" />
          <div class="box_msg">
            <el-dropdown trigger="hover" @command="myOperation">
              <span class="el-dropdown-link font-size">{{userdata.name}} | 欢迎您</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="myMsg">个人中心</el-dropdown-item>
                <el-dropdown-item command="outLogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="header_menu">
      <div
        class="header_menu_list"
        v-for="(item,index) in menuData"
        :key="index"
        @click="toOtherPath(item)"
      >
        <span>{{item.label}}</span>
      </div>
    </div>
    <!-- <div class="header_auto">
      <el-carousel :interval="5500" type="card" trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in imageData" :key="index">
          <img style="width:100%;height:100%" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>-->
  </div>
</template>
<script>
const images = [
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg"
];
const menus = [
  { label: "首页", path: "/index" },
  { label: "关于我们", path: "/detail/aboutUs" },
  { label: "空调展示", path: "/detail/airShow" },
  { label: "客户案例", path: "/detail/customerCase" },
  { label: "服务范围", path: "/detail/service" },
  { label: "联系我们", path: "/detail/callUs" }
];
export default {
  inject: ["reload"],
  data() {
    return {
      imageData: [...images],
      menuData: [...menus],
      userdata: "",
      showme: false
    };
  },
  created() {
    if (
      this.$session.get("user") != undefined &&
      this.$session.get("user") != null
    ) {
      this.showme = true;
      this.userdata = this.$session.get("user");
    } else {
      this.showme = false;
    }
  },
  methods: {
    toOtherPath(res) {
      if (this.$route.path === res.path) {
        return;
      }
      this.$router.push({
        path: res.path
      });
    },
    toIndex() {
      if (this.$route.path === "/index") {
        return;
      }
      this.$router.push("/index");
    },
    toLogin(res) {
      this.$router.push({ path: `/${res}` });
    },
    myOperation(res) {
      switch (res) {
        case "myMsg":
          this.$router.push({ path: `/personalInfo` });
          break;
        case "outLogin":
          this.$session.clear();
          sessionStorage.setItem("isLogin", false);
          this.reload();
          break;
        default:
          console.log("error");
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header_box {
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  .header_head {
    min-height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header_head_left {
      cursor: pointer;
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
    background: rgb(95, 95, 255);
    display: flex;
    justify-content: center;
    .header_menu_list {
      height: 40px;
      width: 128px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #e6f7f7;
      cursor: pointer;
      font-size: 15px;
    }
    .header_menu_list:hover {
      background: darkblue;
    }
  }
  .header_auto {
    min-height: 350px;
    width: 100%;
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
</style>