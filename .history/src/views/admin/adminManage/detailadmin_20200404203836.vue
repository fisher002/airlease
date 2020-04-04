<template>
  <div>
    <div class="form-box" v-if="params.type == 'add'">
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
      >
        <el-form-item label="管理员名" prop="adminUserName">
          <el-input v-model="data.adminUserName" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="adminPassWord">
          <el-input type="password" v-model="data.adminPassWord" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="data.confirmPassword" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="adminName">
          <el-input v-model="data.adminName" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="adminTellPhone">
          <el-input v-model="data.adminTellPhone" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-col :span="11">
            <el-form-item prop="registerTime">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.adminRegisterTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input class="input-width" style="width:35%" type="textarea" v-model="data.adminRemark" clearable></el-input>
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
        adminUserName: [
          { required: true, message: "管理员名不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        adminPassWord: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        confirmPassword: [{ validator: checkPassWord, trigger: "blur" }],
        adminName: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        adminTellPhone: [
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
.input-width {
  width: 30%;
  float: left;
}
</style>