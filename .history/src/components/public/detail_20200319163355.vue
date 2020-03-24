<template>
  <div class="detail-box">
    <div class="detail-de">所选空调详情</div>
    <div class="detail-body"></div>
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
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-body {
    width: 90%;
    height: 600px;
  }
}
</style>