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
        <el-form-item label="租赁人" prop="username">
          <el-input v-model="data.username" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="租赁开始时间" prop="leaseStartDate">
          <el-col :span="11">
            <el-form-item prop="leaseStartDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseStartDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁结束时间" prop="leaseEndDate">
          <el-col :span="11">
            <el-form-item prop="leaseEndDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseEndDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁数量" prop="leaseNumber">
          <el-input v-model="data.leaseNumber" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="租赁总和" prop="leasePriceSum">
          <el-input v-model="data.leasePriceSum" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="操作时间" prop="leaseEditDate">
          <el-col :span="11">
            <el-form-item prop="leaseEditDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseEditDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁状态" prop="leaseStatus">
          <el-input v-model="data.leaseStatus" class="input-width" clearable></el-input>
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
          <el-input v-else v-model="data.airName" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="租赁人" prop="username">
          <span v-if="isShowEdit == false">{{data.username}}</span>
          <el-input v-else v-model="data.username" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="租赁开始时间" prop="leaseStartDate">
          <span v-if="isShowEdit == false">{{data.leaseStartDate}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="leaseStartDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseStartDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁结束时间" prop="leaseEndDate">
          <span v-if="isShowEdit == false">{{data.leaseEndDate}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="leaseEndDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseEndDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁数量" prop="leaseNumber">
          <span v-if="isShowEdit == false">{{data.leaseNumber}}</span>
          <el-input v-else v-model="data.leaseNumber" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="租赁总和" prop="leasePriceSum">
          <span v-if="isShowEdit == false">{{data.leasePriceSum}}</span>
          <el-input v-else v-model="data.leasePriceSum" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="操作时间" prop="leaseEditDate">
          <span v-if="isShowEdit == false">{{data.leaseEditDate}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="leaseEditDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.leaseEditDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="租赁状态" prop="leaseStatus">
          <span v-if="isShowEdit == false">{{data.leaseStatus}}</span>
          <el-input v-else v-model="data.leaseStatus" class="input-width" clearable></el-input>
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
import api from "./airleaseUrl";
export default {
  data() {
    return {
      isShowEdit: false,
      data: {
        airId: "",
        airName: "",
        userId: "",
        username: "",
        leaseStartDate: "",
        leaseEndDate: "",
        leaseNumber: "",
        leasePriceSum: "",
        leaseEditDate: "",
        leaseStatus: "",
        isDelete: "false"
      },
      params: {
        leaseId: "",
        type: ""
      },
      rules: {
        airName: [
          { required: true, message: "空调名不能为空", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
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
    this.getAirLeaseById();
  },
  methods: {
    // 通过id获取Air
    getAirLeaseById() {
      if (this.params.leaseId && this.params.type != 'add') {
        api.getAirLeaseById({ leaseId: this.params.leaseId }).then(
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
      console.log("无 leaseId");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          api.updateAirLease(this.data).then(
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
      this.getAirLeaseById();
    },
    // 路由回退
    back() {
      this.$router.go(-1);
    },
    cancelEdit() {
      this.isShowEdit = !this.isShowEdit;
      if (this.isShowEdit == false) {
        this.getAirLeaseById();
      }
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