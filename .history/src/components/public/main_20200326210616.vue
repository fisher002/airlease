<template>
  <div class="main-box" v-if="listdata">
    <div class="header_auto">
      <el-carousel :interval="5500" type="card" trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in imageData" :key="index">
          <img style="width:100%;height:100%" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-box-p">空调列表</div>
    <div class="main-box-body" v-for="item in listdata" :key="item.airId">
      <img
        @click="toDetail(item.airId)"
        style="width:100%"
        height="250"
        :src="item.airPicture"
      />
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
    <div
      class="main-box-bodys"
      v-for="n in ((listdata.length % 5) == 0 ? (listdata.length % 5) : (5 - (listdata.length % 5)))"
      :key="n"
    ></div>
  </div>
</template>
<script>
import api from '@/views/index/indexUrl'
const datas = [
  { id: "001", name: "格力1", message: "押金2000 租赁价格:4元/天" },
  { id: "002", name: "格力2", message: "押金2000 租赁价格:4元/天" },
  { id: "003", name: "格力3", message: "押金2000 租赁价格:4元/天" },
  { id: "004", name: "格力4", message: "押金2000 租赁价格:4元/天" },
  { id: "005", name: "格力5", message: "押金2000 租赁价格:4元/天" },
  { id: "006", name: "格力6", message: "押金2000 租赁价格:4元/天" },
  { id: "007", name: "格力7", message: "押金2000 租赁价格:4元/天" },
  { id: "008", name: "格力8", message: "押金2000 租赁价格:4元/天" },
  { id: "009", name: "格力9", message: "押金2000 租赁价格:4元/天" },
  { id: "010", name: "格力10", message: "押金2000 租赁价格:4元/天" }
];
const images = [
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg",
  "../../../static/img/lunbo.jpg"
];
export default {
  data() {
    return {
      listdata: '',
      imageData: [...images],
      params: {
        keyword: '',
        pageNumber: 0
      }
    };
  },
  created() {
    this.getAirsList(this.params);
  },
  methods: {
    // 空调详情
    toDetail(res) {
      this.$router.push({
          path: "/airdetail",
          query: {
            airId: res
          }
        });
    },
    // 获取空调列表
    getAirsList(params) {
      api.getAirList(params).then(res=>{
        this.listdata = res.data;
      },res=>{
        console.log('error');
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .header_auto {
    min-height: 350px;
    width: 100%;
  }
  .main-box-p {
    width: 100%;
    text-align: center;
    font-size: 26px;
  }
  .main-box-body {
    cursor: pointer;
    width: 19%;
    height: 350px;
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
  .main-box-body:hover {
    transition: box-shadow 0.5s;
    box-shadow: #ccca3f 0 0 20px;
  }
  .main-box-bodys {
    width: 19%;
    height: 350px;
    margin-top: 20px;
  }
}
</style>