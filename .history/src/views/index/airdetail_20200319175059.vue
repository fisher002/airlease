<template>
  <el-container>
    <el-header height="auto">
      <Header></Header>
    </el-header>
    <el-main>
      <detail v-if="imgdata" :datas="imgdata"></detail>
    </el-main>
    <el-footer>版权所有，侵权必究！</el-footer>
  </el-container>
</template>
<script>
import Header from "@/components/public/header";
import detail from "@/components/public/detail";
import imgs from "@/components/json/imgs";
import dt from "@/components/json/details";

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
      let imgId = this.$route.query.id;
      let data = { imglist: "", detaildata: "" };
      if (imgId == null || imgId == undefined) {
        console.log("error,无imgIg");
        return;
      }
      for (let i in imgs) {
        if (imgs[i].imgId == imgId) {
          data.imglist = imgs[i];
        }
      }
    //   this.details.forEach(de => {
    //     if (de.imgId == imgId) {
    //       data.detaildata = de;
    //     }
    //   });
      this.imgdata = data;
      console.log(data)
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