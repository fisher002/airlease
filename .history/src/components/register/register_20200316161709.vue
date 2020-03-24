<template>
  <el-form
    :model="loginData"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginData.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password">
      <el-input v-model="confirmPassword"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="password">
      <el-select v-model="loginData.sex" placeholder="请选择性别">
        <el-option label="男生" value="M"></el-option>
        <el-option label="女生" value="F"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="注册时间" required>
      <el-col :span="11">
        <el-form-item prop="registerTime">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="loginData.userRegisterTime"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        name: "",
        password: "",
        tellphone: "",
        age: "",
        sex: "",
        address: "",
        qq: "",
        email: "",
        type: "",
        userRegisterTime: "",
        status: "",
        remark: ""
      },
      confirmPassword: '',
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  created (){},
  methods: {

  }
};
</script>
<style lang="scss" scoped>
</style>