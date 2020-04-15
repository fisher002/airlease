<template>
  <div class="detail-box">
    <div class="title">--租赁详情--</div>
    <div class="detail-bottom" v-if="data">
      <el-form
        :model="data"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="空调名称：" prop="airName">
          <div class="box-div">{{data.airName}}</div>
        </el-form-item>
        <el-form-item label="开始时间：" prop="leaseStartDate">
          <div v-if="showEdit == false" class="box-div">{{formatDate(data.leaseStartDate)}}</div>
          <el-date-picker
            v-else
            type="date"
            placeholder="选择开始日期"
            @change="calculationSum"
            v-model="data.leaseStartDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间：" prop="leaseEndDate">
          <div v-if="showEdit == false" class="box-div">{{formatDate(data.leaseEndDate)}}</div>
          <el-date-picker
            v-else
            type="date"
            placeholder="选择结束日期"
            @change="calculationSum"
            v-model="data.leaseEndDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="租赁数量：" prop="leaseNumber">
          <div v-if="showEdit == false" class="box-div">{{data.leaseNumber}}</div>
          <el-input-number
            v-else
            v-model="data.leaseNumber"
            @change="calculationSum"
            :min="0"
            :max="1000"
            label="描述文字"
            style="float:left"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="总价格：">
          <div class="box-div">{{data.leasePriceSum}}</div>
        </el-form-item>
        <el-form-item label="状态：">
          <div
            class="box-div"
            :style="{'color': data.leaseStatus == 'editing' ? '#F56C6C' : '#67C23A'}"
          >{{data.leaseStatus == 'editing' ? '未处理' : '已处理'}}</div>
        </el-form-item>
        <el-form-item label="提交时间：">
          <div class="box-div">{{formatDate(data.leaseEditDate)}}</div>
        </el-form-item>
        <div class="detail-btn">
          <el-button
            :disabled="data.leaseStatus == 'available'"
            @click="cancelEdit()"
            icon="el-icon-edit"
          >{{showEdit ? '取消编辑' : '编辑'}}</el-button>
          <el-button v-if="showEdit == true" type="primary" @click="submitForm()">保存</el-button>
          <el-button v-if="showEdit == true" @click="resetForm()">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "./personalUrl";
export default {
  data() {
    return {
      showEdit: false,
      data: "",
      params: {
        leaseId: ""
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
    this.getInfo();
  },
  methods: {
    getInfo() {
      api.getLeaseInfo(this.params).then(
        res => {
          if (res) {
            this.data = res.data;
          }
        },
        res => {
          this.$message.error("error");
        }
      );
    },
    cancelEdit() {
      this.showEdit = !this.showEdit;
      if (this.showEdit == false) {
        this.getInfo();
      }
    },
    calculationSum(value) {
      // 计算总价格
      let start, end, day;
      if (this.data.leaseStartDate && this.data.leaseEndDate) {
        start = this.checkDay(this.data.leaseStartDate);
        end = this.checkDay(this.data.leaseEndDate);
        day = (end - start) / (24 * 60 * 60 * 1000);
        if (value > 0) {
          this.data.leasePriceSum = day * 4 + this.data.leaseNumber * 2000;
        }
      }
      return;
    },
    checkDay(res) {
      let date = new Date(res);
      return date.getTime();
    },
    // 修改提交
    submitForm(res) {
      api.updateLeaseInfo(this.data).then(
        res => {
          if (res.data == "100000") {
            this.$message.success("保存成功");
            this.showEdit = false;
            this.getInfo();
            return;
          }
          this.$message.error("保存失败");
        },
        res => {
          this.$message.error("保存失败");
        }
      );
    },
    // 重置表单
    resetForm() {
      this.getInfo();
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
.el-form-item {
  margin-bottom: 15px !important;
}
.detail-box {
  padding: 3px 3px;
  .detail-btn {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .box-div {
    display: flex;
    text-align: left;
    width: 100%;
    font-size: 14px;
  }
}
</style>