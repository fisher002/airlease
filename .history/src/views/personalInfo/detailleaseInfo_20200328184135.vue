<template>
  <div>
    <div class="detail-top">
      <el-button @click="back()" icon="el-icon-arrow-left">返回</el-button>
      <el-button :disabled="detail.leaseStatus == 'available'" @click="showEdit = !showEdit" icon="el-icon-edit">{{showEdit ? '取消编辑' : '编辑'}}</el-button>
    </div>
    <div class="detail-bottom"></div>
  </div>
</template>
<script>
export default {
  props: { detail: "" },
  data() {
    return {
        showEdit: false,
    };
  },
  methods: {
    back() {
      this.$emit("goBack", "back");
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-top {
    display: flex;
    justify-content: space-between;
}
</style>