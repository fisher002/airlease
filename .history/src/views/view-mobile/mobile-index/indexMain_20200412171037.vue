<template>
  <div class="main-box">
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div class="index-body">
      <div>空调列表</div>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../static/img/timg.jpg" class="image" />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
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
    this.getAirList(this.params);
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
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
}
</style>