<template>
  <div class="box">
    <el-row>
      <el-col :span="6" :offset="9">
        <div class="grid-content">
          <div class="second_choose">
            <div class="input_width choose_left"></div>
            <div class="input_width choose_right"></div>
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
.bg-purple {
  background: #d3dce6;
}
.second_choose{
  width: 95%;
  display: flex;
  justify-content: space-around;
  .choose_left{
    width: 50%;
    min-height: 45px;
    background: #d3dce6;
  }
  .choose_right{
    width: 50%;
    min-height: 45px;
    background: #87b4e7;
  }
}
</style>