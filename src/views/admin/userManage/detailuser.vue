<template>
  <div>
    <div class="form-box" v-if="params.type == 'add'">
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm center"
        label-position="left"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="data.username" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="data.password" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="data.confirmPassword" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input v-model="data.name" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="data.age" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select style="float:left" v-model="data.sex" placeholder="请选择性别">
            <el-option label="男生" value="M"></el-option>
            <el-option label="女生" value="F"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="tellphone">
          <el-input v-model="data.tellphone" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input
            v-model.number="data.qq"
            class="input-width"
            @input="emailCheck(data.qq)"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="data.email" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="data.address" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-col :span="11">
            <el-form-item prop="userRegisterTime">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.userRegisterTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input class="input-width" type="textarea" v-model="data.remark" clearable></el-input>
        </el-form-item>
        <el-form-item style="float:left">
          <el-button type="primary" @click="submitForm('checkFor')">立即添加</el-button>
          <el-button @click="resetForm('checkFor')">重置</el-button>
          <el-button type="primary" @click="back()">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-box" v-if="params.type == 'detail'">
      <div class="cancel-width">
        <el-button @click="cancelEdit()" icon="el-icon-edit">{{isShowEdit ? '取消编辑' : '编辑'}}</el-button>
      </div>
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm center"
        label-position="left"
      >
        <el-form-item label="用户名" prop="username">
          <span v-if="isShowEdit == false">{{data.username}}</span>
          <el-input v-else v-model="data.username" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item v-show="isShowEdit" label="密码" prop="password">
          <el-input type="password" v-model="data.password" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <span v-if="isShowEdit == false">{{data.name}}</span>
          <el-input v-else v-model="data.name" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <span v-if="isShowEdit == false">{{data.age}}</span>
          <el-input type="number" v-else v-model.number="data.age" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <span v-if="isShowEdit == false">{{data.sex == 'M' ? '男' : '女'}}</span>
          <el-select v-else style="float:left" v-model="data.sex" placeholder="请选择性别">
            <el-option label="男生" value="M"></el-option>
            <el-option label="女生" value="F"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="tellphone">
          <span v-if="isShowEdit == false">{{data.tellphone}}</span>
          <el-input v-else v-model="data.tellphone" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <span v-if="isShowEdit == false">{{data.qq}}</span>
          <el-input v-else v-model.number="data.qq" @input="emailCheck(data.qq)" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <span v-if="isShowEdit == false">{{data.email}}</span>
          <el-input v-else v-model="data.email" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <span v-if="isShowEdit == false">{{data.address}}</span>
          <el-input v-else v-model="data.address" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <span
            :style="{'color':data.status == 'editing' ? 'red' : '#1fca1f'}"
            v-if="isShowEdit == false"
          >{{data.status == 'editing' ? '审核中' : '可用'}}</span>
          <el-select v-else style="float:left" v-model="data.status" placeholder="请选择状态">
            <el-option label="审核中" value="editing"></el-option>
            <el-option label="可用" value="available"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册时间">
          <span v-if="isShowEdit == false">{{formatDate(data.userRegisterTime)}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="registerTime">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.userRegisterTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <span v-if="isShowEdit == false">{{data.remark}}</span>
          <el-input v-else class="input-width" type="textarea" v-model="data.remark" clearable></el-input>
        </el-form-item>
        <el-form-item style="float:left">
          <el-button v-show="isShowEdit" type="primary" @click="submitForm('checkFor')">保存</el-button>
          <el-button v-show="isShowEdit" @click="resetForms('checkFor')">重置</el-button>
          <el-button type="primary" @click="back()">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "./userUrl";
export default {
  data() {
    // 表单规则自定义测试 全局变量
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.data.password) {
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
      isShowEdit: false,
      data: {
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        sex: "",
        age: "",
        qq: "",
        email: "",
        address: "",
        tellphone: "",
        remark: "",
        userRegisterTime: "",
        type: "ordinary",
        status: "available",
        isDelete: "false"
      },
      params: {
        userId: "",
        type: ""
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
        age: [{ required: true, message: "年龄不能为空" }],
        address: [{ required: true, message: "地址不能为空" }],
        email: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        qq: [{ required: true, message: "qq不能为空" }]
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
    this.getUserById();
  },
  methods: {
    // 通过id获取admin
    getUserById() {
      if (this.params.userId) {
        api.getUserById({ userId: this.params.userId }).then(
          res => {
            if (res.data.code == 200) {
              this.data = res.data.data;
              return;
            }
            this.$message.error(res.data.message);
          },
          res => {
            this.$message.error("error");
          }
        );
        return;
      }
      console.log("无 userId");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          this.data.password = this.$md5(this.data.password);
          api.updateUser(this.data).then(
            res => {
              if (res.data.code == 200) {
                this.$message.success(res.data.message);
                this.back();
              } else {
                this.$message.error(res.data.message);
              }
            },
            res => {
              this.$message.error("error");
            }
          );
        } else {
          // 校验失败
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 重置表单
    resetForms(formName) {
      this.$refs[formName].resetFields();
      this.getUserById();
    },
    // 路由回退
    back() {
      this.$router.go(-1);
    },
    cancelEdit() {
      this.isShowEdit = !this.isShowEdit;
      if (this.isShowEdit == false) {
        this.getUserById();
      }
    },
    // email qq
    emailCheck(res) {
      if (res) {
        this.data.email = res + "@qq.com";
      }
    },
    // 日期格式化
    formatDate(res) {
      let date = new Date(res);
      let year = date.getFullYear(),
        mouth =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1,
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        minute =
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return year + "-" + mouth + "-" + day + " " + hour + ":" + minute;
    }
  }
};
</script>
<style lang="scss" scoped>
.form-box {
  padding: 20px 20px;
  span {
    float: left;
  }
}
.input-width {
  width: 30%;
  float: left;
}
.cancel-width {
  width: 100%;
  text-align: left;
  padding: 10px 0;
}
</style>