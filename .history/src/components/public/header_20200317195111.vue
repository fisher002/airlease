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
.header_box{
    min-height: 300px;
    display: flex;
    .header_head{
        min-height: 60px;
        background: white;
    }
    .header_menu{
        min-height: 40px;
        background: rgb(95, 95, 255);
    }
    .header_auto{
        min-height: 200px;
        background: rgb(190, 177, 177);
    }
}
</style>