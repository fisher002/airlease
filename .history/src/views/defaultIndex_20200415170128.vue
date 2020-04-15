<template>
<div>welcome</div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {};
  },
  created() {
  },
  mounted() {
    this.reload();
  }
};
</script>
<style lang="scss" scoped>
</style>