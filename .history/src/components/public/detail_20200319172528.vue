<template>
  <div class="detail-box">
    <div class="detail-de">所选空调详情</div>
    <div class="detail-body">
      <div class="detail-body-left">
        <div class="left-img-show">
          <img src="../../../static/img/timg.jpg" />
        </div>
        <div class="left-img-list">
          <div class="list-one">
            <img />
          </div>
        </div>
      </div>
      <div class="detail-body-right"></div>
    </div>
  </div>
</template>
<script>
import imgs from "../json/imgs";
import dt from "../json/details";
export default {
  name: "detail",
  props: {
    datas: ""
  },
  data() {
    return {
      images: imgs,
      details: dt,
      imgdata: '',
      detaildata: ''
    };
  },
  created() {},
  methods: {
    // 识别空调图片
    // 识别空调信息
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  width: 100%;
  background: azure;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .detail-de {
    width: 100%;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-body {
    width: 90%;
    min-height: 500px;
    display: flex;
    justify-content: space-around;
    .detail-body-left {
      width: 29%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      .left-img-show {
        width: 100%;
        border-radius: 10px;
        height: 74%;
        border: 1px solid rgb(221, 212, 212);
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .left-img-list {
        width: 100%;
        border-radius: 10px;
        height: 25%;
        border: 1px solid rgb(221, 212, 212);
        display: flex;
        justify-content: space-between;
        .list-one {
          width: 24%;
          height: 98%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .detail-body-right {
      width: 70%;
      height: 100%;
      border-radius: 10px;
      background: rgb(97, 53, 97);
    }
  }
}
</style>