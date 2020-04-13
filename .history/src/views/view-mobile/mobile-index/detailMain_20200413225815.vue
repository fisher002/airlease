<template>
  <div class="detail-box" v-if="data">
    <div class="detail-head">
      <div class="head-title">
        <span>{{data.airName}}</span>
      </div>
      <img height="200" style="width:100%" src="../../../../static/img/timg.jpg" />
    </div>
    <div class="detail-body">
      <div class="detail-p">
        <span class="label-p">描述：</span>
        <span class="content-p">{{data.airDescribe}}</span>
      </div>
      <div class="detail-p">
        <span class="label-p">租金：</span>
        <span class="content-p">{{data.airRent}} 元/天</span>
      </div>
      <div class="detail-p">
        <span class="label-p">押金：</span>
        <span class="content-p">{{data.airDeposit}} 元/台</span>
      </div>
      <div class="detail-p">
        <span class="label-p">Tips：</span>
        <span class="content-p">{{data.airTips}}</span>
      </div>
      <div class="detail-p">
        <span class="label-p">库存：</span>
        <span class="content-p">{{data.airStock}} 台</span>
      </div>
    </div>
    <div class="form">
      <span class="center">---填写租赁信息---</span>
      <el-form :model="leaseData" :rules="rules" ref="checkFor">
        <el-form-item label="开始租赁日期：" prop="leaseStartDate">
          <el-date-picker
            type="date"
            placeholder="选择开始日期"
            v-model="leaseData.leaseStartDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束租赁日期：" prop="leaseEndDate">
          <el-date-picker
            type="date"
            placeholder="选择结束日期"
            v-model="leaseData.leaseEndDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="租赁数量：" prop="leaseNumber">
          <el-input-number
            v-model.number="leaseData.leaseNumber"
            @change="calculationSum"
            class="p"
            :min="0"
            :max="1000"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="总计：">
          <span class="p">{{leaseData.leasePriceSum ? leaseData.leasePriceSum+' 元' : '0'+' 元'}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submitForm('checkFor')">确认租赁</el-button>
        <el-button type="primary" @click="resetForm('checkFor')">重 置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./indexUrl";
export default {
  data() {
    // 表单规则自定义测试 全局变量
    var checkNumber = (rule, value, callback) => {
      if (value <= 0) {
        callback(new Error("数量不能为0，至少为1"));
      } else {
        callback();
      }
    };
    return {
      data: {},
      leaseData: {
        airId: "",
        airName: "",
        userId: "",
        username: "",
        leaseStartDate: "",
        leaseEndDate: "",
        leaseNumber: "",
        leasePriceSum: "",
        leaseEditDate: "",
        leaseStatus: "editing",
        isDelete: "false"
      },
      rules: {
        leaseStartDate: [
          { required: true, message: "请选择开始日期", trigger: "change" }
        ],
        leaseEndDate: [
          { required: true, message: "请选择结束日期", trigger: "change" }
        ],
        leaseNumber: [{ validator: checkNumber, trigger: "blur" }]
      },
      params: {
        airId: ""
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
    this.getAirDetail(this.params);
  },
  methods: {
    getAirDetail(res) {
      api.getAirByAirId(res).then(
        res => {
          this.data = res.data;
        },
        res => {
          console.log("error");
        }
      );
    },
    calculationSum(value) {
      // 计算总价格
      let start, end, day;
      if (this.leaseData.leaseStartDate && this.leaseData.leaseEndDate) {
        start = this.checkDay(this.leaseData.leaseStartDate);
        end = this.checkDay(this.leaseData.leaseEndDate);
        day = (end - start) / (24 * 60 * 60 * 1000);
        if (value > 0) {
          this.leaseData.leasePriceSum =
            day * 4 + this.leaseData.leaseNumber * 2000;
        }
      }
      return;
    },
    checkDay(res) {
      let date = new Date(res);
      return date.getTime();
    },
    submitForm(res) {
      if (
        !sessionStorage.getItem("isLogin") ||
        sessionStorage.getItem("isLogin") === "false"
      ) {
        this.$message.error("未登录，无法进行此操作！");
        // return;
      }
      this.$refs[res].validate(valid => {
        if (valid) {
          // 校验通过
          this.leaseData.airId = this.data.airId;
          this.leaseData.airName = this.data.airName;
          this.leaseData.userId = this.$session.get("user").userId;
          this.leaseData.username = this.$session.get("user").username;
          this.leaseData.leaseEditDate = new Date();
          api.addLeaseInfo(this.leaseData).then(
            res => {
              if (res.data == "100000") {
                this.$message.success("提交成功");
                this.dialogShow = false;
                this.resetForm();
                return;
              }
              this.$message.error("提交失败");
            },
            res => {
              this.$message.error("提交失败");
            }
          );
        }
      });
    },
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields();
      this.leaseData.leaseNumber = 0;
      this.leaseData.leasePriceSum = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.p {
  display: flex;
  text-align: left;
}
.center {
  display: flex;
  justify-content: center;
  font-weight: bolder;
}
.detail-box {
  padding: 3px 3px;
  .detail-head {
    display: flex;
    flex-wrap: wrap;
    border-bottom: solid 1px gainsboro;
    .head-title {
      padding: 0 5px;
      width: 100%;
      display: flex;
      font-size: 15px;
      font-weight: bolder;
    }
  }
  .detail-body {
    padding: 0 5px;
    display: flex;
    flex-wrap: wrap;
    .detail-p {
      display: flex;
      width: 100%;
      padding: 10px 0;
      .label-p {
        display: flex;
        width: 15%;
      }
      .content-p {
        display: flex;
        text-align: left;
        width: 85%;
        font-size: 14px;
      }
    }
  }
  .form {
    padding-bottom: 15px;
  }
}
</style>