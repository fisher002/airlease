<template>
  <div class="main-box">
    <div class="main-box-body">
      <img width="350" height="250" src="../../../static/img/timg.jpg" />
      <div class="body-footer">
          <span class="footer-p">格力</span>
          <span class="footer-p">押金2000 租赁价格:4元/天</span>
          <el-button type="primary" style="width:100%;border:none" plain>查看详情</el-button>
      </div>
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
.main-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .main-box-body {
    cursor: pointer;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    box-shadow: #6ea2a2 0 0 10px;
    background: gainsboro;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
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
      }
    }
  }
}
</style>