<template>
  <div class="main-box">
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div>空调列表</div>
    <div class="index-body">
      <div class="main-box-body" v-for="item in listdata.data" :key="item.airId">
        <img @click="toDetail(item.airId)" style="width:100%" height="150" :src="item.airPicture" />
        <div class="body-footer">
          <span class="footer-p">{{item.airName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./indexUrl";
export default {
  data() {
    return {
      listdata: "",
      params: {
        keyword: "",
        pageNumber: 0
      }
    };
  },
  created() {
    this.getAirList(this.params);
  },
  methods: {
    // 获取空调列表
    getAirList(params) {
      api.getAirList(params).then(
        res => {
          if (res.data.code == 200) {
            this.listdata = res.data;
          }
        },
        res => {
          console.log("error");
        }
      );
    },
    // 空调详情
    toDetail(res) {
      // this.$router.push({
      //     path: "/airdetail",
      //     query: {
      //       airId: res
      //     }
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  padding: 3px 3px;
  overflow: hidden;
  .main-box-body {
    cursor: pointer;
    width: 49%;
    border-radius: 10px;
    box-shadow: #6ea2a2 0 0 10px;
    background: #fbfbfb;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .body-footer {
      .footer-p {
        font-size: 14px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>