<template>
  <div class="comment-box">
    <div class="body-head">用户评价</div>
    <div class="body-comment-list">
      <div class="auto-scroll">
        <div class="list-item">
          <div class="list-item-left">
            <img src="../../../static/img/shehui.jpg" />
          </div>
          <div class="list-item-right">
              <div class="right-name">李社会</div>
              <div class="right-content">太好了，再也找不到一家这么好的租赁公司了</div>
              <div class="right-time">2020-3-21 15:25</div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-send-btn">
      <el-input class="input-height" v-model="sendData.content" placeholder="来一发吧" clearable></el-input>
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
      if (this.sendData.content == "") {
        this.$message.error("不可以发送空白内容！");
        return;
      }
      console.log("发送评论: " + this.sendData.content);
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
    .auto-scroll {
      height: 100%;
      width: 105%;
      overflow-y: scroll;
      .list-item {
        width: 100%;
        min-height: 50px;
        display: flex;
        .list-item-left {
          width: 10%;
          height: 100%;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }
        .list-item-right {
          width: 90%;
        }
      }
    }
  }
  .body-send-btn {
    width: 100%;
    height: 8%;
    display: flex;
  }
}
</style>