<template>
  <div class="comment-box">
    <div class="body-head">用户评价</div>
    <div class="body-comment-list"></div>
    <div class="body-send-btn">
      <el-input class="input-height" v-model="sendData.content" placeholder="来一发吧"></el-input>
      <el-button @click="sendComment()" type="primary">发送</el-button>
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
        headImg: "",
        content: "",
        date: ""
      }
    };
  },
  methods: {
    sendComment() {
        if(this.sendData.content == ""){
            this.$message.error('不可以发送空白内容！')；
            return;
        }
        console.log('发送评论: '+this.sendData)
    }
  }
};
</script>
<style lang="scss" scoped>
.comment-box {
  width: 100%;
  height: 100%;
  .body-head {
    width: 100%;
    height: 8%;
    font-size: 18px;
    background: #e4e4e6;
  }
  .body-comment-list {
    width: 100%;
    height: 84%;
  }
  .body-send-btn {
    width: 100%;
    height: 8%;
    display: flex;
  }
}
</style>