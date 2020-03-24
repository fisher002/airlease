<template>
  <div class="box">
    <el-form
      :model="userData"
      ref="checkFor"
      label-width="100px"
      class="demo-ruleForm"
      label-position="right"
    >
      <el-form-item label="用户名：" prop="username">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-model="userData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
          <div class="box-div">00013132</div>
        <el-input type="password" v-model="userData.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称：" prop="name">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.age"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="tellphone">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.tellphone"></el-input>
      </el-form-item>
      <el-form-item label="QQ：" prop="qq">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.qq"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.email"></el-input>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
          <div class="box-div">00013132</div>
        <el-input v-model="userData.address"></el-input>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
          <div class="box-div">00013132</div>
        <el-input type="textarea" v-model="userData.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('checkFor')">立即注册</el-button>
        <el-button @click="resetForm('checkFor')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {},
      editShow: false
    };
  },
  created() {},
  methods: {
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  padding: 5px 5px;
  .box-div {
    display: flex;
    justify-content: left;
  }
}
</style>