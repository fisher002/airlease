<template>
  <div class="comment-box">
    <div class="body-head">用户评价</div>
    <div class="body-comment-list">
      <div class="auto-scroll">
        <div class="list-item" v-for="(item,index) in comments" :key="index">
          <div class="list-item-left">
            <img :src="item.headImg" />
          </div>
          <div class="list-item-right">
            <div class="right-name">{{item.name}}</div>
            <div class="right-content">{{item.content}}</div>
            <div class="right-time">{{item.comDate}}</div>
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
        name: "张大炮",
        userId: "dsfd1sf1sd5621as31dsa63",
        headImg:
          "http://i1.hdslb.com/bfs/face/3b4d10591282b0e587acc7ad970e4024c377cbe3.jpg@52w_52h.webp",
        content: "",
        comDate: ""
      }
    };
  },
  methods: {
    sendComment() {
      if (this.sendData.content == "") {
        this.$message.error("不可以发送空白内容！");
        return;
      }
      this.sendData.comDate = this.formatDate();
      this.comments.push(this.sendData);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(),
      mouth = (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : (date.getMonth()+1),
      day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
      hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
      minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return year +'-'+ mouth +'-'+ day +' '+ hour +':'+ minute;
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