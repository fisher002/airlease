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
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else type="password" v-model="userData.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称：" prop="name">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.age"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：" prop="tellphone">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.tellphone"></el-input>
      </el-form-item>
      <el-form-item label="QQ：" prop="qq">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.qq"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.email"></el-input>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else v-model="userData.address"></el-input>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <div v-if="editShow == false" class="box-div">00013132</div>
        <el-input v-else type="textarea" v-model="userData.remark"></el-input>
      </el-form-item>
      <el-form-item v-if="editShow == true">
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
    border-bottom: 1px solid #ecdddd;
  }
}
</style>