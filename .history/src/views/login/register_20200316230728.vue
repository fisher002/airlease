<template>
  <el-form
    :model="userData"
    :rules="rules"
    ref="checkFor"
    label-width="100px"
    class="demo-ruleForm"
    label-position="left"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="userData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="userData.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input type="password" v-model="userData.confirmPassword"></el-input>
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
import api from "./registeruser";
export default {
  data() {
    // 表单规则自定义测试 全局变量
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userData.password) {
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
        }
      }
    };
    return {
      userData: {
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
        confirmPassword: [{ validator: checkPassWord, trigger: "blur" }],
        name: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        tellphone: [
          { required: true, message: "联系方式不能为空", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        age: [
          { required: true, message: "年龄不能为空" }
          // { type: "number", message: "年龄必须为数字值", trigger: "blur,change" }
        ],
        address: [{ required: true, message: "地址不能为空" }],
        email: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        qq: [
          { required: true, message: "qq不能为空", trigger: "blur" }
          // { type: "number", message: "请输入正确的qq", trigger: "blur,change" }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          api.toRegisterUser(this.userData).then(
            res => {
              console.log(res);
            },
            res => {
              console.log('error')
            }
          );
        } else {
          // 校验失败
          return false;
        }
      });
    },
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>