<template>
  <el-form
    :model="userData"
    ref="checkFor"
    label-width="100px"
    class="demo-ruleForm"
    label-position="left"
  >
    <el-form-item label="用户名(姓名)" prop="username">
      <el-input v-model="userData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="userData.password"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="name">
      <el-input v-model="userData.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="userData.age"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="userData.sex" placeholder="请选择性别">
        <el-option label="男生" value="M"></el-option>
        <el-option label="女生" value="F"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="联系方式" prop="tellphone">
      <el-input v-model="userData.tellphone"></el-input>
    </el-form-item>
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="userData.qq"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="userData.email"></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="userData.address"></el-input>
    </el-form-item>
    <el-form-item label="注册时间" required>
      <el-col :span="11">
        <el-form-item prop="registerTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="userData.userRegisterTime"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="userData.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('checkFor')">立即注册</el-button>
      <el-button @click="resetForm('checkFor')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      userData: ""
    };
  }
};
</script>
<style lang="scss" scoped>
</style>