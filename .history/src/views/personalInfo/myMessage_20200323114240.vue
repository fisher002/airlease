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
        <el-input v-show="editShow" v-model="userData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" type="password" v-model="userData.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称：" prop="name">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.age"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="tellphone">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.tellphone"></el-input>
      </el-form-item>
      <el-form-item label="QQ：" prop="qq">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.qq"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.email"></el-input>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" v-model="userData.address"></el-input>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <div v-show="editShow" class="box-div">00013132</div>
        <el-input v-show="editShow" type="textarea" v-model="userData.remark"></el-input>
      </el-form-item>
      <el-form-item v-show="editShow">
        <el-button type="primary" @click="submitForm('checkFor')">完成编辑</el-button>
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
      editShow: true
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