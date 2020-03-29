<template>
  <div>
    <el-button type="primary" @click="back()" icon="el-icon-arrow-left">返回</el-button>
  </div>
</template>
<script>
export default {
  props: { detail: "" },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$emit("goBack", "back");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>