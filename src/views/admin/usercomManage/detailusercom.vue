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
        <el-form-item label="空调名" prop="airName">
          <el-input v-model="data.airName" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户" prop="username">
          <el-input v-model="data.username" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="评论内容" prop="commentContent">
          <el-input type="textarea" v-model="data.commentContent" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="评论时间" prop="commentDate">
          <el-col :span="11">
            <el-form-item prop="commentDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.commentDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
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
        <el-form-item label="空调名" prop="airName">
          <span v-if="isShowEdit == false">{{data.airName}}</span>
          <el-input v-else v-model="data.airName" class="input-width" disabled clearable></el-input>
        </el-form-item>
        <el-form-item label="用户" prop="username">
          <span v-if="isShowEdit == false">{{data.username}}</span>
          <el-input v-else v-model="data.username" class="input-width" disabled clearable></el-input>
        </el-form-item>
        <el-form-item label="评论内容" prop="commentContent">
          <span v-if="isShowEdit == false">{{data.commentContent}}</span>
          <el-input
            v-else
            type="textarea"
            v-model="data.commentContent"
            class="input-width"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="评论时间" prop="commentDate">
          <span v-if="isShowEdit == false">{{formatDate(data.commentDate)}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="commentDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.commentDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
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
import api from "./usercomUrl";
import comm from "@/components/comm/comm";
export default {
  data() {
    return {
      isShowEdit: false,
      data: {
        airId: "",
        userId: "",
        commentContent: "",
        commentDate: "",
        isDelete: "false"
      },
      params: {
        commentId: "",
        type: ""
      },
      rules: {
        airName: [
          { required: true, message: "空调名不能为空", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
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
    this.getUserComById();
  },
  methods: {
    // 通过id获取Air
    getUserComById() {
      if (this.params.commentId) {
        api.getUserComById({ commentId: this.params.commentId }).then(
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
      console.log("无 airId");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          api.updateUserCom(this.data).then(
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
      this.getUserComById();
    },
    // 路由回退
    back() {
      this.$router.go(-1);
    },
    cancelEdit() {
      this.isShowEdit = !this.isShowEdit;
      if (this.isShowEdit == false) {
        this.getUserComById();
      }
    },
    // 时间格式化
    formatDate(res) {
      return comm.formatDate(res);
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