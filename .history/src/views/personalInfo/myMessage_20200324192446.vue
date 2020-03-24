<template>
  <div class="box">
    <div class="box-head">
      <div class="head-left">
        <div class="head-left-img">
          <img height="100" width="100" src="../../../static/img/zhou.jpg" />
        </div>
        <div class="left-name-time">
          <div class="left-name" v-if="userData">{{userData.name}}</div>
          <div class="left-time" v-if="userData">{{formatDate(userData.userRegisterTime)}}</div>
        </div>
      </div>
      <div class="head-right">
        <el-button @click="cancelEdit()">
          {{editShow ? '取消修改' : '修改资料'}}
          <i class="el-icon-edit el-icon--right"></i>
        </el-button>
        <el-button @click="dialogFormVisible = true">
          修改密码
          <i class="el-icon-edit el-icon--right"></i>
        </el-button>
      </div>
    </div>
    <el-form
      v-if="userData"
      :model="userData"
      ref="checkFor"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      label-position="right"
    >
      <el-form-item label="用户名：" prop="username">
        <div v-if="editShow == false" class="box-div">{{userData.username}}</div>
        <el-input v-else v-model="userData.username"></el-input>
      </el-form-item>
      <el-form-item v-if="editShow == true" label="昵称：" prop="name">
        <el-input v-model="userData.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <div v-if="editShow == false" class="box-div">{{userData.age}}</div>
        <el-input v-else v-model="userData.age"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <div v-if="editShow == false" class="box-div">{{userData.sex == 'M' ? '男' : '女'}}</div>
        <el-select style="float:left" v-else v-model="userData.sex" placeholder="请选择性别">
          <el-option label="男" value="M"></el-option>
          <el-option label="女" value="F"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式：" prop="tellphone">
        <div v-if="editShow == false" class="box-div">{{userData.tellphone}}</div>
        <el-input v-else v-model="userData.tellphone"></el-input>
      </el-form-item>
      <el-form-item label="QQ：" prop="qq">
        <div v-if="editShow == false" class="box-div">{{userData.qq}}</div>
        <el-input v-else v-model="userData.qq"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <div v-if="editShow == false" class="box-div">{{userData.email}}</div>
        <el-input v-else v-model="userData.email"></el-input>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <div v-if="editShow == false" class="box-div">{{userData.address}}</div>
        <el-input v-else v-model="userData.address"></el-input>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <div v-if="editShow == false" class="box-div">{{userData.remark}}</div>
        <el-input v-else type="textarea" v-model="userData.remark"></el-input>
      </el-form-item>
      <el-form-item v-if="editShow == true">
        <el-button type="primary" @click="submitForm('checkFor')">保存</el-button>
        <el-button @click="resetForm('checkFor')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="密码修改" :visible.sync="dialogFormVisible" width="500px" center>
      <el-form :model="editPassword" :rules="passRule">
        <el-form-item label="原密码" prop="oldpassword">
          <el-input v-model="editPassword.oldPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input v-model="editPassword.newPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmpassword">
          <el-input v-model="editPassword.confirmPassword" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">确认修改</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "./messageUrl";

export default {
  data() {
    var checkPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.editPassword.newPassword) {
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
      userData: null,
      editPassword: {
        userId: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      userDatas: {
        username: "",
        name: "",
        password: "",
        tellphone: "",
        age: "",
        sex: "",
        address: "",
        qq: "",
        email: "",
        remark: ""
      },
      editShow: false,
      dialogFormVisible: false,
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
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
        qq: [
          { required: true, message: "qq不能为空", trigger: "blur" }
          // { type: "number", message: "请输入正确的qq", trigger: "blur,change" }
        ]
      },
      passRule: {
        oldPassword: [
          { required: true, message: "原密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        confirmPassword: [{ validator: checkPassWord, trigger: "blur" }]
      }
    };
  },
  created() {
    if (
      this.$session.get("user") != undefined &&
      this.$session.get("user") != null
    ) {
      this.userData = this.$session.get("user");
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          api.updateUser(this.userData).then(
            res => {
              if (res.data == "100000") {
                this.$message.success("保存成功");
                this.findUser({ userId: this.userData.userId });
                this.editShow = false;
                return;
              }
              this.$message.error("保存失败");
            },
            res => {
              this.$message.error("保存失败");
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
      this.userData = this.$session.get("user");
    },
    cancelEdit() {
      this.editShow = !this.editShow;
      if (
        this.$session.get("user") != undefined &&
        this.$session.get("user") != null
      ) {
        this.userData = this.$session.get("user");
      }
    },
    findUser(param) {
      api.findUserById(param).then(
        res => {
          this.userData = res.data;
          this.$session.set("user", res.data);
        },
        res => {
          console.log("error");
        }
      );
    },
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
.box {
  padding: 5px 5px;
  .box-head {
    width: 100%;
    min-height: 80px;
    display: flex;
    .head-left {
      width: 50%;
      display: flex;
      .head-left-img {
        width: 100px;
        padding: 5px 5px;
        img {
          border-radius: 50%;
        }
      }
      .left-name-time {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .left-name {
          width: 100%;
          text-align: left;
          font-size: 20px;
        }
        .left-time {
          width: 100%;
          text-align: left;
          color: #cabbbb;
          font-size: 14px;
        }
      }
    }
    .head-right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .box-div {
    display: flex;
    justify-content: left;
    border-bottom: 1px solid #ecdddd;
  }
}
</style>