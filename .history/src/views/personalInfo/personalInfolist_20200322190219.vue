<template>
  <div>
    <headerV2></headerV2>
    <div class="info-box">
      <div class="info-body-left"></div>
      <div class="info-body-right"></div>
    </div>
  </div>
</template>
<script>
import headerV2 from "@/components/public/headerV2";
export default {
  components: { headerV2 },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.info-box {
  width: 60%;
  min-height: 600px;
  box-shadow: #6ea2a2 0 0 10px;
  .info-body-left {
    width: 30%;
    height: 100%;
  }
  .info-body-right {
    width: 70%;
    height: 100%;
  }
}
</style>