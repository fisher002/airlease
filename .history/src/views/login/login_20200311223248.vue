<template>
  <div class="box">
    <el-input class="input_width" v-model="loginData.username" placeholder="请输入账号"></el-input>
    <br />
    <el-input class="input_width" v-model="loginData.password" type="password" placeholder="请输入密码"></el-input>
    <br />
    <el-button type="primary" size="medium " @click="toLogin">登录</el-button><br/>
    <talk></talk>
  </div>
</template>
<script>
import talk from '../../components/talk/talk'
export default {
  components: {talk},
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {
        // alert('账号：'+this.loginData.username+'------密码：'+this.loginData.password);
    }
  }
};
</script>
<style scoped>
.input_width {
  width: 15%;
}
</style>