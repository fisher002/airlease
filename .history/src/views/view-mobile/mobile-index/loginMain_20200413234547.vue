<template>
  <div>
    <div class="grid-content">用户登录</div>
    <div class="grid-content">
      <el-input class="input_width" v-model="loginData.tellphone" placeholder="请输入账号(手机号)"></el-input>
    </div>
    <div class="grid-content">
      <el-input
        class="input_width"
        v-model="loginData.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </div>
    <div class="grid-content">
      <el-button class="login_button" type="primary" size="medium" @click="toLogin()">登录</el-button>
    </div>
    <div>
      <span class="to_register">没有账号?立即注册</span>
    </div>
  </div>
</template>
<script>
import api from "./indexUrl";
export default {
  data() {
    return {
      loginData: {
        tellphone: "",
        password: ""
      }
    };
  },
  methods: {
    toLogin() {
      api.checkLoginUser(this.loginData).then(
        res => {
          if (res.data.code == 200) {
            this.$message.success(res.data.message);
            this.$session.set("user", res.data.data);
            sessionStorage.setItem("isLogin", true);
            this.$router.go(-1);
          } else {
            sessionStorage.setItem("isLogin", false);
            this.$message.error(res.data.message);
          }
        },
        res => {
          this.$message.error("请求失败");
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.grid-content {
  padding: 10px 10px;
  .login_button {
    width: 100%;
  }
}
</style>