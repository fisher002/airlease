<template>
  <div class="header_box">
    <div class="header_head"></div>
    <div class="header_menu"></div>
    <div class="header_auto"></div>
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
    min-height: 60px;
    width: 100%;
    background: rgb(204, 185, 185);
  }
  .header_menu {
    min-height: 40px;
    width: 100%;
    background: rgb(95, 95, 255);
  }
  .header_auto {
    min-height: 200px;
    width: 100%;
    background: rgb(190, 177, 177);
  }
}
</style>