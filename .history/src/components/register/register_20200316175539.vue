<template>
  <el-form
    :model="loginData"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    label-position="left"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginData.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input type="password" v-model="loginData.confirmPassword"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="name">
      <el-input v-model="loginData.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="loginData.age"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="loginData.sex" placeholder="请选择性别">
        <el-option label="男生" value="M"></el-option>
        <el-option label="女生" value="F"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="联系方式" prop="tellphone">
      <el-input v-model="loginData.tellphone"></el-input>
    </el-form-item>
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="loginData.qq"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginData.email"></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="loginData.address"></el-input>
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
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="loginData.remark"></el-input>
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
    // 表单规则手动测试 全局变量
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkPhone = (rule, value, callback) => {
      let result = /^1[3456789]\d{9}$/;
      if (value !== "") {
        if (!result.test(value)) {
        callback(new Error("请输入有效的电话号码！"));
      } else {
        callback();
      }}
    };
    return {
      loginData: {
        username: "",
        name: "",
        password: "",
        confirmPassword: "",
        tellphone: "",
        age: "",
        sex: "",
        address: "",
        qq: "",
        email: "",
        userRegisterTime: "",
        remark: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        confirmPassword: [
          { validator: checkPassWord, trigger: "blur" }
        ],
        name: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        tellphone: [
          { required: true, message: "联系方式不能为空", trigger: "blur" },
          { validator: checkPhone, trigger: "blur"}
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        age: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ],
        address: [{ required: true, message: "地址不能为空" }],
        email: [
          { required: false, message: "", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur,change" }
        ],
        qq: [
          { required: false, message: "", trigger: "blur" },
          { type: "number", message: "请输入正确的qq", trigger: "blur,change" }
        ],
        
        registerTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitForm() {},
    resetForm() {}
  }
};
</script>
<style lang="scss" scoped>
</style>