<template>
  <div class="comment-box">
    <div class="body-head">用户评价</div>
    <div class="body-comment-list"></div>
    <div class="body-send-btn">
      <el-input v-model="sendData.content" placeholder="请输入内容"></el-input>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "usercomment",
  props: {
    comments: ""
  },
  data() {
    return {
      sendData: {
        username: "",
        userId: "",
        headImg: '',
        content: "",
        date: ""
      }
    };
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
    display: flex;
  }
}
</style>