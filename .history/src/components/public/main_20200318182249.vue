<template>
  <div class="main-box" v-if="listdata">
    <div class="main-box-p">空调列表</div>
    <div class="main-box-body" v-for="item in listdata" :key="item.id">
      <img style="width:100%" height="250" src="../../../static/img/timg.jpg" />
      <div class="body-footer">
        <span class="footer-p">{{item.name}}</span>
        <span class="footer-p">{{item.message}}</span>
        <el-button
          type="primary"
          @click="toDetail(item.id)"
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
const datas = [
  { id: "001", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "002", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "003", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "004", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "005", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "006", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "007", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "008", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "009", name: "格力", message: "押金2000 租赁价格:4元/天" },
  { id: "010", name: "格力", message: "押金2000 租赁价格:4元/天" }
];
export default {
  data() {
    return {
      listdata: [...datas]
    };
  },
  created() {
    // console.log(this.listdata.length % 5);
  },
  methods: {
    toDetail(res) {
      console.log("id" + res);
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
  .main-box-p {
      width: 100%;
      text-align: center;
      font-size: 16px;
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