<template>
  <div class="main-box">
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div class="index-body">
      <div>空调列表</div>
      <div class="main-box-body" v-for="item in listdata.data" :key="item.airId">
        <img @click="toDetail(item.airId)" style="width:100%" height="150" :src="item.airPicture" />
        <div class="body-footer">
          <span class="footer-p">{{item.airType}}</span>
          <span class="footer-p">{{item.airName}}</span>
          <el-button
            type="primary"
            @click="toDetail(item.airId)"
            style="width:100%;border:none"
            plain
          >查看详情</el-button>
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
    height: 200px;
    border-radius: 10px;
    box-shadow: #6ea2a2 0 0 10px;
    background: #ecf5ff;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .body-footer {
      width: 100%;
      height: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .footer-p {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>