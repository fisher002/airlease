<template>
  <div class="comment-box">
      <div class="body-head"></div>
      <div class="body-comment-list"></div>
      <div class="body-send-btn"></div>
  </div>
</template>
<script>
export default {
  name: "usercomment",
  props: {
    comments: ""
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.comment-box {
    width: 100%;
    height: 100%;
    .body-head {
        width: 100%;
        height: 10%;
    }
    .body-comment-list {
        width: 100%;
        height: 80%;
    }
    .body-send-btn {
        width: 100%;
        height: 10%;
    }
}
</style>