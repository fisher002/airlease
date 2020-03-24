<template>
  <div class="header_box">
    <div class="header_head">1</div>
    <div class="header_menu">2</div>
    <div class="header_auto">
      <el-carousel :interval="5000" type="card" trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in imageData" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
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
      imageData: [...images]
    };
  },
  created() {
    //   console.log(this.imageData)
  }
};
</script>
<style lang="scss" scoped>
.header_box {
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  .header_head {
    min-height: 100px;
    width: 100%;
    background: rgb(235, 226, 226);
  }
  .header_menu {
    min-height: 40px;
    width: 100%;
    background: rgb(95, 95, 255);
  }
  .header_auto {
    min-height: 350px;
    width: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>