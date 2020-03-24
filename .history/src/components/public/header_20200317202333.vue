<template>
  <div class="header_box">
    <div class="header_head">1</div>
    <div class="header_menu">2</div>
    <div class="header_auto">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    background: rgb(226, 216, 216);
  }
}
</style>