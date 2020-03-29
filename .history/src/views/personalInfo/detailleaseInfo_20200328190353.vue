<template>
  <div>
    <div class="detail-top">
      <el-button @click="back()" icon="el-icon-arrow-left">返回</el-button>
      <el-button
        :disabled="detail.leaseStatus == 'available'"
        @click="showEdit = !showEdit"
        icon="el-icon-edit"
      >{{showEdit ? '取消编辑' : '编辑'}}</el-button>
    </div>
    <div class="detail-bottom">
      <el-form
        v-if="detail"
        :model="detail"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm"
        label-position="right"
      >
        <el-form-item label="空调名称：" prop="airName">
          <div v-if="showEdit == false" class="box-div">{{detail.airName}}</div>
          <el-input v-else v-model="detail.airName"></el-input>
        </el-form-item>
        <el-form-item label="开始时间：" prop="leaseStartDate">
          <div v-if="showEdit == false" class="box-div">{{detail.leaseStartDate}}</div>
          <el-date-picker
            v-else
            type="date"
            placeholder="选择开始日期"
            v-model="detail.leaseStartDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间：" prop="leaseEndDate">
          <div v-if="showEdit == false" class="box-div">{{detail.leaseEndDate}}</div>
          <el-date-picker
            v-else
            type="date"
            placeholder="选择结束日期"
            v-model="detail.leaseEndDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="租赁数量：" prop="leaseNumber">
          <div v-if="showEdit == false" class="box-div">{{detail.leaseNumber}}</div>
          <el-input-number
            v-else
            v-model="detail.leaseNumber"
            @change="calculationSum"
            :min="0"
            :max="1000"
            label="描述文字"
            style="float:left"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="总价格：">
          <div class="box-div">{{detail.leasePriceSum}}</div>
        </el-form-item>
        <el-form-item label="状态：">
          <div class="box-div">{{detail.leaseStatus == 'editing' ? '审核中' : '已通过'}}</div>
        </el-form-item>
        <el-form-item label="提交时间：">
          <div class="box-div">{{detail.leaseEditDate}}</div>
        </el-form-item>
        <el-form-item v-if="showEdit == true">
          <el-button type="primary" @click="submitForm('checkFor')">保存</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  props: { detail: "" },
  data() {
    return {
      showEdit: false
    };
  },
  methods: {
    back() {
      this.$emit("goBack", "back");
    },
    calculationSum(value) {
      // 计算总价格
      let start, end, day;
      if (this.detail.leaseStartDate && this.detail.leaseEndDate) {
        start = this.checkDay(this.detail.leaseStartDate);
        end = this.checkDay(this.detail.leaseEndDate);
        day = (end - start) / (24 * 60 * 60 * 1000);
        if (value > 0) {
          this.detail.leasePriceSum =
            day * 4 + this.detail.leaseNumber * 2000;
        }
      }
      return;
    },
    checkDay(res) {
      let date = new Date(res);
      return date.getTime();
    },
    submitForm(res) {},
    resetForm() {}
  }
};
</script>
<style lang="scss" scoped>
.detail-top {
  display: flex;
  justify-content: space-between;
}
.detail-bottom {
  padding: 5px 3px;
  .box-div {
    display: flex;
    justify-content: left;
    border-bottom: 1px solid #ecdddd;
  }
}
</style>