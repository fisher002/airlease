<template>
  <div class="detail-box">
    <div class="detail-de">所选空调详情</div>
    <div class="detail-body">
      <div class="detail-body-left"></div>
      <div class="detail-body-right"></div>
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
.detail-box {
  width: 100%;
  background: azure;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .detail-de {
    width: 100%;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-body {
    width: 90%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    .detail-body-left {
      width: 29%;
      height: 100%;
      background: violet;
    }
    .detail-body-right {
      width: 69%;
      height: 100%;
      background: rgb(97, 53, 97);
    }
  }
}
</style>