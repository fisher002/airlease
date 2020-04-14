<template>
  <div class="box">
    <div class="title">
      <div @click="showInfo = false" :style="{'color':showInfo ? '' : '#409EFF'}">我的信息</div>
      <div @click="getLeaseList()" :style="{'color':showInfo ? '#409EFF' : ''}">我的租赁</div>
    </div>
    <div v-if="showInfo == false">
      <div class="box-head">
        <div class="head-left">
          <div class="head-left-img" v-if="userData">
            <img height="50" width="50" :src="userData.headPicture" />
          </div>
          <div class="left-name-time" v-if="userData">
            <div class="left-name">{{userData.name}}</div>
            <div class="left-time">{{formatDate(userData.userRegisterTime)}}</div>
          </div>
        </div>
        <div class="head-right">
          <el-button @click="cancelEdit()" size="mini">
            {{editShow ? '取消修改' : '修改资料'}}
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
          <div v-else class="map-address">
            <el-input class="map-input" v-model="userData.address" clearable width="250"></el-input>
            <el-button
              :loading="loading"
              type="primary"
              @click="getUserLocation"
            >{{loading ? '获取位置中...' : '点击获取位置'}}</el-button>
          </div>
        </el-form-item>
        <el-form-item label="备注：" prop="remark">
          <div v-if="editShow == false" class="box-div">{{userData.remark}}</div>
          <el-input v-else type="textarea" v-model="userData.remark"></el-input>
        </el-form-item>
      </el-form>
      <div v-show="editShow" style="padding-bottom: 10px">
        <el-button type="primary" @click="submitForm('checkFor')">保存</el-button>
        <el-button @click="resetForm('checkFor')">重置</el-button>
        <el-button @click="cancelEdit()">取消</el-button>
      </div>
    </div>
    <div v-show="showInfo" class="lease-info">
      <div class="info-item">
        <div class="item-top">海尔(Haier)KFR-35GW/03DIB81A套机家用空调</div>
        <div class="item-bottom">
          <div class="item-number">
            <span>租赁数量: 999</span>
            <span>总价格: 9999</span>
          </div>
          <div class="item-time">
            <span>
              <i class="el-icon-date"></i>2020-04-13 00:00
            </span>
            <span>
              <i class="el-icon-date"></i>2021-04-13 00:00
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./personalUrl";
import { location } from "@/components/map/getMap";

export default {
  data() {
    // 自定义验证规则
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
      loading: false,
      showInfo: false,
      userData: "",
      params: {
        userId: "",
        pageNumber: 0
      },
      leaseData: "",
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
    // 获取我的租赁列表
    getLeaseInfoList() {
      this.params.userId = this.userData.userId;
      api.getInfoList(this.params).then(
        res => {
          if (res.data.code == 200) {
            this.leaseData = res.data;
            this.loading = false;
            this.$message.success(res.data.message);
          }
        },
        res => {
          this.loading = false;
          this.$message.error("error");
        }
      );
    },
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
    // 修改密码
    submitPassForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.editPassword.userId = this.userData.userId;
          api.updateUserPassword(this.editPassword).then(
            res => {
              if (res.data == "100000") {
                this.$message.success("修改成功");
                this.dialogFormVisible = false;
                this.resetPassForm("checkPassFor");
              } else if (res.data == "100001") {
                this.$message.error("修改失败，原密码不正确");
              } else {
                this.$message.error(res.data);
              }
            },
            res => {}
          );
        }
      });
    },
    resetPassForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields();
    },
    // 取消编辑
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
    // 获取我的租赁
    getLeaseList() {
      this.showInfo = true;
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
    },
    getUserLocation() {
      /**获取地图定位*/
      let _that = this;
      this.loading = true;
      let geolocation = location.initMap("container"); //定位 传demo  id
      AMap.event.addListener(geolocation, "complete", res => {
        if (res.info === "SUCCESS") {
          _that.userData.address = res.formattedAddress;
          this.loading = false;
          return;
        }
        this.loading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 16px !important;
}
.box {
  padding: 5px 5px;
  .title {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e8e1e1;
      height: 40px;
    }
  }
  .box-head {
    width: 100%;
    min-height: 80px;
    display: flex;
    .head-left {
      width: 50%;
      display: flex;
      .head-left-img {
        width: 50px;
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
          font-size: 18px;
        }
        .left-time {
          width: 100%;
          text-align: left;
          color: #cabbbb;
          font-size: 12px;
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
    text-align: left;
    font-size: 13px;
    border-bottom: 1px solid #ecdddd;
  }
}
.lease-info {
  padding: 5px 5px;
  display: flex;
  flex-wrap: wrap;
  .info-item {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    box-shadow: #6ea2a2 0 0 6px;
    .item-top {
      width: 100%;
      height: 20%;
    }
    .item-bottom {
      display: flex;
      width: 100%;
      height: 80%;
      flex-wrap: wrap;
      .item-number {
        display: flex;
        width: 100%;
        span {
          width: 50%;
        }
      }
      .item-time {
        display: flex;
        width: 100%;
        span {
          width: 50%;
        }
      }
    }
  }
}
.map-address {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .map-input {
    width: 100%;
  }
}
</style>