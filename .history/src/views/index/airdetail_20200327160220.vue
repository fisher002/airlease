<template>
  <el-container>
    <el-header height="auto">
      <Header></Header>
    </el-header>
    <el-main>
      <detail v-if="imgdata" :datas="imgdata" @callback="digShow()"></detail>
    </el-main>
    <el-footer>版权所有，侵权必究！</el-footer>
  </el-container>
</template>
<script>
import Header from "@/components/public/header";
import detail from "@/components/public/detail";
import imgs from "@/components/json/imgs";
import dt from "@/components/json/details";
import api from './indexUrl'

export default {
  components: { Header, detail },
  data() {
    return {
      images: imgs,
      details: dt,
      imgdata: ""
    };
  },
  created() {
    this.checkAirMsg();
  },
  methods: {
    // 识别空调信息
    checkAirMsg() {
      let airId = this.$route.query.airId;
      let data = { imglist: "", detaildata: "" };
      if (airId == null || airId == undefined) {
        return;
      }
      let imgId = '002';
      for (let i in imgs) {
        if (imgs[i].imgId == imgId) {
          data.imglist = imgs[i];
        }
      }
      api.getAirByAirId({airId: airId}).then(res=>{
        data.detaildata = res.data;
      },res=>{
        console.log('error');
      })
      this.imgdata = data;
    },
    // 详情组件回调
    digShow(res) {
      console.log('返回: '+res);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: azure;
  color: #333;
  text-align: center;
  padding: 0 0 !important;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: azure;
  text-align: center;
  min-height: 600px;
  padding: 10px;
}
</style>