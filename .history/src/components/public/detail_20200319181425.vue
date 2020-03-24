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
      <div class="detail-body-right"></div>
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
        border-radius: 10px;
        height: 25%;
        border: 1px solid rgb(221, 212, 212);
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        .list-one {
          width: 22%;
          height: 98%;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
          img:hover {
            border: 1px solid rgb(255, 0, 0);
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