<template>
  <div class="main-box">
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div class="index-body">
      <div>空调列表</div>
      <el-row>
        <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../static/img/timg.jpg" class="image" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
    // this.getAirList(this.params);
  },
  methods: {
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
    }
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  padding: 3px 3px;
  overflow: hidden;
  .image {
    width: 100%;
    display: block;
  }
}
</style>