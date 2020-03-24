<template>
  <div class="box">
    <el-form
      :model="userData"
      ref="checkFor"
      :rules="rules"
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
      userDatas: "",
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
      editShow: false,
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
          { required: true, message: "年龄不能为空" },
          {
            type: "number",
            message: "年龄必须为数字值",
            trigger: "blur,change"
          }
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
.box {
  padding: 5px 5px;
  .box-div {
    display: flex;
    justify-content: left;
    border-bottom: 1px solid #ecdddd;
  }
}
</style>