<template>
  <div class="detail-box">
    <div class="detail-head">
      <div class="head-title">
        <span>海尔(Haier)KFR-35GW/03DIB81A套机家用空调</span>
      </div>
      <img height="200" style="width:100%" src="../../../../static/img/timg.jpg" />
    </div>
    <div class="detail-body">
      <el-form ref="form" :model="data" label-width="80px">
        <el-form-item label="描述:">
          <span class="detail-p">xxxxxxxxxxxxxxxxxxxxxx</span>
        </el-form-item>
        <el-form-item label="Tips:">
          <span class="detail-p">xxxxxxxxxxxxxxxxxxxxxx</span>
        </el-form-item>
        <el-form-item label="租金:">
          <span class="detail-p">4 元/天</span>
        </el-form-item>
        <el-form-item label="押金:">
          <span class="detail-p">2000 元/台</span>
        </el-form-item>
        <el-form-item label="库存:">
          <span class="detail-p">99999</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即租赁</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  padding: 3px 3px;
  .detail-head {
    display: flex;
    flex-wrap: wrap;
    border-bottom: gainsboro 1px solid;
    .head-title {
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
    }
  }
}
</style>