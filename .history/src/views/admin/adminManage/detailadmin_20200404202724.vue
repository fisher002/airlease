<template>
  <div>
    <div class="form-box" v-if="params.type == 'add'">
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="管理员名" prop="username">
          <el-input v-model="data.adminUserName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="data.adminPassWord"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="data.confirmPassword"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input v-model="data.adminName"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="tellphone">
          <el-input v-model="data.adminTellPhone"></el-input>
        </el-form-item>
        <el-form-item label="注册时间" required>
          <el-col :span="11">
            <el-form-item prop="registerTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="data.adminRegisterTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="data.adminRemark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('checkFor')">立即注册</el-button>
          <el-button @click="resetForm('checkFor')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="params.type == 'detail'">detail</div>
  </div>
</template>
<script>
export default {
  data() {
    // 表单规则自定义测试 全局变量
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.data.adminPassWord) {
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
      data: {
        adminUserName: "",
        adminPassWord: "",
        adminName: "",
        adminTellPhone: "",
        adminRemark: "",
        adminRegisterTime: "",
        adminStatus: "editing",
        isDelete: "false"
      },
      params: {
        adminId: "",
        type: ""
      },
      rules: {
        username: [
          { required: true, message: "管理员名不能为空", trigger: "blur" },
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
        ]
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
  },
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
.form-box {
  padding: 20px 10px;
}
</style>