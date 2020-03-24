<template>
  <div class="box">
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple">
          <el-input class="input_width" v-model="loginData.tellphone" placeholder="请输入账号(手机号)"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple">
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
        <div class="grid-content bg-purple">
          <el-button class="login_button" type="primary" size="medium " @click="toLogin()">登录</el-button>
        </div>
      </el-col>
    </el-row>
    <talk></talk>
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
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {
      // alert('账号：'+this.loginData.username+'------密码：'+this.loginData.password);
      // 账号密码输入不能为空
      if (this.loginData.tellphone && this.loginData.password) {
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
        this.$message.error("账号或密码不能为空,请重新输入！");
        return;
      }
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
</style>