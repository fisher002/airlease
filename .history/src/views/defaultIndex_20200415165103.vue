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
    this.reload();
  }
};
</script>
<style lang="scss" scoped>
</style>