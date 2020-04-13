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
  </div>
</template>
<script>
import api from "./indexUrl";
export default {
  data() {
    return {
      data: {},
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
    }
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
}
</style>