<template>
  <div class="detail-box">
    <div class="detail-de">所选空调详情</div>
    <div class="detail-body">
      <div class="detail-body-left">
        <div class="left-img-show">
          <img v-if="datas.imglist.data" :src="datas.imglist.data[0]" />
        </div>
        <div class="left-img-list">
          <div class="list-one" v-for="(item,index) in datas.imglist.data" :key="index">
            <img :src="item" />
          </div>
        </div>
      </div>
      <div class="detail-body-right">
        <div class="body-right-message">
          <div class="message-content">{{datas.detaildata.name}}</div>
          <div class="message-content">{{datas.detaildata.introduce}}</div>
          <div class="message-content">{{datas.detaildata.moneymsg}}</div>
          <div class="message-content">{{datas.detaildata.tips}}</div>
          <div class="message-content">{{datas.detaildata.praise}}</div>
        </div>
        <div class="body-right-comment"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  props: {
    datas: ""
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
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
        height: 25%;
        display: flex;
        justify-content: space-around;
        .list-one {
          width: 23%;
          height: 98%;
          cursor: pointer;
          border: 1px #ddd4d4 solid;
          border-radius: 5px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list-one:hover {
          border: 1px solid rgb(255, 0, 0);
        }
      }
    }
    .detail-body-right {
      width: 70%;
      height: 100%;
      border-radius: 10px;
      border: 1px #ddd4d4 solid;
      .body-right-message {
        width: 70%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        .message-content {
          width: 100%;
          text-align: left;
          height: 30px;
        }
      }
    }
  }
}
</style>