<template>
  <div class="header_box">
    <div class="header_head">1</div>
    <div class="header_menu">2</div>
    <div class="header_auto">3</div>
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