<template>
  <div class="detail-box">
    <div class="detail-head">
      <div class="head-title">
        <span>海尔(Haier)KFR-35GW/03DIB81A套机家用空调</span>
      </div>
      <img height="200" style="width:100%" src="../../../../static/img/timg.jpg" />
    </div>
    <div class="detail-body">
      <div class="detail-p">
        <span class="label-p">描述：</span>
        <span class="content-p">xxxxxxxxxxxxxxxxx</span>
      </div>
      <div class="detail-p">日租：4元/天 押金：2000元/台</div>
      <div class="detail-p">
        <span class="label-p">Tips：</span>
        <span class="content-p">xxxxxxxxxxxxxxxxx</span>
      </div>
      <div class="detail-p">
        <span class="label-p">库存：</span>
        <span class="content-p">9999999999</span>
      </div>
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
    border-bottom: solid 1px gainsboro;
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
      padding: 10px 0;
      .label-p {
        display: flex;
        width: 20%
      }
      .content-p {
        display: flex;
        width: 80%;
      }
    }
  }
}
</style>