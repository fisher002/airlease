<template>
  <div>
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
        <div v-show="userRegister">
          <span class="to_register">没有账号?立即注册</span>
        </div>
      </el-col>
    </el-row>
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
    toLogin() {}
  }
};
</script>
<style lang="scss" scoped>
</style>