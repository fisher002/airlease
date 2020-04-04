<template>
  <div>
    <div v-if="params.type == 'add'">add</div>
    <div v-if="params.type == 'detail'">detail</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      params: {
        adminId: "",
        type: ""
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
</style>