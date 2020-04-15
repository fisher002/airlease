<template>
  <div class="comment-box" v-loading="loading">
    <div class="body-head">用户评价</div>
    <div class="body-comment-list">
      <div class="auto-scroll">
        <div class="list-item" v-for="(item,index) in commentData" :key="index">
          <div class="list-item-left">
            <img :src="item.userMessage.headPiuture" />
          </div>
          <div class="list-item-right">
            <div class="right-name">{{item.userMessage.name}}</div>
            <div class="right-content">{{item.userComment.commentContent}}</div>
            <div class="right-time">{{formatDate(item.userComment.commentDate)}}</div>
          </div>
        </div>
        <div @click="toLoadMord()">{{remind}}</div>
      </div>
    </div>
    <div class="body-send-btn">
      <el-input class="input-height" v-model="data.commentContent" placeholder="来一发吧" clearable></el-input>
      <el-button @click="sendComment()" type="primary">发送</el-button>
    </div>
  </div>
</template>
<script>
import api from "@/views/index/indexUrl";
export default {
  name: "usercomment",
  props: { datas: "" },
  data() {
    return {
      loading: false,
      message: "",
      commentData: [],
      remind: "点击加载更多",
      total: "",
      pages: "",
      data: {
        airId: "",
        airName: "",
        userId: "",
        username: "",
        commentContent: "",
        commentDate: new Date(),
        isDelete: "false"
      },
      params: {
        airId: "",
        pageNumber: 0
      }
    };
  },
  created() {
    if (this.$route.query.airId) {
      this.getUserCommentList();
    }
  },
  methods: {
    // 查询该空调的评论
    getUserCommentList(type) {
      this.loading = !this,loading;
      this.params.airId = this.$route.query.airId;
      if (this.params.pageNumber < this.pages - 1) {
        this.params.pageNumber++;
      }
      api.getUserCommentList(this.params).then(
        res => {
          if (res.data.code == "200") {
            this.loading = !this,loading;
            this.total = res.data.total;
            this.pages = res.data.pages;
            if (res.data.total < 10) {
              this.remind = "没有更多了";
            }
            if (type == "mord" && res.data.total > 10) {
              this.commentData.push(...res.data.data);
              this.remind = "点击加载更多";
              return;
            }
            this.commentData = res.data.data;
          }
          this.loading = !this,loading;
        },
        res => {
          this.loading = !this,loading;
          this.$message.error(res.data.message);
        }
      );
    },
    // 加载更多
    toLoadMord() {
      if (this.commentData.length % 10 > 0) {
        this.remind = "没有更多了";
        return;
      }
      this.getUserCommentList("mord");
    },
    // 添加评论
    sendComment() {
      let user = this.$session.get("user");
      if (!user) {
        this.$message.error("未登录，不可评论！");
        return;
      }
      if (this.data.commentContent == "") {
        this.$message.error("不可以发送空白内容！");
        return;
      }
      this.data.airId = this.datas.airId;
      this.data.airName = this.datas.airName;
      this.data.userId = user.userId;
      this.data.username = user.username;
      this.addComment(this.data);
    },
    // 添加评论
    addComment(res) {
      if (res) {
        api.addUserComment(res).then(
          res => {
            if (res.data == "100000") {
              this.$message.success("评论成功");
              this.data.commentContent = "";
              this.getUserCommentList("mord");
            }
          },
          res => {
            this.$message.error("评论失败");
          }
        );
      }
    },
    // 日期格式化
    formatDate(res) {
      let date = new Date(res);
      let year = date.getFullYear(),
        mouth =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1,
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        minute =
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return year + "-" + mouth + "-" + day + " " + hour + ":" + minute;
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
    height: 40px;
    font-size: 18px;
    background: #e4e4e6;
  }
  .body-comment-list {
    width: 100%;
    height: 418px;
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
          padding: 3px 3px;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }
        .list-item-right {
          width: 90%;
          padding: 3px 0;
          border-bottom: 1px solid #e6d9d9;
          .right-name {
            font-size: 14px;
            width: 100%;
            text-align: left;
            color: #5e5eff;
          }
          .right-content {
            font-size: 15px;
            width: 100%;
            text-align: left;
            padding: 5px 0px;
          }
          .right-time {
            font-size: 12px;
            width: 100%;
            text-align: left;
            color: gray;
          }
        }
      }
    }
  }
  .body-send-btn {
    width: 100%;
    height: 40px;
    display: flex;
  }
}
</style>