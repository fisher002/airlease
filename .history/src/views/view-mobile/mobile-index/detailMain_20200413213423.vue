<template>
  <div class="detail-box">
    <div class="detail-head">
      <div class="head-title">
        <span>海尔(Haier)KFR-35GW/03DIB81A套机家用空调</span>
      </div>
      <img height="200" style="width:100%" src="../../../../static/img/timg.jpg" />
    </div>
    <div class="detail-body">
      <div class="detail-p">描述：000</div>
      <div class="detail-p">日租：4元/天 押金：2000元/台</div>
      <div class="detail-p">Tips：xxxxxxx</div>
      <div class="detail-p">库存：99999</div>
      <div class="detail-p"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.detail-box {
  padding: 3px 3px;
  .detail-head {
    display: flex;
    flex-wrap: wrap;
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