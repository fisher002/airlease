<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-input class="input_width" v-model="loginData.tellphone" placeholder="请输入账号"></el-input>
    <br />
    <el-input class="input_width" v-model="loginData.password" type="password" placeholder="请输入密码"></el-input>
    <br />
    <el-button type="primary" size="medium " @click="toLogin()">登录</el-button>
    <br />
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
<style scoped>
.input_width {
  width: 15%;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
}
</style>