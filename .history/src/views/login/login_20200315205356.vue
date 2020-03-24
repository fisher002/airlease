<template>
  <div class="box">
    <el-row>
      <el-col :span="6" :offset="9">
        <div class="grid-content second_box">
          <div class="second_choose">
            <div class="input_width choose_left choose_color" @click="loginUser()">普通用户登录</div>
            <div class="input_width choose_right choose_color" @click="loginAdmin()">管理员登陆</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content">
          <el-input class="input_width" v-model="loginData.tellphone" placeholder="请输入账号(手机号)"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content">
          <el-input
            class="input_width"
            v-model="loginData.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content">
          <el-button class="login_button" type="primary" size="medium " @click="toLogin()">登录</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- <talk></talk> -->
  </div>
</template>
<script>
import talk from "../../components/talk/talk";
import api from "./checklogin";
export default {
  components: { talk },
  data() {
    return {
      loginData: {
        tellphone: "",
        password: ""
      },
      isShowLoginType: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    toLogin(rel) {
      // alert('账号：'+this.loginData.username+'------密码：'+this.loginData.password);
      // 账号密码输入不能为空
      if (this.loginData.tellphone && this.loginData.password) {
        // 普通用户登录
        if (rel === "user") {
          api.checkLogin(this.loginData).then(
            res => {
              if (res.data) {
                this.$message.success("登录成功");
              } else {
                this.$message.error("登录失败,账号或密码错误,请重新输入");
              }
            },
            res => {
              this.$message.error("请求失败");
            }
          );
        } else {
          // 管理员登陆
        }
      } else {
        this.$message.error("账号或密码不能为空,请重新输入！");
        return;
      }
    },
    loginUser() {
      this.isShowLoginType = true;
      console.log("user---isShowLoginType: " + this.isShowLoginType);
    },
    loginAdmin() {
      this.isShowLoginType = false;
      console.log("admin---isShowLoginType: " + this.isShowLoginType);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  min-height: 40px;
  .input_width {
    width: 95%;
  }
  .login_button {
    width: 95%;
  }
}
.bg-purple {
  background: #d3dce6;
}
.second_box {
  display: flex;
  justify-content: center;
}
.second_choose {
  width: 95%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  .choose_color {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .choose_left {
    width: 50%;
    min-height: 45px;
    background: #84b1e4;
    border-top-left-radius: 10px;
  }
  .choose_right {
    width: 50%;
    min-height: 45px;
    background: #cad6e4;
    border-top-right-radius: 10px;
  }
}
</style>