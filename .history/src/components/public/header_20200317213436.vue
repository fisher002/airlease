<template>
  <div class="header_box">
    <div class="header_head">
      <div class="header_head_left">
        <img src="../../../static/img/logo.png" />
      </div>
      <div class="header_head_right">
        <div class="header_head_right_box">
          <img width="50" height="50" src="../../../static/img/zhou.jpg"/>
          <div class="box_msg"><span>暂未登录</span></div>
        </div>
      </div>
    </div>
    <div class="header_menu">2</div>
    <div class="header_auto">
      <el-carousel :interval="5500" type="card" trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in imageData" :key="index">
          <img style="width:100%;height:100%" :src="item" />
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
    min-height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header_head_left {
      width: 48%;
      display: flex;
      img {
        margin-left: 200px;
      }
    }
    .header_head_right {
      width: 48%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .header_head_right_box {
        width: 35%;
        height: 50px;
        border-radius: 25px;
        border: rgb(238, 232, 198) solid 1px;
        margin-right: 30px;
        background: #eaf6f6;
        display: flex;
        img {
            border-radius: 50%;
        }
        .box_msg {
            border-left: antiquewhite solid 1px;
            width: 50%;
        }
      }
    }
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