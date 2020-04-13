<template>
  <div class="main-box">
    <img style="width: 100%;" height="150" src="../../../../static/img/lunbo.jpg" />
    <div class="list"><i class="el-icon-caret-right"></i>可租赁空调列表</div>
    <div class="main-body">
      <div class="main-box-body" v-for="item in listdata.data" :key="item.airId" @click="toDetail(item.airId)">
        <img style="width:100%" height="150" :src="item.airPicture" />
        <div class="body-footer">{{item.airName}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./indexUrl";
export default {
  inject: ["reback"],
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
      this.reback()
      this.$router.push({
          path: "/detailMain",
          query: {
            airId: res
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  padding: 3px 5px;
  overflow-y: scroll;
  .list {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .main-body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .main-box-body {
    cursor: pointer;
    width: 49%;
    border-radius: 10px;
    box-shadow: #6ea2a2 0 0 6px;
    background: #fbfbfb;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .body-footer {
      font-size: 14px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>